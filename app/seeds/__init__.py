from flask.cli import AppGroup
from .users import seed_users, undo_users
from .gear_categories import seed_categories, undo_categories
from.groups import seed_groups,undo_groups
from .group_members import seed_members, undo_members
# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_categories()
    seed_groups()
    seed_members()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_categories()
    undo_groups()
    undo_members()
    # Add other undo functions here
