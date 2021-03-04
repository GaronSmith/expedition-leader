from .db import db 

class GearCategory(db.Model):
    __tablename__ = 'gear_categories'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)

    gear_item=db.relationship("GearLog", back_populates="category")

    def to_dict(self):
        return {
            "id":self.id,
            "name": self.name
        }
