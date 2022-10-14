import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {

  constructor(private myrouter:Router) { }

  username=""
  password=""

  status:boolean=false

  readValues=()=>{
    let data={
      "username":this.username,
      "password":this.password
    }
    if (this.username=="admin" && this.password=="12345") {
      this.myrouter.navigate(["/dashboard"])
      
    } else {
      alert("Invalid Credentials")
      
    }
    console.log(data)
    
    this.username=""
    this.password=""
    this.status=true
  }

  ngOnInit(): void {
    
  }

}
