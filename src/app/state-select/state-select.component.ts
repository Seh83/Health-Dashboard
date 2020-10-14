import { Component, OnInit, EventEmitter, Output, Input, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-state-select',
  templateUrl: './state-select.component.html',
  styleUrls: ['./state-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StateSelectComponent implements OnInit {

  @Input() state_list: Observable<any>;
  @Output() selectedState: EventEmitter<any> = new EventEmitter<any>();
  constructor(private cd: ChangeDetectorRef) { }

  selected = '';

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    console.log(this.state_list)
  }

  onStateChange(event) {
    this.selectedState.emit(event.currentTarget.value);
  }

}
