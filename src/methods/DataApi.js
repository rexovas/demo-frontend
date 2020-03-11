import RequestService from './RequestService';

export default class DataApi {
  constructor() {
    this.requestService = new RequestService();
    this.changeAppState = () => {};
  }

  setChangeAppState = (changeAppState) => {
    this.changeAppState = changeAppState;
  };

  getTableData = async () => {
    const data = await this.requestService.makeRequest('/table-data');
    return data;
  }
}
