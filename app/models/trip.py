from .db import db
from datetime import datetime
from .trip_member import TripMember
from .trip_gear_item import trip_gear_items

class Trip(db.Model):
    __tablename__ = 'trips'

    id = db.Column(db.Integer, primary_key=True)
    group_id = db.Column(db.Integer, db.ForeignKey("groups.id"), nullable=False)
    name = db.Column(db.String(255), nullable=False)
    destination = db.Column(db.String(255), nullable=False)
    date = db.Column (db.DateTime, nullable=False)

    group = db.relationship('Group', back_populates="trips")
    members = db.relationship("User", secondary="trip_members", back_populates='trips')
    # trip_gear = db.relationship("GearLog", secondary=trip_gear_items, back_populates='trips')

    def to_dict(self):
        return {
            "id": self.id,
            "group_id": self.group_id,
            "name": self.name,
            "destination": self.destination,
            "date": self.date,
        }
