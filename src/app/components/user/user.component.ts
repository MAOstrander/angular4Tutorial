import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies:string[];
  posts:Post[];
  editMode:boolean = false;

  constructor(private dataService:DataService) { 
    console.log("Constructor ran");
  }
  
  ngOnInit() {
    console.log("ngOnInit ran");
    this.name = "Jane Doe";
    this.age = 30;
    this.email = "mat@mat.mat"
    this.address = {
      street:'123 Fake St.',
      city:'Memphis',
      state:'TN'
    }
    this.hobbies = ['code', 'play games', 'eat ice cream']

    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  onClick(){
    this.name = "Changing Names";
    this.hobbies.push('Testing')
  }

  toggleEdit(){
    this.editMode = !this.editMode;
  }
  
  addHobby(newHobby) {
    this.hobbies.unshift(newHobby)
    return false;
  }
  
  deleteHobby(hobby) {
    for(let i = 0; i < this.hobbies.length; i++){
      if(this.hobbies[i] == hobby) {
        this.hobbies.splice(i,1);
      }
    }
    return false;
  }

}

interface Address {
  street: string,
  city: string,
  state: string
}

interface Post {
  id: number,
  title: string,
  body: string,
  userId: number
}