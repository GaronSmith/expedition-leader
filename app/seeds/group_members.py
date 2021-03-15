from app.models import GroupMember, db

def seed_members():

    for i in range(1,4):
        new = GroupMember(
            group_id=i,
            user_id=1,
            accepted=True,
            leader=True
        )
        db.session.add(new)
    
    db.session.commit()


def undo_members():
    db.session.execute('TRUNCATE group_members CASCADE;')
    db.session.commit()
