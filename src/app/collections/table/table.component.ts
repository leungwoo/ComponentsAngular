import { Component, OnInit, Input } from '@angular/core';
import { Data } from './Pdata';
import { Header } from './header';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() data: any = [];
  @Input() headers: any = [];
  constructor() {}

  ngOnInit(): void {}
}
