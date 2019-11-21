import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import {cleanDataRows} from './converter'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  users;

  ngOnInit(){
    this.mockResponse2()
    .subscribe((response)=>{
      this.users = cleanDataRows(response)
    })
  }


  // IGNORE
  mockResponse(){
    return of([
      {'element': {'value': 5, 'id': 'userCount'}},
      {'element': 'someMetaData'}

    ])
  }

    mockResponse2(){
    return of([
      {'element': {'value': 0, 'id': 'userCount'}},
      {'element': 'someMetaData'}

    ])
  }
}
