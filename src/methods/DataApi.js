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
    console.log("TEST")
    const data = await this.requestService.makeRequest('/table-data');
    console.log(data);
    return data;
  }
}
