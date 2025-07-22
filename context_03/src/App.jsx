import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Headers';
import './index.css'; // make sure path is correct

function App() {
  return (
    <ThemeProvider>
      <Header/>
    </ThemeProvider>
  );
}

export default App;
