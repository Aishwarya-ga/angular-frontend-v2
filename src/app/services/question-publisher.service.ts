import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionPublisherService {

  private publishUrl :string = "http://localhost:8077/publishQuestion";
  private deleteUrl : string = "http://localhost:8077/deleteQuestion/"
  constructor(private http:HttpClient){

  } 
  publishQuestion(intentLevel:string,question:string,uniqueId:string){
    this.http.post(this.publishUrl,{
      "uniqueId":uniqueId,
      "intentLevel":intentLevel,
      "questionString":question
    }).subscribe((data)=>{
      console.log(data);
    })
}
 deleteQuestion(uniqueId:string){
   console.log("delete question method");
   this.http.delete(this.deleteUrl+uniqueId).subscribe();
 }}
