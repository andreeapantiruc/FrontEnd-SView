import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'intrerupere-doc',
  templateUrl: './intrerupereDoc.component.html',
  styleUrls: ['./intrerupereDoc.component.scss']
})

export class IntrerupereDocComponent implements OnInit {


  /**vectorul cu numele hardcodate **/
  names = [
    {value: '1', viewValue: 'Bianca'},
    {value: '2', viewValue: 'Ana'},
    {value: '3', viewValue: 'Andreea'},
    {value: '4', viewValue: 'Ecaterina'},
    {value: '5', viewValue: 'Simina'},
    {value: '6', viewValue: 'Diana'},
    {value: '7', viewValue: 'Elena'},
    {value: '8', viewValue: 'Ionut'},
    {value: '9', viewValue: 'Octavian'},
    {value: '10', viewValue: 'Petruta'},
    {value: '11', viewValue: 'Vlad'},

  ];

  constructor() {
  }

  ngOnInit() {
  }


}
