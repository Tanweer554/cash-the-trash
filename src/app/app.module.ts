import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { MaterialComponent } from './material/material.component';

import { CDirDirective } from './c-dir.directive';
import { AgePipe } from './age.pipe';

import { NoviceService } from './novice.service';
import { TerminateService } from './terminate.service';
import { GethttpService } from './gethttp.service';

import { HttpClientModule } from '@angular/common/http';

import 'hammerjs';
import { FormsModule }   from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent,
    FooterComponent,
    MainComponent,
    CDirDirective,
    AgePipe,
    MaterialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSliderModule,
    MatButtonModule
  ],
  providers: [NoviceService,TerminateService,GethttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
