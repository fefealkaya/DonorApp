import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CreateDonor from './components/CreateDonor';
import AddBlood from './components/AddBlood';
import RequestBlood from './components/RequestBlood';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Create/Query Donor</Link></li>
                        <li><Link to="/addblood">Add Blood</Link></li>
                        <li><Link to="/requestblood">Request Blood</Link></li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/addblood">
                        <AddBlood />
                    </Route>
                    <Route path="/requestblood">
                        <RequestBlood />
                    </Route>
                    <Route path="/">
                        <CreateDonor />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
