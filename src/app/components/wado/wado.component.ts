import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-wado',
  templateUrl: './wado.component.html',
  styleUrls: ['./wado.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WadoComponent implements OnInit {
  visible:boolean = true;

  constructor() { }

  ngOnInit() {
  }

  toggleDiv() {
    this.visible = !this.visible
  }

}
