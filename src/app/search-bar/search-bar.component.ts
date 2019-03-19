import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../domain/data-service';
import { SessionId } from '../domain/sessionId';
import { SearchinfoService } from '../services/searchinfo.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css','../../assets/searchjs/vendor/bootstrap/css/bootstrap.min.css','../../assets/searchjs/vendor/fontawesome-free/css/all.min.css','../../assets/searchjs/vendor/simple-line-icons/css/simple-line-icons.css']
})
export class SearchBarComponent implements OnInit {
  searchTerm: string;

  constructor(private router:Router,
    private dataservice: DataService,
    private SessionIdNew : SessionId,
    private searchservice : SearchinfoService){ }

  ngOnInit() {
  }
  voicesearch(){
    console.log("worked");
  }
  result(search:string){
    var output = {
      sessionId : this.SessionIdNew.SessionId,
      searchString : search
    };
    this.searchservice.postResults(output).subscribe();
    this.dataservice.dataService = this.searchTerm; 
    this.router.navigate(['/result'])
  }

}
