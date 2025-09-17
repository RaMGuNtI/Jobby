import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';
import authStore from './Store/AuthStore.ts';
import profileStore from './Store/ProfileStore.ts';
import jobStore from './Store/JobStore.ts';
import jobDetailModel from './Store/JobDetailsModel.ts';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider
        {...{
          authStore,
          profileStore,
          jobStore,
          jobDetailStore: jobDetailModel,
        }}
      >
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
