const React = require('react');
const ReactDOM = require('react-dom');

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

  getInitialState: function(){
    return {
      counter: 0
    }
  },

  componentDidMount: function(){
    console.log(this.props);
  },

  render: function() {
    return (
      <div>
        <h3>Counter {this.props.counter.id}: {this.state.counter}</h3>
        <button onClick={() => this.setState({counter: this.state.counter + 1})}>+</button>
        <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)}>Delete me</button>
      </div>
    )
  }
})

var Root = React.createClass({
  getInitialState: function(){
    return {
      counter: 0,
      counters: [],
      index: 0
    }
  },

  addCount: function(){
    console.log('in root add count')
    this.setState({counter: this.state.counter + 2});
  },

  minusCount: function(){
    console.log('in root minus count')
    this.setState({counter: this.state.counter - 1});
  },

  addCounter: function(){
    let counters = this.state.counters;
    let nextCounterId = this.state.index + 1;
    this.setState({
      counters: this.state.counters.concat({id: nextCounterId}),
      index: nextCounterId
    });
  },

  deleteCounter: function(id){
    this.setState({counters: this.state.counters.filter(el => el.id !== id)})
  },

  render: function() {

    return (
      <div>
        <Welcome />

        <button onClick={this.addCounter}>Add A Counter</button>

        {this.state.counters.map((counter, idx) => {
          return <Counter key={counter.id}
                          onDelete={this.deleteCounter}
                          onAddClick={this.addCount}
                          onMinusClick={this.minusCount}
                          counter={counter} />
        })}

      </div>
    )
  }
})

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
