import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Advice, Slip } from 'src/assets/model';

@Injectable({
  providedIn: 'root'
})
export class AdviceService {

  constructor(private http:HttpClient) { }

  getRandomAdvice():Observable<Slip>{
    return this.http.get<Slip>("https://api.adviceslip.com/advice");
  }
}
