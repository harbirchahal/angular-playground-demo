import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-optional',
  templateUrl: './optional.component.html',
  styleUrls: ['./optional.component.scss']
})
export class OptionalComponent implements OnInit {
  readonly toggleCtrl = new FormControl(true);
  readonly inputCtrl = new FormControl('Some Input');

  @Input() set enable(flag: boolean) {
    this.toggleCtrl.setValue(flag);
  }

  constructor() { }

  ngOnInit() {
    this.toggleCtrl.valueChanges.subscribe(toggle => {
      if (toggle)
        this.inputCtrl.enable();
      else
        this.inputCtrl.disable();
    });
  }

}
