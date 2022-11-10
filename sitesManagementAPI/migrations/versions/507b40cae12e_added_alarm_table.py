"""added alarm table

Revision ID: 507b40cae12e
Revises: 90eb28da4b62
Create Date: 2022-10-31 19:48:08.900740

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = '507b40cae12e'
down_revision = '90eb28da4b62'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('alarms',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('description', sa.String(length=100), nullable=True),
    sa.Column('property_id', sa.Integer(), nullable=True),
    sa.Column('created_at', sa.TIMESTAMP(timezone=True), server_default=sa.text('now()'), nullable=False),
    sa.ForeignKeyConstraint(['property_id'], ['properties.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.alter_column('properties', 'owner_id',
               existing_type=mysql.INTEGER(display_width=11),
               nullable=True)
    op.drop_constraint('properties_ibfk_1', 'properties', type_='foreignkey')
    op.create_foreign_key(None, 'properties', 'users', ['owner_id'], ['id'], ondelete='CASCADE')
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'properties', type_='foreignkey')
    op.create_foreign_key('properties_ibfk_1', 'properties', 'users', ['owner_id'], ['id'])
    op.alter_column('properties', 'owner_id',
               existing_type=mysql.INTEGER(display_width=11),
               nullable=False)
    op.drop_table('alarms')
    # ### end Alembic commands ###