import { createTheme, ThemeProvider } from '@material-ui/core';
import './App.css';
import Content from './Layout/Content';
import Header from './Layout/Header';
import Apply from './Sections/SelectType';

const theme = createTheme({
  palette: {
    primary: {
      main: '#184A94'
    },
    secondary: {
      main: '#5AB548'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Content>
        <Apply />
      </Content>
    </ThemeProvider >
  );
}

export default App;
