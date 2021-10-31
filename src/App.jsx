import Layout from 'layouts/Layout';
import Index from "pages"
import BorderCollieInfoPage from "pages/borderCollie";
import SchnauzerInfoPage from "pages/schnauzer"
import RhodesianInfoPage from "pages/rhodesian";
import SanBernardoInfoPage from "pages/sanBernardo";
import SamyInfoPage from "pages/sammy";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'styles/styles.css';



function App() {
  return (
    <div className="App">
        <Router>
            <Layout>
                <Switch>
                    <Route path='/borderCollie'>
                        <BorderCollieInfoPage />
                    </Route>
                    <Route path='/schnauzer'>
                        <SchnauzerInfoPage />
                    </Route>
                    <Route path='/rhodesian'>
                        <RhodesianInfoPage />
                    </Route>
                    <Route path='/sanBernardo'>
                        <SanBernardoInfoPage />
                    </Route>
                    <Route path='/sammy'>
                        <SamyInfoPage />
                    </Route>
                    <Route path='/'>
                        <Index />
                    </Route>
                </Switch>
            </Layout>
        </Router> 
    </div>
  );
}



export default App;
