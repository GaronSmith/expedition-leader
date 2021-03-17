from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
import json
from sqlalchemy import and_
from app.models import Trip, db

trip_routes = Blueprint("trip", __name__)

@trip_routes.route("/", methods = ['POST'])
@login_required
def get_group_trips():
    data = json.loads(request.data)
    group_id= data['group_id']

    trips = Trip.query.filter(Trip.group_id == group_id).all()

    return {trip.id: trip.to_dict() for trip in trips}