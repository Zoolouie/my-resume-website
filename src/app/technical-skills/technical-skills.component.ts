import { Component, OnInit } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-technical-skills',
  templateUrl: './technical-skills.component.html',
  styleUrls: ['./technical-skills.component.scss']
})
export class TechnicalSkillsComponent implements OnInit {

  constructor() { }
  public skills = [
    {
      name: 'Angular',
      color: 'primary',
      mode: 'determinate',
      value: 90,
      bufferValue: 75
    },
    {
      name: 'C++',
      color: 'primary',
      mode: 'determinate',
      value: 80,
      bufferValue: 75
    },
    {
      name: 'Python',
      color: 'primary',
      mode: 'determinate',
      value: 80,
      bufferValue: 75
    },
    {
      name: 'mySQL/postGreSQL',
      color: 'primary',
      mode: 'determinate',
      value: 60,
      bufferValue: 75
    },
    {
      name: 'Git',
      color: 'primary',
      mode: 'determinate',
      value: 60,
      bufferValue: 75
    },
    {
      name: 'Linux',
      color: 'primary',
      mode: 'determinate',
      value: 50,
      bufferValue: 75
    },
    {
      name: 'Gimp',
      color: 'primary',
      mode: 'determinate',
      value: 50,
      bufferValue: 75
    },
    {
      name: 'Python',
      color: 'primary',
      mode: 'determinate',
      value: 50,
      bufferValue: 75
    },
  

  ]

  ngOnInit() {
  }

}
