// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {Environment} from './interface';

export const environment: Environment = {
  production: false,
  apiKey: 'AIzaSyAXoeDcLmBbKdvTE6ZG-9Gzkj9FVnmS4u0',
  apiURLS: {
    auth: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword',
    authSignUp: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp',
    db: 'https://angularblog-7939f-default-rtdb.europe-west1.firebasedatabase.app'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
