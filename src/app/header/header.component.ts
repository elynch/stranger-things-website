import { Component, OnInit } from '@angular/core';
import en_US from '../../assets/en_US.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  title = en_US.heading;
  subhead = en_US.description;

  constructor() { }

  ngOnInit() {
  }

}
