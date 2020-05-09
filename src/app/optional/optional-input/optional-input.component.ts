import { Component, ChangeDetectionStrategy, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'optional-input',
  templateUrl: './optional-input.component.html',
  styleUrls: ['./optional-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionalInputComponent implements OnInit, OnChanges {
  readonly fCtrl = new FormControl('', Validators.required);

  @Input() value: string = '';

  @Output() changes = new EventEmitter<string>();

  constructor() {
    // Initial state
    this.fCtrl.disable();
  }

  ngOnInit() {
  }

  ngOnChanges() {
    const value = this.value;
    this.fCtrl.setValue(value, { emitEvent: false });
    !!value ? this.fCtrl.enable() : this.fCtrl.disable();
  }

  updateInput(toggle: boolean) {
    if (toggle) {
      this.fCtrl.enable();
      this.fCtrl.markAsTouched();
    } else {
      this.fCtrl.setValue('');
      this.fCtrl.disable();
    }
  }

  emitValue() {
    const value = this.fCtrl.value;
    this.changes.emit(value);
  }

}
