import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TerminalComponent } from './components/terminal/terminal.component';
import { MainComponent } from './components/main/main.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { DonutChartComponent } from './components/donut-chart/donut-chart.component';
import { AppRoutingModule } from './app-routing.module';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { APP_BASE_HREF } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';
import { PortfolioService } from './services/portfolio.service';
import { ModalComponent } from './components/modal/modal.component';
import { ModalService } from './services/modal.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TerminalComponent,
    MainComponent,
    ExperienciaComponent,
    ProyectosComponent,
    EducacionComponent,
    SkillsComponent,
    DonutChartComponent,
    PortfolioComponent,
    LoginComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    NgChartsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ModalService ,PortfolioService,
    {provide: APP_BASE_HREF, useValue: ''},
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
