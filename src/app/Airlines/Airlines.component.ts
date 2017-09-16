import { Component, OnInit,Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {HttpClient} from '@angular/common/http';
import dataset from '../data';
 
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'

@Component({
  selector: 'app-Airlines',
  templateUrl: './Airlines.component.html',
  styleUrls: ['./Airlines.component.css']
})


export class AirlinesComponent implements OnInit {
  results=null;
  result_airlines= dataset.airlines;
  constructor(private http: HttpClient) {}
      

ngOnInit() :void { 
      this.http.get('http://api.fly.com/MegaSearch/services/v1/airlines/x').subscribe(data => {
      this.results = data; 
      this.result_airlines=this.results.airlines; 
      });
      
  }
}





