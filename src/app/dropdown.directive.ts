import { Directive, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor(private router:Router, private current:ActivatedRoute){

  }

  @HostListener('change',['$event']) onchange(eve:any){
    let id = eve.target.value;
    this.router.navigate([`${id}`],{relativeTo:this.current});

  }

}
