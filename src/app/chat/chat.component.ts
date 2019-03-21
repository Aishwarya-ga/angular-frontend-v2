import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Message, ChatbotService } from '../services/chatbot.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/scan';
declare var webkitSpeechRecognition: any;

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messages: Observable<Message[]>;
  formValue: string;
  @ViewChild('gSearch') formSearch;
  @ViewChild('searchKey') hiddenSearchHandler;
  constructor(public chat: ChatbotService,private route:Router) { }

  ngOnInit() {
    this.messages = this.chat.conversation.asObservable()
    .scan((acc, val) => acc.concat(val) );
  }

  sendMessage() {
    this.chat.converse(this.formValue);
    this.formValue = '';
  }

  // voicesearch(){

  //   if('webkitSpeechRecognition' in window){
  //     const vSearch = new webkitSpeechRecognition();
  //     vSearch.continuous = false;
  //     vSearch.interimresults = false;
  //     vSearch.lang = 'en-US';
  //     vSearch.start();
  //     const voiceSearchForm = this.formSearch.nativeElement;
  //     const voiceHandler = this.hiddenSearchHandler.nativeElement;
  //     vSearch.onresult = function(event){
  //       //storing the result in value
  //       //returns a string containing the transcript of the recognised word(s).
  //       voiceHandler.value = event.results[0][0].transcript;
  //       window['formValue'] = voiceHandler.value;
  //       console.log("SEARCHED: "+window['formValue']);
  //         vSearch.stop();
  
  //       }
  
  
  //     //if error is encountered, show error in console and stop the speech recognition
  //     vSearch.onerror = function(event){
  //         console.log(event);
  //         vSearch.stop();
  //     }
  
  
  // }
  // //if browser does not have webkitspeechrecognition
  // else {
  //   console.log("Your browser does not support voice recognition feature.");
  //   }
  // }
  // result(){
  //   console.log("INSIDE RESULT FUNCTION");
  //   console.log("result function : "+ window['formValue']);
  //   // var output = {
  //   //   sessionId : this.SessionIdNew.SessionId,
  //   //   searchString : window['searchTerm']
  //   // };
  //   // this.searchservice.postResults(output).subscribe();
  //   // this.dataservice.dataService = window['searchTerm'];
  //   // this.router.navigate(['/result'])
  // }

}
