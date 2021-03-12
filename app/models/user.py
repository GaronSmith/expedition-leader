from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime 

class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  first_name = db.Column(db.String(50), nullable=False)
  last_name = db.Column(db.String(50), nullable = False)
  email = db.Column(db.String(255), nullable = False, unique = True)
  hashed_password = db.Column(db.String(255), nullable = False)
  street_address = db.Column(db.String(500))
  town = db.Column(db.String(500))
  state = db.Column(db.String(50))
  zipcode = db.Column(db.Integer)
  country = db.Column(db.String(50))
  qr_image_url = db.Column(db.String, nullable=False)
  profile_image_url = db.Column(db.String(300))
  created_at = db.Column(db.DateTime, nullable=False, default=datetime.now())

  gear = db.relationship('GearLog', back_populates="owner", cascade="all,delete-orphan")
  groups = db.relationship("Group", secondary="group_members", back_populates= 'members')
  trips = db.relationship("Trip", secondary='trip_members', back_populates='members')
  

  @property
  def password(self):
    return self.hashed_password


  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)


  def check_password(self, password):
    return check_password_hash(self.password, password)


  def to_dict(self):
    return {
        "id": self.id,
        "first_name": self.first_name,
        "last_name": self.last_name,
        "email": self.email,
        "profile_image_url": self.profile_image_url,
        "street_address": self.street_address,
        "town": self.town,
        "state": self.state,
        "zipcode": self.zipcode,
        "country": self.country,
        "qr_image_url": self.qr_image_url,
        "groups":[group.to_dict() for group in self.groups]
    }
