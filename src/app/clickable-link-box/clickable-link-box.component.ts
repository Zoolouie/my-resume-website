import { Component, OnInit, Input } from '@angular/core';
import { DescriptionBox } from '../app.component';

@Component({
  selector: 'app-clickable-link-box',
  templateUrl: './clickable-link-box.component.html',
  styleUrls: ['./clickable-link-box.component.scss']
})
export class ClickableLinkBoxComponent implements OnInit {

  @Input() information: DescriptionBox;

  constructor() { }

  ngOnInit() {
  }

}
