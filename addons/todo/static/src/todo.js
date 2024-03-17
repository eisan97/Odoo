/** @odoo-module **/

import { registry } from "@web/core/registry";
const {Component,onWillStart,useState} = owl;

class TodoList extends Component{
    setup(){
        this.state = useState({
            tasklist:[
                // {"id":"1","name":"Sample Task 1","complete":false},
                // {"id":"2","name":"Sample Task 2","complete":false},
                // {"id":"3","name":"Sample Task 3","complete":true},
                // {"id":"4","name":"Sample Task 4","complete":false},
                // {"id":"5","name":"Sample Task 5","complete":false},
            ]
        })
        onWillStart(async() =>{
            await this.getAllTask()
        })

    }

    async getAllTask(){
        const orm =  this.env.services.orm
        // var allTaskList = await orm.searchRead('to.do',[],['name','complete'])
        // console.log(allTaskList)
        this.state.tasklist = await orm.searchRead('to.do',[],['name','complete'])
    }

}
TodoList.template = "todo.todo_list";
registry.category("actions").add("todo.todo_client_action", TodoList);

