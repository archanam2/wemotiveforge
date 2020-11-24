import React from 'react';
import './Header.css';
import { Component } from 'react';

class Header extends Component{
    constructor(){
        super()
        this.state={
            searchData:null,
            noData:false
        }
    }
    search(key){
        console.warn(key);
        fetch('https://newsapi.org/v2/everything?q=${searchField}&apiKey=a13e7763420d44b2844eb7c59754786e')
        .then((response) => {
           
            console.warn("response",response);
            if(response.length>0){
                this.setState({searchData:response,noData:false})
            }
            else{
                this.setState({noData:true,searchData:null})
            }
            return response.json();
            
        })
    }
    render(){
        return(
            <>
         <h1>News App</h1>
         <input type = "text"
          placeholder="Search for a news........"
          onChange={(event)=> this.search(event.target.value)}></input>
          <div>
              {
                  this.state.searchData?
                  <div>
                      {
                          this.state.searchData.map((item)=>{
                          <div>{item.name}</div>
                        //   return(
                        //     <div className="news-set">
                        //       <b>{item.author}</b>
                        //   <h2>{item.title}</h2>
                          
                        //   <img src={item.urlToImage} alt="imgnews"/>
                        //   <p>{item.content}</p>
                        //   <a href={item.url} >Read More</a><br></br>
                        //   </div>
                        //   );
                          })
                      }
                  </div>
                  :""
              }
              {
                  this.state.noData?<h3>No Data found</h3>:null
              }
          </div>
          
         <button id="search"  >Search</button>
        </>
        );
    }
}

// function Header() {
//     const searchNews = () =>{
//         console.log("data founds")
//     };
//     return(
//         <>
        
//         <h1>News App</h1>
//         <input type = "text" placeholder="Search for a news........"></input>
//         <button id="search" onClick={searchNews} >Search</button>
//         </>
//     )

// }
export default Header;