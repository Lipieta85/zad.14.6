//Metody will - wywoływane zanim coś się wydarzy;
//Metody did - wywoływane po tym jak coś się wydarzyło;
var Counter = React.createClass({
    getDefaultProps(){
        console.log('getDefaultProps - ustawia warości domyślne propsów.')
        console.log('getInitialState - określa stan początkowy komponentu') 
    },
    
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
    componentWillReceiveProp(){
        console.log('componentWillReceiveProps-Metoda ta pozwala aktualizować stan na podstawie nadchodzących właściwości')
        console.log('shouldComponentUpdate-wywoływana tuż przed wywołaniem metody render, służy do optymalizacji aplikacji')
        console.log('componentWillUpdate - wywoływana tylko na nadchodzące zmiany i jeśli shouldComponentUpda = true' )
        console.log('componentDidUpdate - wywołuje sie jako ostatnia po przerysowaniu, możemy w niej wykonać np. jakieś manipulacje DOM')
    },
    
    render: function() {
        return React.createElement('div', {className: 'buttons'},
        React.createElement('button', {onClick: this.increment, className: 'btn btn-success'}, 'Add 1'),
        React.createElement('button', {onClick: this.decrement, className: 'btn btn-success'}, 'Minus 1'),
        React.createElement('p', {}, 'Licznik ' + this.state.counter)    
        );    
    },
    
    
    componentDidMount(){
        console.log('componentDidMount -wywoływana po metodzie render, do wykonywania opracji np. jquery lub pobranie danych')
    },
    componentWillUnmount(){
        console.log('componentWillUnmount-faza usuwania,odpinanie timerów czy nasłuchiwanie zdarzeń na elementach DOM')
    }
});


var element = React.createElement('div', {className: 'element'},
              React.createElement(Counter),
              React.createElement(Counter),
              React.createElement(Counter)
);
ReactDOM.render(element, document.getElementById('app'));