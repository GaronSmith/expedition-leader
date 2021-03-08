from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import GearCategory, GearLog
import json

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
    return {item.id: item.to_dict() for item in items}

