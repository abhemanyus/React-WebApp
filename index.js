var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var domContainer = document.querySelector('#basket');

var List = function (_React$Component) {
  _inherits(List, _React$Component);

  function List(props) {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));
  }

  _createClass(List, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var JSX = React.createElement("ul", null);
      if (Array.isArray(this.props.items)) {
        JSX = React.createElement(
          "ul",
          { "class": "list-group" },
          this.props.items.map(function (item, index) {
            return React.createElement(
              "li",
              { "class": "list-group-item" },
              React.createElement(
                "button",
                { "class": "btn btn-default btn-block", onClick: _this2.props.onClick, value: item, index: index },
                item
              )
            );
          })
        );
      } else {
        JSX = React.createElement(
          "ul",
          { "class": "list-group" },
          Object.keys(this.props.items).map(function (key) {
            if (_this2.props.items[key] > 0) {
              return React.createElement(
                "li",
                { "class": "list-group-item" },
                React.createElement(
                  "button",
                  { "class": "btn btn-default btn-block", onClick: _this2.props.onClick, value: key },
                  "(",
                  _this2.props.items[key],
                  ") ",
                  key
                )
              );
            }
          })
        );
      }
      return JSX;
    }
  }]);

  return List;
}(React.Component);

var App = function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App(props) {
    _classCallCheck(this, App);

    var _this3 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this3.state = {
      grocery: ["Apple", "Pizza", "Cholocate", "Chips", "Juice", "Soap", "Toilet Paper", "Coffee"],
      basket: {}
    };
    _this3.state.grocery.forEach(function (item) {
      _this3.state.basket[item] = 0;
    });
    _this3.addItem = _this3.addItem.bind(_this3);
    _this3.removeItem = _this3.removeItem.bind(_this3);
    return _this3;
  }

  _createClass(App, [{
    key: "addItem",
    value: function addItem(item) {
      this.setState(function (prevState) {
        var state = prevState;
        state.basket[item.target.value] += 1;
        return state;
      });
    }
  }, {
    key: "removeItem",
    value: function removeItem(item) {
      this.setState(function (prevState) {
        var state = prevState;
        state.basket[item.target.value] <= 0 || (state.basket[item.target.value] += -1);
        return state;
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { "class": "row" },
        React.createElement(
          "div",
          { "class": "card card-body text-center col-6" },
          React.createElement(
            "h1",
            { "class": "card card-title bg-primary text-light" },
            "Grocery"
          ),
          React.createElement(List, { items: this.state.grocery, onClick: this.addItem })
        ),
        React.createElement(
          "div",
          { "class": "card card-body text-center col-6" },
          React.createElement(
            "h1",
            { "class": "card card-title bg-secondary text-light" },
            "Basket"
          ),
          React.createElement(List, { items: this.state.basket, onClick: this.removeItem })
        )
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), domContainer);