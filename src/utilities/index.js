import Errors from './Errors';
import ApiConfig from './ApiConfig.json';
import checkCallError from './checkCallError';

const env = () => {
  switch (process.env.REACT_APP_STAGE) {
    case 'production':
      return 'production';
    case 'localhost':
      return 'localhost';
    default:
      return 'development';
  }
};

const apiConfig = ApiConfig[env()];

export { Errors, apiConfig, checkCallError };
