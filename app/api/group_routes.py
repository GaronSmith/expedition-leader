from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
import json
from collections import defaultdict
from sqlalchemy import and_
from sqlalchemy.orm import joinedload
from app.models import GroupMember, Group, db
from app.forms import GearForm
from ..helpers import s3, upload_file_to_s3, allowed_file


group_routes = Blueprint('group', __name__)

@group_routes.route('/', methods=["GET"])
@login_required
def get_groups():
    groups = GroupMember.query.filter((GroupMember.user_id == current_user.id)).all()

    response = {"accepted":[], 'pending':[]}
    for group in groups:
        if(group.accepted):
            response["accepted"].append(group.id)
        else:
            response["pending"].append(group.id)

    return response

@group_routes.route('/members', methods=["POST"])
@login_required
def get_members():
    members = GroupMember.query.options(joinedload('users')).filter(GroupMember.accepted == True).all()


    print("*************", {member.users.id: member.users.to_dict() for member in members} )
    return {member.users.id: member.users.to_dict() for member in members}

