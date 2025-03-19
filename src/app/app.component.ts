import { Component, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChildComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'practice-Component-Interaction';
  parentText: string = '';

  receivedChildText: string = '';
  receiveMessage(value: string) {
    this.receivedChildText = value;
  }
}
