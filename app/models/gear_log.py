from .db import db

class GearLog(db.Model):
    __tablename__ = 'gear_logs'

    id = db.Column(db.Integer, primary_key = True)
    owner_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    category_id = db.Column(db.Integer, nullable=False)
    manufacturer = db.Column(db.String(200))
    image_url = db.Column(db.Text)
    status = db.Column(db.String(50))
    purchase_date = db.Column(db.DateTime, nullable = False, default = datetime.now())
    cost = db.Column(db.Integer)
    quantity = db.Column(db.Integer, nullable=False, default = 1 )

    owner = db.relationship("User", back_populates='users')
    trips = db.relationship("Trips", secondary="trip_gear_items", back_populates="trips")
    category = db.relationship("GearCategories", back_populates='gear_categories')

    def to_dict(self):
        return {
            "id": self.id,
            "owner_id": self.owner_id,
            "category_id": self.category_id,
            "manufacturer": self.manufacturer,
            "image_url": self.image_url,
            "status": self.status,
            "purchase_date": self.purchse_date,
            "cost": self.cost,
            "quantity": self.quantity,
        }
