import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListsComponent } from "./shared/components/lists/lists.component";
import { TablesComponent } from "./shared/components/tables/tables.component";
import { TodoComponent } from './shared/components/todo/todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ListsComponent, TablesComponent,TodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'table';
}
