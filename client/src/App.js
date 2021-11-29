import logo from './logo.svg';
import './App.css';
import { LoadPage } from './pages/LoadPage';
import { LoadEnginePage } from './pages/LoadEnginePage';
import { SelectionPage } from './pages/SelectionPage';
import { SearchPage } from './pages/SearchPage';
import { SearchResultPage } from './pages/SearchResultPage';
import { TopNPage } from './pages/TopNPage';
import { InvertedIndicesPage } from './pages/InvertedIndicesPage';
import { TopNResultPage } from './pages/TopNResultPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={LoadPage}/>
          <Route exact path='/load_engine' component={LoadEnginePage}/>
          <Route exact path='/select' component={SelectionPage} />
          <Route exact path='/search' component={SearchPage} />
          <Route exact path='/search_result' component={SearchResultPage} />
          <Route exact path='/top_n' component={TopNPage} />
          <Route exact path='/inverted_indices' component={InvertedIndicesPage} />
          <Route exact path='/top_n_result' component={TopNResultPage} />
        </Switch>
      </Router>

    </div>

  );
}

export default App;
