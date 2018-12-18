//Routers and Forms
  import{ FormsModule} from '@angular/forms';
 import {RouterModule,Routes} from'@angular/router';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//components
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

//Pages
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HomeComponent } from './components/home/home.component';
import { GymComponent } from './components/gym/gym.component';
import { CarMechanicComponent } from './components/car-mechanic/car-mechanic.component';
import { ClubComponent } from './components/club/club.component';
import { DentistComponent } from './components/dentist/dentist.component';
import { SalonComponent } from './components/salon/salon.component';
import { CoffeeshopComponent } from './components/coffeeshop/coffeeshop.component';
import { VetsComponent } from './components/vets/vets.component';
import { SchoolsComponent } from './components/schools/schools.component';
import { StoryComponent } from './components/story/story.component';


// Page Routes
const appRoutes:Routes=[

  //show as front page
  {path:'', component:HomeComponent},
  //route for gym
  {path:'app-gym', component:GymComponent},
  {path:'app-car-mechanic', component:CarMechanicComponent},
  {path:'app-club', component:ClubComponent},
  {path:'app-dentist', component:DentistComponent},
  {path:'app-salon', component:SalonComponent},
  {path:'app-cofeeshop', component:CoffeeshopComponent},
  {path:'app-vets', component:VetsComponent},
  {path:'app-schools', component:SchoolsComponent},
  {path:'app-story', component:StoryComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LandingPageComponent,
    GymComponent,
    CarMechanicComponent,
    ClubComponent,
    DentistComponent,
    SalonComponent,
    CoffeeshopComponent,
    VetsComponent,
    SchoolsComponent,
    StoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
     FormsModule,
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
