import { DataService } from './../domain/data-service';
import { SessionId } from './../domain/sessionId';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultcard',
  templateUrl: './resultcard.component.html',
  styleUrls: ['./resultcard.component.scss']
})
export class ResultcardComponent implements OnInit {

  searchTerm: string;
  object1:any;
  object2:any;
  constructor(  private dataService: DataService,
    private result : SessionId) { }

  ngOnInit() {
    this.searchTerm = this.dataService.dataService;
    this.object1 = this.result.pdfresult;
    this.object2 = this.result.webresult;
  }

}
