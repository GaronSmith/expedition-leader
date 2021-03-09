from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DateField
from wtforms.validators import DataRequired, Email, ValidationError


class GearForm(FlaskForm):
    owner_id = IntegerField("owner_id", validators=[DataRequired()])
    name = StringField("name", validators=[DataRequired()])
    category_id = IntegerField("category_id", validators=[DataRequired()])
    manufacturer = StringField("manufacturer")
    image_url = StringField("image_url")
    status = StringField("status")
    purchase_date = DateField("purchase_date")
    cost = IntegerField("cost")
    quantity = IntegerField("quantity")
