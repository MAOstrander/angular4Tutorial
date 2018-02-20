import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserDashComponent implements OnInit {
  name='';
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.route);
    this.name = this.route.snapshot.params.name;
  }

}
