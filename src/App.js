import { Component} from 'react';
import './App.css';
import CardList from './Components/card-list/card-list.component';
import SearchBox from './Components/search-box/search-box.component';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters : [],
      searchField : "", //its a string of search input ---> empty on the start
      dataFromServer: null,//message from the server.js (port 8000)
    };
  }

  componentDidMount(){
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(() => {
      return { monsters: users };
    }))
    .catch( error => console.log('I have failed'));
    
    this.callBackendAPI()
    .then(res => this.setState({ dataFromServer: res.express }))
    .catch(err => console.log(err));
  }
  //for getting a message from the server:
  callBackendAPI = async () => {
    const response = await fetch('http://localhost:8000/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };


  onSearchChange = (event) =>{
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField }//its the same like - { searchField : searchField}
    });
  }

  
  render(){
    const { onSearchChange } = this;
    const { monsters, searchField ,dataFromServer} = this.state; 
    //a new array for monsters after filtering
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox
          className='monsters-search-box' 
          placeholder='Search monsters' 
          onChangeHandler={onSearchChange}
        />
        {/* monsters - is a call back to my filteredMonsters array that i pass to child component */}
       <CardList monsters = { filteredMonsters }/>
       <p className='pStyle'>Message from server localhost 8000:  {dataFromServer}</p>
      </div>
    );
  }
}


export default App;
