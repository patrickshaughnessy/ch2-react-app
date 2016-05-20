
var Welcome = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Welcome To Managed Properties</h1>
        <p>Add a new property</p>
      </div>
    )
  }
})

var Counter = React.createClass({

  componentDidMount: function(){
    console.log(this.props);
  },

  render: function() {
    return (
      <div>
        <h3>Counter {this.props.id + 1}: {this.props.counter}</h3>
        <button onClick={this.props.onAddClick}>+</button>
        <button onClick={this.props.onMinusClick}>-</button>
      </div>
    )
  }
})

var Root = React.createClass({
  getInitialState: function(){
    return {
      counter: 0,
      counters: []
    }
  },

  addCount: function(){
    console.log('in root add count')
    this.setState({counter: this.state.counter + 1});
  },

  minusCount: function(){
    console.log('in root minus count')
    this.setState({counter: this.state.counter - 1});
  },

  addCounter: function(){
    let counters = this.state.counters;
    let nextCounterId = counters.length ? counters[counters.length-1] : 1;
    this.setState({counters: this.state.counters.concat({id: nextCounterId})});
  },

  render: function() {

    return (
      <div>

        <Welcome />

        <button onClick={this.addCounter}>Add A Counter</button>

        {this.state.counters.map((counter, idx) => {
          return <Counter key={idx} id={idx} onAddClick={this.addCount} onMinusClick={this.minusCount} counter={this.state.counter} />
        })}

      </div>
    )
  }
})

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
