from .db import db
from datetime import datetime

class Trip(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    group_id = db.Column(db.Integer, db.ForeignKey("groups.id"), nullable=False)
    name = db.Column(db.String(255), nullable=False)
    destination = db.Column(db.String(255), nullable=False)
    date = db.Column (db.DateTime, nullable=False)

    group = db.relationship('Group', back_populates="group")
    members = db.relationship("TripMember", back_populates='trip_members')
    gear = db.relationship("GearLog", secondary='trip_gear_items', back_populates='gear_logs')
    def to_dict(self):
        return {
            "id": self.id,
            "group_id": self.group_id,
            "name": self.name,
            "destination": self.destination,
            "date": self.date,
        }
