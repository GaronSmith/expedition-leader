from .db import db


class TripMember(db.Model):
    __tablename__ = "trip_members"

    id = db.Column(db.Integer, primary_key=True)
    trip_id = db.Column(db.Integer, db.ForeignKey("trips.id"), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(
        "users.id"), nullable=False)
    accepted = db.Column(db.Boolean, nullable=False, default=False)
    leader = db.Column(db.Boolean, nullable=False, default=False)

    # trip = db.relationship("Trip", back_populates='trips')

    def to_dict(self):
        return {
            "id": self.id,
            "trip_id": self.trip_id,
            "user_id": self.user_id,
            "accepted": self.accepted,
            "leader": self.leader,
        }
