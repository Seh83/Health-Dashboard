import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';
import { HealthData } from '../interfaces/interfaces';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent implements OnInit {
  data: Observable<HealthData[]>
  data_2015 = [];
  state_list = [];
  selected_data: any;
  
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getHealthData().subscribe((response) => {
      this.data = response
      this.extracValues(this.data)
    });
  }

  extracValues(data) {
    this.data.forEach(obj => {
      if (obj['period'] == '2015') {
        this.data_2015.push(obj);
        this.state_list.push(obj['region'])
      }
    });
  }

  stateChange(event) {
    this.data_2015.forEach(obj => {
      if (obj['region'] == event) {
        this.selected_data = obj;
      }
    });
  }

}
