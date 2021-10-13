import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  patientList: any;

  ngOnInit(): void {
     var list = localStorage.getItem('patientList')
     console.log(list)
     if (list !== null) {
      this.patientList = JSON.parse(list)
      console.log(this.patientList)
     }
     else {
      this.patientList = []
      console.log(this.patientList)
      localStorage.setItem('patientList',JSON.stringify(this.patientList))
     }
  }

}

