import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { WishService } from './wish.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wishes';
  /**
   *
   */
  constructor(private router: Router, public wishService: WishService) {


  }
  public targetArray: string[] = ['מסיבה', 'יום הולדת'];
  public typeArray: string[] = ['שיר', 'חמשיר', 'מכתב'];
  public longArray: string[] = ['ארוך', 'קצר'];
  public aviraArray: string[] = ['מצחיק', 'עצוב', 'משמח']
  public eventSelect: any;
  public typeSelect: any;
  public aviraSelect: any;
  public targetSelect: any;
  public longSelect: any;
  public age!: number;
  // public resFlag: boolean = false;
  public resAI!: any;

  getWish() {
    this.wishService.resFlag = true;
    if(this.age>0)
      this.targetSelect+=` לגיל {this.age}`
    this.wishService.getWish(this.typeSelect, this.longSelect, this.targetSelect, this.aviraSelect).subscribe(data => {
      this.resAI = data;
    })
    //צריך לתפוס את המשתנים ולשלוח לסרביס יש 2 פונקציות לפעול בהתאם 
    // this.router.navigate([`wish`]);
  }
  atherWish() {
    //הסרבר מחזיר  3 תשובות במערת המטרה להביא תשובה אחרת אם נגמר 3 לפנות שוב לסרבר
  }
}
