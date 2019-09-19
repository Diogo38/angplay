import { Component, OnInit , Input } from '@angular/core';
import { Router } from '@angular/router';
import { PostApiService } from '../post-api.service';
import { Post } from 'src/modules/Post';
import { POSTS } from '../../mockdata/mocked_posts';


@Component({
  selector: 'app-posts',  
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {


  router: Router
  posts: Post[];

  constructor(private servicePosts: PostApiService) {
    this.posts = servicePosts.get();
  }

  ngOnInit() {
  }
  
  clickedButton = function(id: number){
    console.log(`clicked button with id: ${id}`);
  };


}
