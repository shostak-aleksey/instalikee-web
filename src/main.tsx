import { createRoot } from 'react-dom/client';
import { App } from './app/App';
import { BrowserRouter } from 'react-router-dom';
import '@/app/styles/index.scss';
import './app/providers/i18n/i18n';
import { I18nextProvider } from 'react-i18next';
import i18n from './app/providers/i18n/i18n';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>,
  </BrowserRouter>,
);
