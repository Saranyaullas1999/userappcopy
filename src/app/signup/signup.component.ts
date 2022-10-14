import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  
  name=""
  phone=""
  gender=""
  email=""
  address=""
  pincode=""
  bloodgroup=""
  dob=""
  age=""
  parentName=""
  pass=""
  confirmPass=""

  readValue=()=>{
    let data={
    "name":this.name,
  "phone":this.phone,
  "gender":this.gender,
  "email":this.email,
  "address":this.address,
  "pincode":this.pincode,
  "bloodgroup":this.bloodgroup,
  "dob":this.dob,
  "age":this.age,
  "parentName":this.parentName,
  "pass":this.pass,
  "confirmPass":this.confirmPass
  }
  console.log(data)
  alert("Successfully added")
}
  

  ngOnInit(): void {
  }

}
