import { createRoot } from 'react-dom/client';
import { App } from './app/App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@/app/styles/index.scss';
import './app/providers/i18n/i18n';
import { I18nextProvider } from 'react-i18next';
import i18n from './app/providers/i18n/i18n';
import {  PrivacyPolicy,
  CopyrightPage,
  TermsOfUsePage,
  UserAgreementPage,} from './pages/LegalsPages';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/copyright" element={<CopyrightPage />} />
        <Route path="/terms-of-use" element={<TermsOfUsePage />} />
        <Route path="/agreement" element={<UserAgreementPage />} />
      </Routes>
    </I18nextProvider>
  </BrowserRouter>
);
