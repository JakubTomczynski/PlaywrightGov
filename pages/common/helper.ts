import { Page } from '@playwright/test';
import { ProductInterfacePage } from '../interface';

export class Helper {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  selectors() {
    return {
      cookieBannerCloseButton: () =>
        this.page.getByRole('button', { name: 'Akceptuję politykę dotycząca' }).describe('This is my locator which I want to ue'),
    };
  }

  async sumProductPrice(products: ProductInterfacePage[]): Promise<number> {
    const sum = products.reduce((sum, product) => sum + product.price, 0);
    const sumOk = products.length ? sum : 0;
    console.log(sumOk);
    return sumOk;
  }

  async averageProductPrice(products: ProductInterfacePage[]): Promise<number> {
    const sum = products.reduce((sum, product) => sum + product.price, 0);
    const average = products.length ? sum / products.length : 0;
    console.log(average);
    return average;
  }

  async iloczynProductPrice(products: ProductInterfacePage[]): Promise<number> {
    const sum = products.reduce((sum, product) => sum + product.price, 0);
    const iloczyn = products.length ? sum * products.length : 0;
    console.log(iloczyn);
    return iloczyn;
  }
}
