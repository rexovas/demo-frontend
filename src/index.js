import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import AOS from 'aos';
import { AppProvider } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'aos/dist/aos.css';

AOS.init();

function WrappedApp() {
  return (
    <AppProvider i18n={enTranslations}>
      <App />
    </AppProvider>
  );
}

ReactDOM.render(<WrappedApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
