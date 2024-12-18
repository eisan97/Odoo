from odoo import api,fields,models

class MyList(models.Model):
    _name = 'my.list'
    _description = 'To Do'

    name = fields.Char()
    complete = fields.Boolean() 