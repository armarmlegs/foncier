
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Home from "./Pages/Home"
import ScrollTop from "./components/ScrollTop";
import 'bootstrap/dist/css/bootstrap.min.css';





import Footer from './components/Footer/Footer';
import Operation from './Pages/Operation';
import ContactPage from "./Pages/ContactPage"
import JulesFerry from './Pages/JulesFerry/JulesFerry';



function App() {
  return (
  <Router>
    <ScrollTop />
    <GlobalStyle/>

<Switch>
  <Route path="/" exact component={Home} />
  <Route path="/Contact" exact component={ContactPage} />
  <Route path="/Operations" exact component={Operation} />
  <Route path="/Operations/JulesFerry" exact component={JulesFerry} />
</Switch>
<Footer />
  </Router>
  );
}

export default App;
