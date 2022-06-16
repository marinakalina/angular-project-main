export interface Environment {
  apiKey: string;
  production: boolean;
  apiURLS: {auth: string, authSignUp: string, db: string};
}
