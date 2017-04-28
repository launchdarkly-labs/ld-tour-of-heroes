import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { HeroService } from './hero.service';
import { HeroSearchComponent } from './hero-search.component';

import { UserComponent } from './user.component';
import { UserModule } from './user.module';

import { LaunchDarklyService } from './launchdarkly.service'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 600 }),
    UserModule
  ],
  declarations: [
    AppComponent,
    HeroSearchComponent,
    routedComponents,
    UserComponent
  ],
  providers: [
    HeroService,
    LaunchDarklyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
