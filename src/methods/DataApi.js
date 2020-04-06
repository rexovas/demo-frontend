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
    const query = (filterParams && filterParams.length !== 0) ? `?filter=${filterParams}` : '';
    const data = await this.requestService.get(`/table-data${query}`);
    return data;
  }

  getFilterList = async (str, field) => {
    const query = str ? `?field=${field}&search=${str}` : `?field=${field}`;
    const list = await this.requestService.get(`/filter-list${query}`);
    return list;
  }
}
