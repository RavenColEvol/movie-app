import {HashRouter as Router} from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';

// Styles
import './assets/main.css'

import Layout from './components/Layout'

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Layout/>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
