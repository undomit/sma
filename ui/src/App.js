import './App.css';
import {ThemeProvider} from '@mui/material';
import {theme} from './theme';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SmaContext} from './components/SmaContext';
import {LoginPage} from './components/LoginPage';
import {GlobalError} from './components/GlobalError';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { css } from '@emotion/css';

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <SmaContext>
          <div className={css`display: flex; align-items: center; justify-content: center; height: 100vh`}>
            <Router>
              <Routes>
                  <Route path='/' element={<LoginPage />} />
                  <Route path='/dashboard' element={<Dashboard />} />
              </Routes>
            </Router>
          </div>
          <GlobalError />
        </SmaContext>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
