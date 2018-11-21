import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  hyperLink = "www.bugsplat.com";
  imgLink = "../assets/img/bugsplat.PNG"
  descrition = "my time at bugsplat"
}
