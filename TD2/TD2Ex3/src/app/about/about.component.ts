import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
constructor(private logger: LoggerService) { }
nbClick:number=0;

onClick(){
  this.nbClick++;
}
}
