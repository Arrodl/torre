import logo from './logo.svg';
import darkTheme from './theme/darkTheme';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Dashboard, Home } from './components/pages';

const App = () => {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path="/:username" component={Dashboard} />
          <Route path="/" component={Home} />
          <Route path="*">
            No match (404)
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
