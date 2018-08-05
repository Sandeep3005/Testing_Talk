import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: string;
  @Output() onTodoItemDelete = new EventEmitter();
  @ViewChild('itemName') itemName: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log(this.todo);
  }

  deleteTodoItem(ele) {
    console.log(ele.target.id);
    this.onTodoItemDelete.emit(ele.target.id);
  }

  completeTodoItem() {
    console.log(this.itemName.nativeElement);
    this.itemName.nativeElement.classList.add('completed');
  }
}
