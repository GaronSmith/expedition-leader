from .db import db

class Group(db.Model):
    __tablename__ = 'groups'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable = False)
    image_url = db.Column(db.String(255))

    trips = db.relationship("Trip", back_populates="group")
    members = db.relationship("User", secondary='group_members', back_populates='groups')

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "trips": {trip.id:trip.to_dict() for trip in self.trips},
            "image_url":self.image_url
        }