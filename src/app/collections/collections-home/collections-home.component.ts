import { Component, OnInit } from '@angular/core';
import { Data } from '../table/Pdata';
import { Header } from '../table/header';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent implements OnInit {
  public data: any = [
    {
      name: 'James',
      age: 20,
      job: 'Painter',
      employeed: true,
    },
    {
      name: 'Alvin',
      age: 25,
      job: 'Mechanic',
      employeed: true,
    },
    {
      name: 'Peter',
      age: 29,
      job: 'Painter',
      employeed: false,
    },
  ];
  public headers: any = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
    { key: 'employeed', label: 'has a job' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
