import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatIcon, MatToolbar, MatIconButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'weather-app';
}
