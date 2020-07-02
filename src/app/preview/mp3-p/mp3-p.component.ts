import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mp3Service } from './mp3.service';

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
  constructor(  private route: ActivatedRoute, private mp3Serive: Mp3Service) { }
  id;

  data:any;
  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')
      this.loadData(this.id)
    }) 
  }

  loadData(id) {
    this.mp3Serive.getMp3Data(id).subscribe((data:any) => {
        this.data = data.response.data;
        this.mp3 = "https://whispering-thicket-97767.herokuapp.com/"+this.data.file;
        console.log(this.data)

    }, err => {
      console.log(err);
    })
  }

}
