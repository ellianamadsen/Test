import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

import NavBar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-spa";

import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";
import Main from './components/Main';
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      {/* Don't forget to include the history module */}
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <Switch>
          <PrivateRoute path="/" component={Main} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

// class App extends Component {
//   state = {
//     name: '',
//     description: '',
//         // more state variables
//   }

//   handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })

//   createAndDownloadPdf = () => {
//     axios.post('/create-pdf', this.state)
//       .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
//       .then((res) => {
//         const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

//         saveAs(pdfBlob, 'WO.pdf');
//       })
//   }


//   render() {
//     return (
//       <div className="App">
//         <div class="main">
//         <p class="sign" align="center">Make A New Work Order</p>
//         {/* more input tags */}
//         <textarea class="un " type="text" placeholder="Work Order Information" name="wo" id="wo" onChange={this.handleChange}/>
//         <textarea class="pass" type="text" placeholder="Description" name="description" onChange={this.handleChange}/>
//         <button class="submit" onClick={this.createAndDownloadPdf}>Download PDF</button>
         

//        </div>
//       </div>
//     );
//   }
// }

export default App;
