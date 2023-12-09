from odoo import api,fields,models

class ToDo(models.Model):
    _name = 'to.do'
    _description = 'To Do'

    name = fields.Char()
    complete = fields.Boolean() 