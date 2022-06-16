import {Environment} from './interface';

export const environment: Environment = {
  production: true,
  apiKey: 'AIzaSyAXoeDcLmBbKdvTE6ZG-9Gzkj9FVnmS4u0',
  apiURLS: {
    auth: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword',
    db: 'https://angularblog-7939f-default-rtdb.europe-west1.firebasedatabase.app'
  }
};
