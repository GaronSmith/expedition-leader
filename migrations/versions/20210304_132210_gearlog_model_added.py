"""gearlog model added

Revision ID: 15fcb7da6845
Revises: 5779ad41c070
Create Date: 2021-03-04 13:22:10.431080

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '15fcb7da6845'
down_revision = '5779ad41c070'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('gear_logs',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('owner_id', sa.Integer(), nullable=False),
    sa.Column('manufacturer', sa.String(length=200), nullable=True),
    sa.Column('image_url', sa.Text(), nullable=True),
    sa.Column('status', sa.String(length=50), nullable=True),
    sa.Column('purchase_date', sa.DateTime(), nullable=False),
    sa.Column('cost', sa.Integer(), nullable=True),
    sa.Column('quantity', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['owner_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('gear_logs')
    # ### end Alembic commands ###