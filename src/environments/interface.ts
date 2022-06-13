export interface Environment {
  apiKey: string;
  production: boolean;
  apiURLS: {auth: string, db: string};
}
