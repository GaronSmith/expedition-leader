from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import GearCategory, GearLog
import json
from collections import defaultdict

gear_routes = Blueprint('gear', __name__)

@gear_routes.route("/categories", methods=["GET"])
def get_gear():
    categories = GearCategory.query.all()
    return {cat.id: {"id": cat.id, "name":cat.name} for cat in categories}


@gear_routes.route("/items", methods=["POST"])
def get_items():
    data = json.loads(request.data)
    id = data['id']
    items = GearLog.query.filter(GearLog.owner_id == id).all()
    res = defaultdict(lambda :[])
    for item in items:
        res[item.category_id].append(item.to_dict())
    
    return res


@gear_routes.route("/items/new", methods=["POST"])
def new_item():
    pass

