import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is part of the material package
//use the api tab in the angular material website

//for post create
import {MatInputModule} from '@angular/material/input'; // you have to do it this way with most recent version
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

//for the toolbar
import {MatToolbarModule} from '@angular/material/toolbar';

//for post list
import {MatExpansionModule} from '@angular/material/expansion';

//All the Component Declarations
import { AppComponent } from './app.component';
import {PostCreateComponent} from './posts/post-create/post-create.component';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './posts/post-list/post-list.component';


@NgModule({
  //just declare component here and auto imports
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
