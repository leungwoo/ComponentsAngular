import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  items = [
    {
      title: 'Why is the sky blue',
      content: 'The sky is bkue becasue it is',
    },
    {
      title: 'What is  your fav food',
      content: 'None i eat everything',
    },
    {
      title: 'Why is it so hot',
      content: 'There is no breeze',
    },
  ];
  openModal = false;
  constructor() {}

  ngOnInit(): void {}
  onClick() {
    this.openModal = !this.openModal;
  }
}
