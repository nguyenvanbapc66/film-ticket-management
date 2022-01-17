import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseAuthWrapper } from './components';
import theme from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <FirebaseAuthWrapper>
      <App />
    </FirebaseAuthWrapper>
  </ThemeProvider>,
  document.getElementById('root'),
);
