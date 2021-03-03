from .db import db
from datetime import datetime

class Trip(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    group_id = db.Column(db.Integer, db.ForeignKey("groups.id"), nullable=False)
    name = db.Column(db.String(255), nullable=False)
    destination = db.Column(db.String(255), nullable=False)
    date = db.Column (db.DateTime, nullable=False)

    group = db.relationship('Group', back_populates="group")
    def to_dict(self):
        return {
            "id": self.id,
            "group_id": self.group_id,
            "name": self.name,
            "destination": self.destination,
            "date": self.date,
        }
