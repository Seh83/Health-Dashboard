import { Component, OnInit, Input} from '@angular/core';
import { Observable } from 'rxjs';
import { HealthData } from '../interfaces/interfaces';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.scss']
})
export class TableComponentComponent implements OnInit {
  public dataSource = new MatTableDataSource<any>();
  @Input() set selected_data(data) {
    if (data !== undefined) {
      this.dataSource.data = [data]; 
    }
  }

  displayedColumns: string[] = ['region', 'period', 'pct_cah_hospitals_cehrt', 'pct_hospitals_cehrt'];

  constructor() { }

  ngOnInit() {

  }
}
