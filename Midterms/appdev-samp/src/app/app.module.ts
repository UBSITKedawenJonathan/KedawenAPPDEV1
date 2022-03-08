import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { NaviComponent } from './navi/navi.component';
import { CourseInfoComponent } from './course-info/course-info.component';
import { ArticlesComponent } from './articles/articles.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    NaviComponent,
    CourseInfoComponent,
    ArticlesComponent,
    ContactInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
