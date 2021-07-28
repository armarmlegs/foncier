
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Home from "./Pages/Home"
import ScrollTop from "./components/ScrollTop"





import Footer from './components/Footer/Footer';
import Operation from './Pages/Operation';
import ContactPage from "./Pages/ContactPage"



function App() {
  return (
  <Router>
    <ScrollTop />
    <GlobalStyle/>

<Switch>
  <Route path="/" exact component={Home} />
  <Route path="/Contact" exact component={ContactPage} />
  <Route path="/Operations" exact component={Operation} />
</Switch>
<Footer />
  </Router>
  );
}

export default App;
