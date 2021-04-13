import React, { Component } from "react";
import Counter from "./counterComponent";

class Counters extends Component {
 
  render() {
      const {onReset , counters, onDelete , onIncrement, onDecrement} =this.props;
      console.log('Counters -Rendered');
    return (
      <div>
        {/* {this.state.counters.map(counter => 
           <Counter key= {counter.id} onDelete={this.handleDelete} value={counter.value} id={counter.id}>
               <h4>Counter #{counter.id}</h4>
           </Counter>)} */}
        <button
        onClick ={onReset}
         className="btn-primary btn-sm m-2">Reset</button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
