import { sandboxOf } from 'angular-playground';
import { OptionalComponent } from './optional.component';

export default sandboxOf(OptionalComponent, {
    label: 'Optional',
  })
  .add('default', {
    template: `
      <div class="container">
        <app-optional></app-optional>
      </div>
    `,
  });
