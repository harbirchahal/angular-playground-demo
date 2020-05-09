import { Component, ChangeDetectionStrategy, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'optional-el',
  templateUrl: './optional-el.component.html',
  styleUrls: ['./optional-el.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionalElComponent implements OnInit {
  readonly fCtrl = new FormControl(false);

  @Input() set value(b: boolean) {
    this.fCtrl.setValue(b, { emitEvent: false });
  }

  @Output() changes = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    this.fCtrl.valueChanges.subscribe(value => {
      this.changes.emit(value);
    });
  }

}
