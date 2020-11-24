
import './App.css';
import { Component } from 'react';
import Header from './Header';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      articles: []
    }
  }
  componentDidMount(){
    fetch('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a13e7763420d44b2844eb7c59754786e')
    .then((response) => {
		  return response.json();
      })
    .then((myJson) => {
      // console.log(myJson);
      this.setState ({
        articles: myJson.articles
      });
    });
  }
  render(){
    return(
      
      <div className="App">
        <div className="center-div">
        <Header />
        <div class="news-style">
        {this.state.articles.map((item,index) =>{
          return(
            <div className="news-set">
              <b>{item.author}</b>
          <h2>{item.title}</h2>
          
          <img src={item.urlToImage} alt="imgnews"/>
          <p>{item.content}</p>
          <a href={item.url} >Read More</a><br></br>
          </div>
          );
        })}
        </div>
        </div>
      </div>
    );
  }
}
export default App;
