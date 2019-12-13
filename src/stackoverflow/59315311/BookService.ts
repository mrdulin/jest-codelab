import rp from 'request-promise-native';

export class BookService {
  public static async getAllBookInCategory(bookCategory: string) {
    try {
      const neededInfo = {
        url: `https://${process.env.BOOK_HOST}/bookapi/${process.env.BOOKAPI_VERSION}/iterative/bookCategory/${bookCategory}/books/all`,
        method: 'GET',
      };

      const result = await BookService.makeRequest(bookCategory, neededInfo);

      return await rp(result);
    } catch (error) {
      console.log(`Failed to get All Books in given category ${error}`);
    }
  }

  public static async deleteBookInCategory(bookCategory: string, books: string[]) {
    try {
      const neededInfo = {
        url: `https://${process.env.BOOK_HOST}/bookapi/${
          process.env.BOOKAPI_VERSION
        }/iterative/bookCategory/${bookCategory}/books/bookDelete?books=${books.join()}`,
        method: 'DELETE',
      };

      const result = await BookService.makeRequest(bookCategory, neededInfo);

      return rp(result);
    } catch (error) {
      console.log(`Failed to delete books from category: ${error}`);
    }
  }

  private static async makeRequest(bookCategory: string, neededInfo: any, bodydata?: any) {
    const authValue = await BookService.getAuthValue(bookCategory, neededInfo);

    return {
      method: neededInfo.method,
      url: neededInfo.url,
      headers: {
        Host: process.env.BOOK_HOST,
        Authorization: authValue,
      },
      body: bodydata,
      json: true,
    };
  }

  private static async getAuthValue(catetory, info) {
    return 'authvalue';
  }
}
