import {Environment} from './interface';

export const environment: Environment = {
  production: true,
  apiKey: 'AIzaSyCMcsV2tLwtN7kduqZ4Egq3n5RMnIo5FjM',
  apiURLS: {
    auth: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken',
    db: 'https://angular-blog-ff91b-default-rtdb.firebaseio.com/'
  }
};
