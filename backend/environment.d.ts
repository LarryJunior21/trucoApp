declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      TOKEN_SECRET: Secret;
      API_URL: string;
    }
  }
}

export {};
