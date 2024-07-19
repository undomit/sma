import './App.css';
import { Button, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { SmaContext } from './components/SmaContext';
import { useState } from 'react';
import { AuthDialog } from './components/AuthDialog';
import { GlobalError } from './components/GlobalError';

const queryClient = new QueryClient();

function App() {
  const [tokenDialogIsOpen, setTokenDialogIsOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <SmaContext>
          <div className="App">
            <Button variant="primary" onClick={() => setTokenDialogIsOpen(true)}>
              Get Token
            </Button>
          </div>
          <AuthDialog open={tokenDialogIsOpen} onClose={() => setTokenDialogIsOpen(false)} />
          <GlobalError />
        </SmaContext>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
