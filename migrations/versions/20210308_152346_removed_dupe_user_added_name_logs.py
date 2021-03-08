"""removed dupe user added name logs

Revision ID: 540f3be81e34
Revises: 2e837da188af
Create Date: 2021-03-08 15:23:46.079968

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '540f3be81e34'
down_revision = '2e837da188af'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('gear_logs', sa.Column('name', sa.String(), nullable=False))
    op.drop_column('users', 'image_url')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('image_url', sa.TEXT(), autoincrement=False, nullable=True))
    op.drop_column('gear_logs', 'name')
    # ### end Alembic commands ###
