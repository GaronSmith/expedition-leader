from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime 

class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  first_name = db.Column(db.string(50, nullable = False))
  last_name = db.Column(db.string(50, nullable = False))
  email = db.Column(db.String(255), nullable = False, unique = True)
  hashed_password = db.Column(db.String(255), nullable = False)
  image_url = db.Column(db.Text)
  street_address = db.Column(db.String(500))
  town = db.Column(db.String(500))
  state = db.Column(db.String(50))
  zipcode = db.Column(db.Integer)
  country = db.Column(db.String(50))
  qr_image_url = db.Column(db.String, nullable = False)
  created_at = db.Column(db.DateTime, nullable = False, default = datetime.now())

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
      "username": self.username,
      "email": self.email
    }
