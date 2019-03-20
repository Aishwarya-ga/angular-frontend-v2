import { DataService } from './../domain/data-service';
import { SessionId } from './../domain/sessionId';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultcard',
  templateUrl: './resultcard.component.html',
  styleUrls: ['./resultcard.component.css']
})
export class ResultcardComponent implements OnInit {

  searchTerm: string;
  object1:any;
  object2:any;
  object3:any;
  object4:any;
  object5:any;
  var1="";
  constructor(  private dataService: DataService,
    private result : SessionId) { }

  ngOnInit() {
    this.searchTerm = this.dataService.dataService;
    this.object1 = this.result.pdfresult;
    this.object2 = this.result.webresult;
    this.object3 = this.result.recommendation;
    this.object4 = this.result.nlpresult;
    this.object5 = this.result.searchfreq;
     
  }

  assignVar(data){
    this.var1=data;
  }

}
