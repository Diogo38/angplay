import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'; 
import { Router, ActivatedRoute} from '@angular/router';
import { PostApiService } from '../post-api.service';
import { Post } from 'src/modules/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private posts: PostApiService) {}

  ngOnInit() {
  }

  postForm = new FormGroup({
    userid: new FormControl(''),
    id: new FormControl(''),
    title: new FormControl(),
    body: new FormControl()
  });

  onSubmit(post: Post){
    console.log(this.router);
    this.posts.add(this.postForm.value);
    this.router.navigate(['posts']);
    console.log(this.postForm.value);
    //this.router.navigate(['posts']);
  }

}
