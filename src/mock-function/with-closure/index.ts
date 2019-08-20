const TOPICS = [];
const TT = '';

interface ICacheManager {
  readAsPromise(topic, filter, cacheType?): any;
  someMethod(name: string, filter): any;
}

const CacheManager = (function cacheManager() {
  class _CacheManager implements ICacheManager {
    constructor() {
      return this;
    }

    public async readAsPromise(topic, filter, cacheType = 'CORE') {
      if (topic.toLowerCase().equals(TOPICS[TT])) {
        const data = new Array();
        data.push(this.getData());
        return data;
      }
      return null;
    }

    /**
     * invoke readAsPromise, for demonstrating mock readAsPromise method
     *
     * @author dulin
     * @param {string} name
     * @param {*} filter
     * @returns
     * @memberof _CacheManager
     */
    public async someMethod(name: string, filter) {
      const data = await this.readAsPromise(name, filter);
      if (data) {
        return data;
      }
      throw new Error('no data');
    }

    private getData() {
      return '';
    }
  }

  let instance;
  return {
    getInstance(): ICacheManager {
      if (instance == null) {
        instance = new _CacheManager();
      }
      return instance;
    }
  };
})();

export { CacheManager };
