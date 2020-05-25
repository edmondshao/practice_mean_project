import { Component } from '@angular/core';

//typescript class
@Component({
  //takes in a javascript object
  //add selector (to use the component) and connect the html
  selector: 'app-post-create',  //app- format
  templateUrl: './post-create.component.html',
  styleUrls:['./post-create.component.css'] //you can have multiple style sheets
}) //declarator to mark a class as a componet

export class PostCreateComponent{
  //what you put in here shows up first as default
  newPost = 'No Content';
  enteredValue = '';
  onAddPost(){
   // console.dir(postInput);
    this.newPost = this.enteredValue;
  }
}
