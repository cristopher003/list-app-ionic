import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {

  newTask: string = '';

  constructor(private taskService: TaskService) {}

  addTask() {
    if (this.newTask.trim() !== '') {
      this.taskService.addTask(this.newTask);
      this.newTask = ''; // Limpiar el input
    }
  }

  ngOnInit() {
  }

}
