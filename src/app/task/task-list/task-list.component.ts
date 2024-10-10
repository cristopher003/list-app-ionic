import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent  implements OnInit {

  tasks: string[] = [];
  editingIndex: number | null = null;
  taskToEdit: string = '';

  constructor(private taskService: TaskService) {
    this.loadTasks();
  }

  loadTasks() {
    this.tasks = this.taskService.getTasks();
  }

  editTask(index: number) {
    this.editingIndex = index;
    this.taskToEdit = this.tasks[index]; // Cargar la tarea a editar
  }

  updateTask() {
    if (this.editingIndex !== null && this.taskToEdit.trim() !== '') {
      this.taskService.editTask(this.editingIndex, this.taskToEdit);
      this.taskToEdit = ''; // Limpiar el input
      this.editingIndex = null; // Reiniciar el índice de edición
      this.loadTasks(); // Recargar la lista de tareas
    }
  }

  deleteTask(index: number) {
    this.taskService.deleteTask(index);
    this.loadTasks(); // Recargar la lista de tareas
  }
  ngOnInit() {}

}
