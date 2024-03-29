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
            response["accepted"].append(group.group_id)
        else:
            response["pending"].append(group.group_id)

    return response

@group_routes.route('/members', methods=["POST"])
@login_required
def get_members():
    data = json.loads(request.data)
    id = data['id']
    members = GroupMember.query.options(joinedload('users')).filter(and_(GroupMember.accepted == True, GroupMember.group_id == id)).all()
    return {member.users.id: member.users.to_dict() for member in members}

@group_routes.route('/addmember', methods=['POST'])
@login_required
def add_member():
    data = json.loads(request.data)
    group_id = data['groupId']
    user_id = data['userId']
    member = GroupMember(
        group_id=group_id,
        user_id=user_id,
        accepted=True,
        leader=True
    )
    
    db.session.add(member)
    db.session.commit()
    return {}

@group_routes.route('/removemember', methods=["POST"])
@login_required
def remove_member():
    data = json.loads(request.data)
    group_id = data['groupId']
    user_id = data['userId']
    GroupMember.query.filter(and_(GroupMember.group_id == group_id, GroupMember.user_id == user_id)).delete()
    db.session.commit()

    return {}


