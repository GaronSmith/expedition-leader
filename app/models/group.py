from .db import db

class Group(db.Model):
    __tablename__ = 'groups'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable = False)

    trips = db.relationship("Trip", back_populates="trips")
    members = db.relationship("GroupMember", back_populates="group_members")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "trips": self.trips
        }