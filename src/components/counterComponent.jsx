import React, { Component } from "react";

class Counter extends Component {

  componentDidUpdate(prevPorps, prevState){
    console.log('PrevProps' ,prevPorps);
    console.log('PrevState', prevState);
    if (prevPorps.counter.value !== this.props.counter.value){
      // ajax call to get data from server
    }
    // this method is called  after Component is updated  means new Props new State 
    // if there  change in data we call ajax to get new data from server
  }
  componentWillUnmount(){
    console.log('CounterComponent - Unmount');
  }
  // constructor (){
  //     super();
  //     this.handleincrement= this.handleincrement.bind(this);
  // }

   state = {
  //   value: this.props.counter.value,
     imageUrl: "https://picsum.photos/200",
  //   // tags: ["tag1" ,"tag2", "tag3"]
     tags: [],
   };

  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There is no tags!</p>;
    return (
      <ul>
        {" "}
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  // handleincrement = (product) => {
  //   //  console.log('clicked 1');
  //   this.setState({ value: this.state.value + 1 });
  // };

  // handleincrement1 = () => {
  //   //  console.log('clicked 1');
  //   this.setState({ value: this.state.value - 1 });
  // };

  dohandleincrement = () => {
    this.handleincrement({ id: 1 });
  };
  render() {
    console.log('counterComponent  - Rendered');
    //  console.log('props',this.props);
    return (
      <div >
        {/* <img src={this.state.imageUrl} alt=""></img> */}
        {this.props.children}
        <h1>{this.formatCount()}</h1>
        <div style={{
        display: 'flex',
          justifyContent: 'center',
         alignItems: 'center',

    }} >
          <button onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-secondary">
            Decrease
          </button>
          <span style={this.styles} className={this.getbagdeclasses()}>
            {this.formatCount()}
          </span>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary"
          >
          Increase
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger m-2"
          >
            Delete
          </button>
        </div>
        <div>
          {this.state.tags.length === 0 && "No pages or tags here"}

          {this.renderTags()}
        </div>
      </div>
    );
  }

  getbagdeclasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
