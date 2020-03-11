import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AOS from 'aos';
import { AppProvider } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'aos/dist/aos.css';
// import '@shopify/polaris/styles.css';

AOS.init();

function WrappedApp() {
  return (
    <AppProvider>
      <App i18n={enTranslations} />
    </AppProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
