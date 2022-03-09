import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { user, UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit,OnDestroy {
  id:number;
  user:user = {
    avatar:'',
  id:0,
  email:'',
  first_name:'',
  last_name:''
  };
  unsub1:Subscription;
  constructor(private route:ActivatedRoute, private userserv:UserServiceService) {


   }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.id = data['id'];
      this.unsub1 = this.userserv.getuser(this.id).subscribe(data => {
        this.user = data.data;
      });
    })
  }

  ngOnDestroy(): void {
      this.unsub1.unsubscribe();
  }
}
