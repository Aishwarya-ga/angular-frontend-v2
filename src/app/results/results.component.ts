import { SearchinfoService } from './../services/searchinfo.service';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../domain/data-service';
import { SessionId } from '../domain/sessionId';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  searchTerm: string;
  object1:any;
  object2:any;

  constructor(    private dataService: DataService,
    private result : SessionId,    private searchService : SearchinfoService

    ) { }

  ngOnInit() {
    this.searchTerm = this.dataService.dataService;
  }
  search(search:string){
    var output = {
      sessionId : this.result.SessionId,
      searchString : search
    };
    this.result.pdfresult=[];
    this.result.webresult = [];
    console.log(this.result.pdfresult,this.result.webresult)
    this.searchService.postResults(output).subscribe();
    this.dataService.dataService = this.searchTerm; 
    this.object1 = this.result.pdfresult;
    this.object2 = this.result.webresult;

  }

}
