import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mp3-p',
  templateUrl: './mp3-p.component.html',
  styleUrls: ['./mp3-p.component.css']
})
export class Mp3PComponent implements OnInit {
  desc: any = "Latest Song."
  mp3:any
  title:any="Stars"
  info:any="The Reluctant"
  constructor() { }

  ngOnInit() {
  }

}
