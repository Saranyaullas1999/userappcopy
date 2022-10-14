import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {

  constructor() { }

  username=""
  password=""


  readValues=()=>{
    let data={
      "username":this.username,
      "password":this.password
    }
    console.log(data)
    alert("Successfully Added")
    this.username=""
    this.password=""
  }

  ngOnInit(): void {
    
  }

}
