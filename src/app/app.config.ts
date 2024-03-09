import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { routes } from './app.routes';

import { provideApplication } from './application/provide-application';
import { providePokeAPI } from './adapters/secondary/pokeapi/provide-pokeapi';
// import { provideNarutoAPI } from './adapters/secondary/narutoapi/provide-narutoapi';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(withFetch()), ...provideApplication(), ...providePokeAPI()],
};
