import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
  //animations: [
  //  trigger('state', [
  //    state('inactive', style({
  //      width: '0px'
  //    })),
  //    state('active', style({
  //      width: '200px'
  //    })),
  //    transition('inactive => active', animate('100ms ease-in')),
  //    transition('active => inactive', animate('100ms ease-out'))
  //  ])
  //]
})

export class SidebarComponent implements OnInit {
  state = 'active';

  constructor() { }

  ngOnInit() {
  }

  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }

}
