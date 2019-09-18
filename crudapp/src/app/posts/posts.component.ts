import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {POSTS} from '../../mockdata/mocked_posts'


@Component({
  selector: 'app-posts',  
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts = POSTS;
  router: Router;

  constructor() { }

  ngOnInit() {
  }

  clickedButton = function(id: number){
    console.log(`clicked button with id: ${id}`);
  };


}
