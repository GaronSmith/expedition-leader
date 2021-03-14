from app.models import db, Group


def seed_Groups():

    groups = ['North London Mountaineering Club', 'Brooklyn Boulders', 'The Castle']\
    
    image_urls = [
        'https://expedition-leader.s3.us-east-2.amazonaws.com/climb1.jpeg',
        'https://expedition-leader.s3.us-east-2.amazonaws.com/climb2.jpeg',
        'https://expedition-leader.s3.us-east-2.amazonaws.com/climb3.jpeg'
        ]

    for i in range(len(groups)):
        new_group = Group(name=group[i], image_url=image_urls[i])
        db.session.add(new_group)

    db.session.commit()


def undo_categories():
    db.session.execute('TRUNCATE gear_categories CASCADE;')
    db.session.commit()
