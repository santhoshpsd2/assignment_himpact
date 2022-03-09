import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { user, UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit,OnDestroy {
  public users:user[];
  unsub2:Subscription;

  constructor(private userserv:UserServiceService) { }

  ngOnInit(): void {
   this.unsub2 = this.userserv.getusers().subscribe(data => {
      this.users = data.data;
      this.users = this.users.sort((a,b)=>{
        if(a.first_name > b.first_name) return 1
        if(a.first_name < b.first_name) return -1
        return 0
      });
    })
  }

ngOnDestroy(): void {
    this.unsub2.unsubscribe();
}

}
