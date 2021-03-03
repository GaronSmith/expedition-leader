from .db import db

trip_gear_items = db.Table(
    trip_id=db.Column(db.Integer, nullable=False, db.ForeignKey('trips.id'))
    gear_id=db.Column(db.Integer, nullable=False, db.ForeignKey("gear_logs.id"))
)
    

