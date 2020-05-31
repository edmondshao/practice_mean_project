import {Post} from './post.model';

//makes angular aware of this service so it can find + create 1 instance of service for the app
import {Injectable} from '@angular/core';
@Injectable({providedIn:'root'})

export class PostsService{
  //empty array of type Post
  private posts:Post[] = [];

  getPosts(){
    //arrays are reference types not primitive
    //when you copy the object in memory stays the same j creates a pointer
    //to the object in memory

    //good practice to be immutable
    return [...this.posts]; //this copies the array into a new array in memory to be returned
  }

   getPost (title: string, content:string){
     const post: Post = {title:title, content:content};
     this.posts.push(post);

   }
}
