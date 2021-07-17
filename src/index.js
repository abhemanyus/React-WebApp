const domContainer = document.querySelector('#basket');

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let JSX = (<ul></ul>);
    if (Array.isArray(this.props.items)) {
      JSX = (
        <ul class="list-group">
          {this.props.items.map((item, index) => <li class="list-group-item"><button class="btn btn-default btn-block" onClick={this.props.onClick} value={item} index={index}>{item}</button></li>)}
        </ul>);
    } else {
      JSX = (
        <ul class="list-group">
          {Object.keys(this.props.items).map( key => {
            if (this.props.items[key] > 0) { return (<li class="list-group-item"><button class="btn btn-default btn-block" onClick={this.props.onClick} value={key} >({this.props.items[key]}) {key}</button></li>)}})}
        </ul>);
    }
    return JSX;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grocery: ["Apple", "Pizza", "Cholocate", "Chips", "Juice", "Soap", "Toilet Paper", "Coffee"],
      basket: {}
    };
    this.state.grocery.forEach(item => {
      this.state.basket[item] = 0;
    });
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }
  addItem(item) {
      this.setState((prevState) => {
      const state = prevState;
      state.basket[item.target.value] += 1;
      return state;
    });
  }
  removeItem(item) {
    this.setState((prevState) => {
      const state = prevState;
      (state.basket[item.target.value] <= 0) || (state.basket[item.target.value] += -1)
      return state;
    });
  }
  render() {
    return (
      <div class="row">
      <div class="card card-body text-center col-6">
        <h1 class="card card-title bg-primary text-light">Grocery</h1>
        <List items={this.state.grocery} onClick={this.addItem} />
      </div>
      <div class="card card-body text-center col-6">
        <h1 class="card card-title bg-secondary text-light">Basket</h1>
        <List items={this.state.basket} onClick={this.removeItem} />
      </div>        
      </div>);
  }
}

ReactDOM.render(<App />, domContainer);