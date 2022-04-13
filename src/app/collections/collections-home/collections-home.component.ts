import { Component, OnInit } from '@angular/core';
import { Data } from '../table/Pdata';
import { Header } from '../table/header';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent implements OnInit {
  public data: Data[] = [
    {
      name: 'James',
      age: 20,
      job: 'Painter',
    },
    {
      name: 'Alvin',
      age: 25,
      job: 'Mechanic',
    },
    {
      name: 'Peter',
      age: 29,
      job: 'Painter',
    },
  ];
  public headers: Header[] = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
