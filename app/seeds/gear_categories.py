from app.models import db, GearCategory

def seed_categories():

    categories = ['Ascenders/Descenders', 'Belay Devices', \
                  'Camming Devices', 'Carabiners', 'Climbing Shoes', 'Rope', \
                  'Passive Protection', 'Quickdraws', 'Harnesses', 'Other']\

    for name in categories:
        new_cat = GearCategory(name= name)
        db.session.add(new_cat)
    
    db.session.commit()


def undo_categories():
    db.session.execute('TRUNCATE gear_categories CASCADE;')
    db.session.commit()