import { TodoListService } from './../data-base/todo-list.service';
import { MockEmployeeRecordsService } from '../data-base/mock-employee-records.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import * as uniqid from 'uniqid';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  emp: any;
  now: string;
  todoItem: string = "";
  todoItemList;

  constructor(
    private mockEmployeeRecordsService: MockEmployeeRecordsService,
    private todoListService: TodoListService
  ) { }

  ngOnInit() {
    this.now = moment().format("MMM, DD YYYY");
    this.getCurrentEmp();
  }

  getCurrentEmp() {
    this.emp = this.mockEmployeeRecordsService.getCurrentEmp();
  }

  onAddTodoItem() {
    if (!this.todoItem) return;
    this.todoListService.addTodoItem({
      id: uniqid(),
      task: this.todoItem,
    });
    this.todoItem = "";
    this.updateTaskList();
  }

  updateTaskList() {
    this.todoItemList = this.todoListService.getTodoItems();
  }

  onTodoItemDelete(todoItemId) {
    console.log('todoItemId', todoItemId)
    this.todoListService.deleteTodoItem(todoItemId);
    this.updateTaskList();
  }
}
