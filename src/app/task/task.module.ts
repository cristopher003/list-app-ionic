import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskPageRoutingModule } from './task-routing.module';

import { TaskPage } from './task.page';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskService } from './task.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskPageRoutingModule
  ],
  declarations: [TaskPage,TaskListComponent],
  providers: [TaskService] 
})
export class TaskPageModule {}
