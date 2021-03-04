from .db import db

trip_gear_items = db.Table(
    trip_id=db.Column(db.Integer, db.ForeignKey('trips.id'), nullable=False, ),
    gear_id=db.Column(db.Integer, db.ForeignKey("gear_logs.id"), nullable=False, )
)
    

