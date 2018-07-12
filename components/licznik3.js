var Counter3 = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    
    render: function() {
        return React.createElement('div', {className: 'buttons'},
        React.createElement('button', {onClick: this.increment, className: 'btn btn-success'}, 'Add 1'),
        React.createElement('button', {onClick: this.decrement, className: 'btn btn-success'}, 'Minus 1'),
        React.createElement('p', {}, 'Licznik ' + this.state.counter)
        );
    }
});

var element = React.createElement(Counter3);
ReactDOM.render(element, document.getElementById('app3'));