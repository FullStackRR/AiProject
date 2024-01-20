import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { WishService } from '../wish.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishes',
  templateUrl: './wishes.component.html',
  styleUrls: ['./wishes.component.css']
})
export class WishesComponent {

  @Input() public longSelect: any;
  @Input() public typeSelect: any;
  @Input() public aviraSelect: any;
  @Input() public targetSelect:any;
  @Input() public resAI: any;
  /**
   *
   */
  constructor(public wishService:WishService, private router:Router) {
 
    
  }
  atherWish() {
    this.wishService.getAther().subscribe(data=>{
      this.resAI=data;
    })
  }
  back(){
    this.wishService.resFlag=false;
  }
}
