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

  getTableData = async () => {
    const data = await this.requestService.makeRequest('/table-data');
    return data;
  }

  getFilterList = async (column, str = '') => {
    const list = await this.requestService.makeRequest(`/filter-list?column=${column}&search=${str}`);
    return list;
  }
}
