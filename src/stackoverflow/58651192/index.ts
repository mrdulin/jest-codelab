export async function getPrice(page, url) {
  const priceSelector = '#price';
  if (await page.$(priceSelector)) {
    return page.$eval(priceSelector, evalCallback);
  }
  return null;
}

export const evalCallback = elem => elem.innerText;
