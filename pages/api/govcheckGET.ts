import { APIRequestContext, expect, request } from '@playwright/test';
import { APIRequest } from '@playwright/test';
import { ENV } from '../../globals/env';

export class ApiCheckPage {
  readonly reqContext: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.reqContext = request;
  }

  public async checkInfoAboutTheHomePage() {
    const context = await this.reqContext.get(ENV.API_URL + '/web/gov/ministerstwa');
    expect(context.ok()).toBeTruthy();
    expect(context.status()).toBe(200);
    console.log(context.status());
  }
}
