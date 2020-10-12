import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
  

  constructor(private Data:SampleService) { }

  ngOnInit(): void {
    this.Data.getdata().subscribe((res)=>{
      console.log("dd",res)
    })
  }

}
