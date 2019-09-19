import { Injectable } from '@angular/core';
import { Post } from '../modules/Post';
import { POSTS } from '../mockdata/mocked_posts'


@Injectable({
  providedIn: 'root'
})
export class PostApiService {

  posts: Post[];

  constructor() {
    console.log('I ruyn... ');
    this.posts = POSTS;
  }

  get(){
    return this.posts;
  }

  add(post: Post){
    this.posts.push(post);
  }

  clear(){
    this.posts = [];
  }

}
