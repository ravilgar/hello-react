var Greeter = React.createClass({
    getDefaultProps: function (){
        return {
          name: 'Sveta',
          message: 'This is from a component! Default state.'
        };
    },
    render: function() {
        var name = this.props.name;
        var message = this.props.message;
        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{message}</p>
            </div>
        );
    }
});

var firstName = 'Ravil';
var message = 'This is from a component!';

ReactDOM.render(
    <Greeter name={firstName} message={message}/>,
    document.getElementById('app')
);
