import * as ReactDOM from 'react-dom';
import App from './app/app';
import './index.css';
import { AppProvider } from './AppProvider';

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root')
);
