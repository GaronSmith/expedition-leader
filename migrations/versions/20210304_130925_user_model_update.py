"""user-model-update

Revision ID: 5779ad41c070
Revises: ffdc0a98111c
Create Date: 2021-03-04 13:09:25.109073

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5779ad41c070'
down_revision = 'ffdc0a98111c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('country', sa.String(length=50), nullable=True))
    op.add_column('users', sa.Column('created_at', sa.DateTime(), nullable=False))
    op.add_column('users', sa.Column('first_name', sa.String(length=50), nullable=False))
    op.add_column('users', sa.Column('image_url', sa.Text(), nullable=True))
    op.add_column('users', sa.Column('last_name', sa.String(length=50), nullable=False))
    op.add_column('users', sa.Column('qr_image_url', sa.String(), nullable=False))
    op.add_column('users', sa.Column('state', sa.String(length=50), nullable=True))
    op.add_column('users', sa.Column('street_address', sa.String(length=500), nullable=True))
    op.add_column('users', sa.Column('town', sa.String(length=500), nullable=True))
    op.add_column('users', sa.Column('zipcode', sa.Integer(), nullable=True))
    op.drop_constraint('users_username_key', 'users', type_='unique')
    op.drop_column('users', 'username')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('username', sa.VARCHAR(length=40), autoincrement=False, nullable=False))
    op.create_unique_constraint('users_username_key', 'users', ['username'])
    op.drop_column('users', 'zipcode')
    op.drop_column('users', 'town')
    op.drop_column('users', 'street_address')
    op.drop_column('users', 'state')
    op.drop_column('users', 'qr_image_url')
    op.drop_column('users', 'last_name')
    op.drop_column('users', 'image_url')
    op.drop_column('users', 'first_name')
    op.drop_column('users', 'created_at')
    op.drop_column('users', 'country')
    # ### end Alembic commands ###