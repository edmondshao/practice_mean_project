import { Component,Input} from "@angular/core";

import {Post} from '../post.model';
//import {PostsService} from '../posts.service';

@Component({
  selector : 'app-post-list',
  templateUrl:'./post-list.component.html',
  styleUrls:['./post-list.component.css']


})

export class PostListComponent  {
  //posts contains title and content
  @Input() posts: Post[] = [];

  /* posts:Post[] = [];


  //function called when new instance created (constrctor)
  //public keyword creates a new property in the component
  constructor (public postsService: PostsService){}

  ngOnInit(){
    this.posts = this.postsService.getPosts();
  }
 */

}

