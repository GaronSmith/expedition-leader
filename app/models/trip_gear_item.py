from .db import db

trip_gear_items = db.Table(
    "trip_gear_items",
    db.Column("trip_id", db.Integer, db.ForeignKey('trips.id'), primary_key=True, nullable=False, ),
    db.Column("gear_id", db.Integer, db.ForeignKey("gear_logs.id"), primary_key=True, nullable=False)
)
