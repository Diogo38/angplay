import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'; 

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  postForm = new FormGroup({
    userid: new FormControl(''),
    id: new FormControl(''),
    title: new FormControl(),
    body: new FormControl()
  });

  onSubmit(){
    console.log(this.postForm.value);
  }
}
