import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AccountModule } from './account/account.module';

platformBrowserDynamic()
  .bootstrapModule(AccountModule)
  .catch((err) => console.error(err));
