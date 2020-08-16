import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './App.css';

const testData = [
    {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
    {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];

class Display extends React.Component {
  render() {
    return <div className="header">{this.props.title}</div>
  }
}

const CardList = (props) => (
  <div>
    {props.profiles.map(
      profile => <Card {...profile}/>
    )}
  </div>
);

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className="github-profile">
        <img src={profile.avatar_url} alt="Github prof pic"/>
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}

class Form extends React.Component {
  state = { userName: '' };
  handleSubmit = async (event) => {
    event.preventDefault();
    // const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
    const resp = await axios.get(`http://172.30.0.3:8000/books`);
    // 172.30.0.3
    console.log(resp)
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder="GitHub username" 
          required 
        />
        <button>Add card</button>
      </form>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: testData,
    };
  }
  render() {
    return (
      <React.Fragment>
       <Display title="The Github Cards App" /> 
       <Form />
       <CardList profiles={this.state.profiles}/>
      </React.Fragment>
    );
  } 
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

export default App;
