import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import{ LoginComponent }from './login/login.component';
import{ HomeComponent } from './home/home.component';
import {LoginApiService} from './services/login-api.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    routingComponents,
  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,

  ],
  providers: [LoginApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
