// import logo from './logo.svg';
import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

import "./App.css";
class App extends Component {
   // First life cycle Hooks
  // Contructor is called once  when an Instance of class is created
  constructor () {
    super();
    console.log ('App constructor called');
//  the right place to intialze properties in the class
  }
  componentDidMount(){
    // Perfect place to call ajax to get  data from server
    // this component is called after Render in the Dom
    console.log('App -Mounted');

  }
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleincrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
    //console.log(counter);
  };

  handledecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });

    //console.log(counter);
  };
  handleDelete = (counterId) => {
    //   console.log("Delete clicked", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  handleReset = () => {
    //   console.log("Delete clicked", counterId);
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    console.log('App Rendered');
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
      <React.Fragment>
        <Navbar totalcounter={this.state.counters.filter(c=> c.value>0 ).length}></Navbar>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleincrement}
            onDecrement={this.handledecrement}
            onDelete={this.handleDelete}
          >
            {" "}
          </Counters>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
