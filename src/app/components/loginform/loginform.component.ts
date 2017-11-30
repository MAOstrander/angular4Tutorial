import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginformComponent implements OnInit {

  constructor(private router: Router, private userData: UserDataService) { }

  ngOnInit() {
  }

  loginUser(formEvent) {
    formEvent.preventDefault();
    console.log(formEvent);
    var username = formEvent.target.elements[0].value;
    var password = formEvent.target.elements[1].value;
    console.log(`username: ${username}, password: ${password}`);

    if (username === 'test' && password === 'test') {
      this.userData.setUserLoggedIn();
      this.router.navigate(['user']);
    }

    return false;
  }

}
