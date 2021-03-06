import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WorkComponent } from './pages/work/work.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    WorkComponent,
    ProjectCardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
