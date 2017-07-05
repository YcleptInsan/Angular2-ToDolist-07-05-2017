import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'edit-task',
  template: `
    <div>
      <div *ngIf="childSelectedTask">
          <h3>{{childSelectedTask.description}}</h3>
          <p>Task Complete? {{childSelectedTask.done}}</p>
          <hr>
          <h3>Edit task</h3>
          <label>Enter task description:</label>
          <input [(ngModel)]="childSelectedTask.description">
          <label> Entertask priority (1-3):</label>
          <br>
          <input type="radio" [(ngModel)]="childSelectedTask.priority" [value]="1">1 (low priority)<br>
          <input type="radio" [(ngModel)]="childSelectedTask.priority" [value]="2">2 (medium priority)<br>
          <input type="radio" [(ngModel)]="childSelectedTask.priority" [value]="3">3 (highpriority)
          <br>
          <button (click)="doneButtonClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditTaskComponent {
  @Input() childSelectedTask: Task;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }


}
