import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: string[] = [];

  constructor() {
    this.loadTasks();
  }

  loadTasks() {
    const storedTasks = localStorage.getItem('tasks');
    this.tasks = storedTasks ? JSON.parse(storedTasks) : [];
  }

  getTasks(): string[] {
    return this.tasks;
  }

  addTask(task: string) {
    this.tasks.push(task);
    this.saveTasks();
  }

  editTask(index: number, newTask: string) {
    this.tasks[index] = newTask;
    this.saveTasks();
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.saveTasks();
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
