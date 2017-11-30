import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {
  currentYear;
  copyrightYear = 2017;
  displayYear:string = '2017';

  constructor() { 
    this.currentYear = new Date().getFullYear()
    if (this.currentYear > this.copyrightYear) {
      this.displayYear = this.copyrightYear + '-' + this.currentYear;
    }
  }

  ngOnInit() {
  }

}
