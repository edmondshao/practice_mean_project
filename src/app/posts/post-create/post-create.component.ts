import { Component, EventEmitter,Output } from '@angular/core';

import {Post} from '../post.model';
import { NgForm } from '@angular/forms';

//typescript class
@Component({
  //takes in a javascript object
  //add selector (to use the component) and connect the html
  selector: 'app-post-create',  //app- format
  templateUrl: './post-create.component.html',
  styleUrls:['./post-create.component.css'] //you can have multiple style sheets
}) //declarator to mark a class as a componet

export class PostCreateComponent{
  //properties
  enteredContent = '';
  enteredTitle = '';

  //add a decorator so that you can listen outside of this one component
  //(the data we emmit is a post)
  @Output() postCreated = new EventEmitter<Post>();

  //NgForm is a angular mantained form
  onAddPost(form:NgForm){
   // console.dir(postInput);
   //this.newPost = this.enteredValue;
   if (form.invalid){
     return;
   }
    const post:Post = {title:form.value.title,content:form.value.content};
    this.postCreated.emit(post);

  };
}
