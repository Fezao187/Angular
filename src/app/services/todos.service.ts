import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todoItem: Array<Todo> = [
    {
      title: 'groceries',
      id: 0,
      userId: 1,
      completed: false
    },
    {
      title: 'gym',
      id: 1,
      userId: 2,
      completed: false
    },
    {
      title: 'code',
      id: 2,
      userId: 3,
      completed: true
    }
  ];
  constructor() { }
}
