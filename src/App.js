
import { ThemeProvider } from 'styled-components';
import './App.css';
import BrightFuture from './components/BrightFuture';
import CardBox from './components/CardBox';
import Image from './components/Image';
import Menu from './components/Menu';
import News from './components/News';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="app">
      <Menu/>
      <div className="flex-container">
        <div >
    <div className="padding"><Image/></div>  
    <BrightFuture/>
    </div>
    <div className="padding">
    <News/></div>  
    </div>
    <div className="padding">
      <CardBox/>
    </div>
      </div>
      </ThemeProvider>
  );
}

export default App;
