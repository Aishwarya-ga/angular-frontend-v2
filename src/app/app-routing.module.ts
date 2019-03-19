import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ResultsComponent } from './results/results.component';
import {AdminHomeComponent} from './admin-home/admin-home.component'
import { ConceptsComponent } from './concepts/concepts.component';
import { LoginComponent } from './login/login.component';
import { DisplayAdminHomeComponent } from './display-admin-home/display-admin-home.component';
import { QuestionClassifyComponent } from './question-classify/question-classify.component';
import { DomainConceptNameService } from './services/domain-concept-name.service';
import { DomainConceptComponent } from './domain-concept/domain-concept.component';
import { UploadComponent } from './upload/upload.component';
import { NodeComponent } from './neo4j-node/neo4j-node.component';
const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
},
  // {
  //   path:"login",
  //   component:LoginComponent
  // },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
},
{
  path: 'result',

  component: ResultsComponent
},
{
  path:'search',

  component: SearchBarComponent
},
{
  path:'adminHome',
  component:AdminHomeComponent
},
{
  path:'displayAdminHome',
  component:DisplayAdminHomeComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'showNlpQuestions',
  component:QuestionClassifyComponent
},
{
  path:'addDomainConceptNames',
  component:DomainConceptComponent
},
{
  path:'uploadFile',
  component:UploadComponent
},{
  path:'modifyNeo4j',
  component:NodeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
