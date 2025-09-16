import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';
import authStore from './Store/AuthStore.tsx';
import profileStore from './Store/ProfileStore.tsx';
import jobStore from './Store/JobStore.tsx';
import jobDetailStore from './Store/JobDetailStore.tsx';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider {...{ authStore, profileStore, jobStore, jobDetailStore }}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
