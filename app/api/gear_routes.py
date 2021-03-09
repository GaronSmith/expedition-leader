from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
import json
from collections import defaultdict
from app.models import GearCategory, GearLog, db
from app.forms import GearForm
from ..helpers import s3, upload_file_to_s3, allowed_file


gear_routes = Blueprint('gear', __name__)

@gear_routes.route("/categories", methods=["GET"])
@login_required
def get_gear():
    print('*******',current_user)
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
    form = GearForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    url = ''
    if request.files:
        url = upload_file_to_s3(request.files['image_file'])
    
    if form.validate_on_submit():
        item = GearLog(
             name = form.data['name'],
             category_id = form.data['category_id'],
             manufacturer = form.data['manufacturer'],
             status = form.data['status'],
             purchase_date = form.data['purchase_date'],
             cost = form.data['cost'],
             quantity = form.data['quantity'],
             image_url= url,
             owner_id=form.data['owner_id']
        )

        db.session.add(item)
        db.session.commit()
        return item.to_dict()


@gear_routes.route("/items/<int:id>", methods=["DELETE"])
def delete_item(id):
    GearLog.query.filter(GearLog.id == id).delete()

    db.session.commit()
    return {id:id}

