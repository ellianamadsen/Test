import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

import NavBar from "./components/NavBar";
import { useAuth0 } from "@auth0/auth0-react";

import { Route, Switch } from "react-router-dom";
import { Profile, Main, PrivateRoute } from './components';
import history from "./utils/history";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div className="App">
      {/* Don't forget to include the history module */}
        <header>
          <NavBar />
        </header>
        <Switch>
          <PrivateRoute path="/" component={Main} />
          <Route path="/profile" component={Profile} />
        </Switch>
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
