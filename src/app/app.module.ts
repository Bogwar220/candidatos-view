
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { CandidatoComponent } from './candidatos/candidato/candidato.component';
import { AddCandidatoComponent } from './candidatos/add-candidato/add-candidato.component';
import { EditCandidatoComponent } from './candidatos/edit-candidato/edit-candidato.component';
import { TecnologiaComponent } from './tecnologias/tecnologia/tecnologia.component';
import { AddTecnologiaComponent } from './tecnologias/add-tecnologia/add-tecnologia.component';
import { EditTecnologiaComponent } from './tecnologias/edit-tecnologia/edit-tecnologia.component';
import { CandTecComponent } from './candidatos-tecnologia/cand-tec/cand-tec.component';
import { AddCandTecComponent } from './candidatos-tecnologia/add-cand-tec/add-cand-tec.component';
import { ExpLabComponent } from './experienciaLaboral/exp-lab/exp-lab.component';
import { AddExpLabComponent } from './experienciaLaboral/add-exp-lab/add-exp-lab.component';
import { EditExpLabComponent } from './experienciaLaboral/edit-exp-lab/edit-exp-lab.component';
import { TituloComponent } from './Titulos/titulo/titulo.component';
import { AddTituloComponent } from './Titulos/add-titulo/add-titulo.component';
import { EditTituloComponent } from './Titulos/edit-titulo/edit-titulo.component';
import { UserComponent } from './Users/user/user.component';
import { AddUserComponent } from './Users/add-user/add-user.component';
import { ViewCandidatoComponent } from './candidatos/view-candidato/view-candidato.component';
import { ViewExpLabComponent } from './experienciaLaboral/view-exp-lab/view-exp-lab.component';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { LoginComponent } from './prueba/login/login.component';
import { AdminComponent } from './prueba/admin/admin.component';
import { HomeComponent } from './prueba/home/home.component';

const routes : Routes = [
  {
    path: "candidato",
    component: CandidatoComponent,
    data: {title : "candidato"}
  },
  {
    path: "addCandidato",
    component: AddCandidatoComponent,
    data: { title: "addCandidato" }
  },
  {
    path:"editCandidato",
    component: EditCandidatoComponent,
    data: { title: "editCandidato"}
  },
  {
    path: "tecnologia",
    component: TecnologiaComponent
  },
  {
    path: "addTecnologia",
    component: AddTecnologiaComponent
  },
  {
    path: "editTecnologia",
    component: EditTecnologiaComponent
  },
  {
    path: 'candTec',
    component: CandTecComponent
  },
  {
    path: 'addCandTec',
    component: AddCandTecComponent
  },
  {
    path: 'expLab',
    component: ExpLabComponent
  },
  {
    path: 'addExpLab',
    component: AddExpLabComponent
  },
  {
    path: 'editExpLab',
    component: EditExpLabComponent
  },
  {
    path: 'titulo',
    component: TituloComponent
  },
  {
    path: 'addTitulo',
    component: AddTituloComponent
  },
  {
    path: 'editTitulo',
    component: EditTituloComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'addUser',
    component: AddUserComponent
  },
  {
    path: 'viewCandidato',
    component: ViewCandidatoComponent
  },
  {
    path: 'viewExpLab',
    component: ViewExpLabComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CandidatoComponent,
    AddCandidatoComponent,
    EditCandidatoComponent,
    TecnologiaComponent,
    AddTecnologiaComponent,
    EditTecnologiaComponent,
    CandTecComponent,
    AddCandTecComponent,
    ExpLabComponent,
    AddExpLabComponent,
    EditExpLabComponent,
    TituloComponent,
    AddTituloComponent,
    EditTituloComponent,
    UserComponent,
    AddUserComponent,
    ViewCandidatoComponent,
    ViewExpLabComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    StorageServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
