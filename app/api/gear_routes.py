from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import GearCategory

gear_routes = Blueprint('gear', __name__)

@gear_routes.route("/categories", methods=["GET"])
def get_gear():
    categories = GearCategory.query.all()
    print('hit')
    return {cat.id: {"id": cat.id, "name":cat.name} for cat in categories}


