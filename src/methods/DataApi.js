import RequestService from './RequestService';

export default class DataApi {
  constructor() {
    this.requestService = new RequestService();
    this.changeAppState = () => {};
    this.search = null;
  }

  setChangeAppState = (changeAppState) => {
    this.changeAppState = changeAppState;
  };

  getTableData = async (filterParams) => {
    console.log('getTableData DataApi.js filterParams', filterParams);
    const query = filterParams ? `?filter=${filterParams}` : '';
    const data = await this.requestService.get(`/table-data${query}`);
    return data;
  }

  getFilteredTableData = async (filterParams) => {
    const query = filterParams ? `?filter=${filterParams}` : '';
    const data = await this.requestService.get(`/filtered-data${query}`);
    return data;
  }

  getFilterList = async (str) => {
    const query = str ? `?search=${str}` : '';
    const list = await this.requestService.get(`/filter-list${query}`);
    return list;
  }
}
