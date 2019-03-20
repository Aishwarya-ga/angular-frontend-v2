import { Component, OnInit, Inject, PLATFORM_ID, Injector, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../domain/data-service';
import { SessionId } from '../domain/sessionId';
import { SearchinfoService } from '../services/searchinfo.service';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { isPlatformServer } from '@angular/common';

const configKey = makeStateKey('CONFIG');
declare var webkitSpeechRecognition: any;
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css','../../assets/searchjs/vendor/bootstrap/css/bootstrap.min.css','../../assets/searchjs/vendor/fontawesome-free/css/all.min.css','../../assets/searchjs/vendor/simple-line-icons/css/simple-line-icons.css']
})
export class SearchBarComponent implements OnInit {
  searchTerm: string;
  public title : string;
  show :string;
  @ViewChild('gSearch') formSearch;
  @ViewChild('searchKey') hiddenSearchHandler;

  constructor(private router:Router,
    private injector: Injector,
    private state : TransferState,
    private dataservice: DataService,
    private SessionIdNew : SessionId,
    private searchservice : SearchinfoService,
    @Inject(PLATFORM_ID) private platformid: Object,private route:Router){
      this.title = 'Voice Search POC';
      if(isPlatformServer(this.platformid)){
        const envJson = this.injector.get('CONFIG')? this.injector.get('CONFIG'): {};
        this.state.set(configKey, envJson as any);}
     }

  ngOnInit() {
  }
  voicesearch(){
    
    if('webkitSpeechRecognition' in window){
      const vSearch = new webkitSpeechRecognition();
      vSearch.continuous = false;
      vSearch.interimresults = false;
      vSearch.lang = 'en-US';
      vSearch.start();
      const voiceSearchForm = this.formSearch.nativeElement;
      const voiceHandler = this.hiddenSearchHandler.nativeElement;
      vSearch.onresult = function(event){
        //storing the result in value
        //returns a string containing the transcript of the recognised word(s).
        voiceHandler.value = event.results[0][0].transcript;
        
        console.log(this.searchTerm);
          vSearch.stop();
         
         
        }
       
      
      //if error is encountered, show error in console and stop the speech recognition
      vSearch.onerror = function(event){
          console.log(event);
          vSearch.stop();
      }

      
  } 
  //if browser does not have webkitspeechrecognition
  else {
    console.log("Your browser does not support voice recognition feature.");
    }
  }
  result(){
    console.log("result function : "+ this.searchTerm);
    var output = {
      sessionId : this.SessionIdNew.SessionId,
      searchString : this.searchTerm
    };
    this.searchservice.postResults(output).subscribe();
    this.dataservice.dataService = this.searchTerm; 
    this.router.navigate(['/result'])
  }

}
