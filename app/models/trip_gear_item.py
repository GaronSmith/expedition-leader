from .db import db

class TripGearItem(db.Model):
    __tablename__ = 'tripe_gear_items'

    id = db.Column(db.Integer, primary_key=True)
    trip_id = db.Column(db.Integer, nullable=False, db.ForeignKey('trips.id'))
    gear_id = db.Column(db.Integer, nullable=False, db.ForeignKey("gear_logs.id"))

    