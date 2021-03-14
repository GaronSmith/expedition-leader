from flask import Blueprint, jsonify, request
from flask_login import login_required
from sqlalchemy import or_
import json
from app.models import User

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/search', methods=['POST'])
@login_required
def get_users():
    data = json.loads(request.data)
    value = data['value']
    print('*****************', value)
    users = User.query.filter(or_(User.first_name.like(f'%{value}%'), \
                                User.last_name.like(f'%{value}%'),\
                                User.email.like(f'%{value}%'))).limit(15)
    print('************', users)
    return {"data": [ user.to_dict() for user in users]}
        