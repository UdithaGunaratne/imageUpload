import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  selectedFile: File = null;

  constructor(public navCtrl: NavController, private http: HttpClient) {

  }

  onFileSelected(event){
    console.log(event);
    this.selectedFile = event.target.files[0];
  }

  onUpload(){
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name); 
    this.http.post('https://us-central1-project-1-a5d90.cloudfunctions.net/saveImage', fd) //binary data vlata, fd = this.select
      .subscribe(res=>{
        console.log(res);
      });
  }

}
