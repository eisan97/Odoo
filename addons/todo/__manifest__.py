{
    'name':'Todo',
    'author':'Thin Ei San',
    'depends':['web'],
    'data':[
        'security/ir.model.access.csv',
        'views/todo.xml',
    ],
    'license':'LGPL-3',
    'assets': {
        'web.assets_backend': [
            'todo/static/src/todo.js',
            'todo/static/src/todo.xml',
        ],
    },

}