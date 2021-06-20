class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  // Add handleChange() and submitMessage() methods here
  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  submitMessage() {
    // this.setState({
    //   messages: this.state.messages.push(this.state.input)
    // });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        {/* Render an input, button, and ul below this line */}
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        />

        <button type="button" onClick={submitMessage}>
          Add message
        </button>
        <ul>
          {this.state.messages.map((message) => (
            <li>{message}</li>
          ))}
        </ul>

        {/* Change code above this line */}
      </div>
    );
  }
}
