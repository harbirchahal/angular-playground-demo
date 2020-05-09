import { sandboxOf } from 'angular-playground';

import { OptionalElComponent } from './optional-el';
import { OptionalInputComponent } from './optional-input';

export default sandboxOf(OptionalInputComponent, {
    label: 'optional-input',
    declarations: [
      OptionalElComponent
    ],
  })
  .add('default', {
    template: `
      <div class="container">
        <optional-input></optional-input>
      </div>
    `,
  })
  .add('value:empty', {
    template: `
      <div class="container">
        <optional-input value=""></optional-input>
      </div>
    `,
  })
  .add('value:non-empty', {
    template: `
      <div class="container">
        <optional-input value="Lorem Ipsum"></optional-input>
      </div>
    `,
  });
