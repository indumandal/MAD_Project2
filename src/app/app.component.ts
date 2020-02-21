import { Component,Input } from '@angular/core';
import {CompServiceService} from './comp-service.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  @Input() public isUserLoggedIn: boolean;

}
