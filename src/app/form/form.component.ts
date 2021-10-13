import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],

})



export class FormComponent implements OnInit {
  patientForm = new FormGroup({
    nameEnglish : new FormControl(''),
    nameArabic : new FormControl(''),
    gender : new FormControl(''),
    MaterialStatue :new FormControl(''),
    dateOfBirth :new FormControl(''),
    nationality :new FormControl(''),
    id:new FormControl(''),
    country :new FormControl(''),
    city:new FormControl(''),
    region:new FormControl(''),
    addressLine:new FormControl(''),
    workPhone:new FormControl(''),
    mobilePhone:new FormControl(''),
    homePhone:new FormControl(''),
    email:new FormControl('')
  })


  onSubmit() {
    var patientData = this.patientForm.getRawValue();
    patientData.id = new Date().getUTCMilliseconds();
    console.log(patientData);
    var patientList: any;
    patientList = localStorage.getItem('patientList')
    patientList = patientList !== null ? JSON.parse(patientList) : [];
    patientList.push(patientData)
    console.log(patientList)
    localStorage.setItem('patientList', JSON.stringify(patientList))
    alert(patientData.id + ' ' + patientData.nameEnglish)
    this.Router.navigate([`/`])
  }




  constructor(public Router: Router) { }

  ngOnInit(): void {
  }

}