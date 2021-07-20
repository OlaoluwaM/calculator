import App from './components/App';

import { render } from 'react-dom';
import { StrictMode } from 'react';

import './index.scss';
import './tailwind.css';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
