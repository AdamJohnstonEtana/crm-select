import { createTheme, ThemeProvider } from '@material-ui/core';
import './App.css';
import Apply from './Sections/Apply';
import Content from './Sections/Layout/Content';
import Header from './Sections/Layout/Header';

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
