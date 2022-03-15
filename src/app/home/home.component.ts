import { Component, OnInit } from '@angular/core';
import { Advice } from 'src/assets/model';
import { AdviceService } from '../advice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private adviceService:AdviceService) { }
  advice:Advice | undefined;
  ngOnInit(): void {
    this.getRandomAdvice();
  }

  getRandomAdvice(){
    this.adviceService.getRandomAdvice().subscribe(data =>{
      if(this.advice?.id === data.slip.id){
        this.getRandomAdvice();
      }else this.advice = data.slip;
    })
  }

}
