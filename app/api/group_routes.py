from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
import json
from collections import defaultdict
from sqlalchemy import and_
from app.models import GroupMember, Group, db
from app.forms import GearForm
from ..helpers import s3, upload_file_to_s3, allowed_file


group_routes = Blueprint('group', __name__)

@group_routes.route('/', methods=["GET"])
def get_groups():
    groups = GroupMember.query.filter(and_(GroupMember.user_id == current_user.id, GroupMember.accepted == True)).all()    
