import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clickable-link-box',
  templateUrl: './clickable-link-box.component.html',
  styleUrls: ['./clickable-link-box.component.scss']
})
export class ClickableLinkBoxComponent implements OnInit {

  @Input() hyperLink;
  @Input() imgLink;
  @Input() description;
  
  constructor() { }

  ngOnInit() {
  }

}
