import { Component, OnInit } from '@angular/core';

export interface State {
  code: string;
  statename: string;
}

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})


export class MaterialComponent implements OnInit {
  states: State[] = [
    {code: '1', statename: 'Andhra Pradesh'},
    {code: '2', statename: 'Telangana'},
    {code: '3', statename: 'Karnataka'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
