import { FullConfig } from '@playwright/test';
import { ENV } from './globals/env';
import * as dotenv from 'dotenv';

async function globalSetup(config: FullConfig) {
  console.log(config.projects);
  if (process.env.test_env) {
    dotenv.config({
      path: `.env.${process.env.test_env}`,
      override: true,
    });
    ENV.BASE_URL = process.env.BASE_URL;
  } else {
    process.env.BASE_URL = 'https://www.gov.pl';
    console.log('jesssgit');
  }
}

export default globalSetup;
