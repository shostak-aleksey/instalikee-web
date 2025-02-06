import { createRoot } from 'react-dom/client';
import { App } from './app/App';
import { StoreProvider } from './app/providers/StoreProvider';
import { BrowserRouter } from 'react-router-dom';
import '@/app/styles/index.scss';


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StoreProvider>
        <App  />
    </StoreProvider>
  </BrowserRouter>,
);
