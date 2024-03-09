import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { routes } from './app.routes';

import { provideApplication } from './application/provide-application';
import { USE_POKE_API_KEY } from './application/services/source.service';
import { providePokeAPI } from './adapters/secondary/pokeapi/provide-pokeapi';
import { provideNarutoAPI } from './adapters/secondary/narutoapi/provide-narutoapi';

const externalProviderFactory = () => {
  const shouldUsePokeAPI = Boolean(window.localStorage.getItem(USE_POKE_API_KEY));
  const provider = shouldUsePokeAPI === true ? providePokeAPI : provideNarutoAPI;

  return [...provider()];
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    ...provideApplication(),
    ...externalProviderFactory(),
  ],
};
