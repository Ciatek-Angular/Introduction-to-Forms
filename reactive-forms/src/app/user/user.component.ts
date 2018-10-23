import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  userForm: FormGroup

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl('ahmad',[
          Validators.required,
          Validators.minLength(8),
          // Validators.pattern('ahmad khoja')
        ]
       ),
      email: new FormControl('ahmad@gmail.com'),
      username: new FormControl('yassin'),
      phone: new FormControl('01123456'),
    })
  }

  get name(){
    return this.userForm.get('name')
  }

  submit(userForm){
    console.log('form is submitted', userForm)
  }

}
