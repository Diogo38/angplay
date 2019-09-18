import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Custom components
import { PostsComponent } from './posts/posts.component'
import { PostComponent } from './post/post.component'


const routes: Routes = [
  {path: '', redirectTo: '/posts', pathMatch: 'full'},
  {path: 'posts', component: PostsComponent},
  {path: 'post', component: PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
