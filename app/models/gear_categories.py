from .db import db 

class GearCategory(db.Model):
    __tablename__ = 'gear_categories'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)

    def to_dict(self):
        return {
            "id":self.id,
            "name": self.name
        }
