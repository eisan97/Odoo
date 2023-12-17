/** @odoo-module **/

import { registry } from "@web/core/registry";
const {Component} = owl;

class TodoList extends Component{

}
TodoList.template = "todo.todo_list";
registry.category("actions").add("todo.todo_client_action", TodoList);

