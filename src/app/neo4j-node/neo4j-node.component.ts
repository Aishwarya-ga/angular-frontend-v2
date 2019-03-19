import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { Intents } from '../intent';
import { TermComponent } from '../neo4j-term/neo4j-term.component';
import { Neo4jService } from '../services/neo4j.service';

@Component({
  selector: 'app-neo4j-node',
  templateUrl: './neo4j-node.component.html',
  styleUrls: ['./neo4j-node.component.css']
})
export class NodeComponent implements OnInit {
  openform: boolean;
  openConcept: boolean;
  openProperty: boolean;
  value: any;
  openIntent: boolean;
  selectedLevel:string;
  data:string;
  field:any;
  terms:String;
  intents: Observable<Intents[]>;
  allTerms=[];
  bloomstack:string;
  msg:any;
  msg1: string;

  constructor(private formService:Neo4jService,public dialog:MatDialog) { }

  ngOnInit() {
    
  }

  onClickOpenForm(){
    this.openform=true;  
    }

  onClickOpenConceptForm(){
    this.openConcept=true;
  } 

  onClickOpenIntentForm(){
    this.openIntent=true;
  }

  selected(){
    this.data=this.selectedLevel;
    // this.field.property='';
  }
  
  showProperties(){
    this.openProperty=true;
  }


  private fieldArray: Array<any> = [];
  private newAttribute: any = {};

  addFieldValue() {
      this.fieldArray.push(this.newAttribute)
      this.newAttribute = {};
  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
}


addLastProperty(){
  this.fieldArray.push(this.newAttribute);
}


createNode(form) {
  delete form.newAttributeProperty;
  delete form.newAttributeValue;
  this.value = form; 
  console.log(this.value);
  console.log(form.name,form.parent);
  this.formService.createNode(form.name,form.parent)
  .subscribe(
    data => {
      this.msg="Added succesfully"},
    error => {
     this.msg="Failed to add node";}
  );
}
createIntent(form) {
  delete form.newAttributeProperty;
  delete form.newAttributeValue;
  this.value = form; 
  console.log(form.name,form.parent_node_type,form.weight)
  console.log(this.value);
  this.formService.createIntent(form.name,form.parent_node_type,form.weight)
  .subscribe(
    data => {
      this.msg1="Added succesfully"},
    error => {
     this.msg1="Failed to add intent node";}
  );
}


onClickShowKnowledge(){
  this.bloomstack="knowledge";
  this.intents = this.formService.getKnowledgeTerms();
  console.log(this.intents);
}
onClickShowSynthesis(){
  this.bloomstack="Synthesis";
  this.intents = this.formService.getSynthesisTerms();
  console.log(this.intents);
}
onClickShowComprehension(){
  this.bloomstack="Comprehension";
  this.intents = this.formService.getComprehensionTerms();
  console.log(this.intents);
}
onClickShowAnaylsis(){
  this.bloomstack="Analysis";
  this.intents = this.formService.getAnalysisTerms();
  console.log(this.intents);
}
onClickShowApplication(){
  this.bloomstack="Application";
  this.intents = this.formService.getApplicationTerms();
  console.log(this.intents);
}
onClickShowEvaluation(){
  this.bloomstack="Evaluation";
  this.intents = this.formService.getEvaluationTerms();
  console.log(this.intents);
}

// getSynonym(terms:String){

//   this.formService.getSynonyms(terms).subscribe((data) => {
//     this.allTerms=data;
//     console.log(this.allTerms);
// })
// }

openDialog(terms,bloomstack): void {
  console.log(terms);
  console.log(bloomstack);
  // const dialogRef = this.dialog.open(TermComponent, {
  //   width: '400px',
  //   data: {terms: this.terms}
  // });

  const dialogRef=this.dialog.open(TermComponent,{data:{term1:terms,intent:bloomstack}});

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
}

}
