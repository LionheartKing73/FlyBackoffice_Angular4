import { Component, OnInit,Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { LoginComponent } from '../login/login.component';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'

@Component({
  selector: 'app-Dashboard',
  templateUrl: './Dashboard.component.html',
  styleUrls: ['./Dashboard.component.css']
})


export class DashboardComponent implements OnInit {

  
  currentUser="admin@admin.com";
  constructor () {

  }
ngOnInit() { }
}





