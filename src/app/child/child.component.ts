import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input() inputText: string = '';
  @Output() outputText: EventEmitter<string> = new EventEmitter<string>();
  message: string = '';

  sendMessage(value: string) {
    this.message = value;
    this.outputText.emit(this.message);
  }
}
