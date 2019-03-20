import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MatDialog } from '@angular/material';
import { ChatComponent } from '../chat/chat.component';
@Component({
  selector: 'app-zombotron',
  templateUrl: './zombotron.component.html',
  styleUrls: ['./zombotron.component.css']
})
export class ZombotronComponent implements OnInit {

  chatComponent: MatDialogRef<ChatComponent>;

  constructor(private router : Router,private dialog:MatDialog) { }

  ngOnInit() {
  }
  search(){
    this.router.navigate(['/search1'])
  }
  openDialog() {
    // this.chatComponent=this.dialog.open(ChatComponent)
    this.chatComponent = this.dialog.open(ChatComponent,{ disableClose : true})
  }
}
