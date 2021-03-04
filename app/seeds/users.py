from werkzeug.security import generate_password_hash
from app.models import db, User
from datetime import datetime

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(email='demo@aa.io',
                password='password',
                first_name='Demo',
                last_name='User',
                qr_image_url='/thisisatest',
                created_at=datetime.today())

    db.session.add(demo)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
