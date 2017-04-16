var GreeterMessage = React.createClass({

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

var GreeterForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();

        var updates = {};
        var name = this.refs.name.value;
        var message = this.refs.message.value;

        if (name.length > 0) {
            this.refs.name.value = '';
            updates.name = name;
        }
        
        if (message.length > 0) {
            this.refs.message.value = '';
            updates.message = message;
        }
        
        this.props.onNewData(updates);
    },
    render: function() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div>
                    <input type="text" ref="name" placeholder="Enter your name"/>                    
                </div>
                <div>
                    <textarea rows="4" cols="19" ref="message" placeholder="Enter your message"/>               
                </div>
                <div>
                    <button>
                        Submit
                    </button>               
                </div>                    
            </form>
        );
    }
});

var Greeter = React.createClass({
    getDefaultProps: function() {
        return {
            name: 'React',
            message: 'This is from a component! Default state.'
        };
    },
    getInitialState: function() {
        return {
            name: this.props.name,
            message: this.props.message
        };
    },
    handleNewData: function(updates) {
        this.setState(updates);
    },
    render: function() {
        var name = this.state.name;
        var message = this.state.message;
        return (
            <div>
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onNewData={this.handleNewData}/>
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
