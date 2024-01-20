import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WishService {
  constructor(public httpClient: HttpClient) { }
  public res!: Observable<any>;
  public resFlag: boolean = false;
  getWish(type: string, length: string, target: string, enviorment: string) {
    return this.httpClient.get(`http://localhost:3000/blessing?type=${type}&length=${length}&target=${target}&enviorment=${enviorment}`);
    // .subscribe(data => {
    //   this.res = data;
    // })


  }
  getAther() {
    return this.httpClient.get(`http://localhost:3000/another`);
  }
}
