import React, {Component} from "react";
import "./App.css";
import {FormGroup,FormControl,InputGroup,Glyphicon} from "react-bootstrap";
import Profile from "./Profile.jsx";
import Gallery from "./Gallery.jsx";

class App extends Component{
    
    constructor(props){
        super(props);
        this.state={
            query:'',
            artists:null,
            tracks:[]
            
        }
    }
    
    search() {
      
    const BASE_URL = 'https://api.spotify.com/v1/search?';
    let FETCH_URL = BASE_URL + 'q=' + this.state.query + '&type=artist&limit=1';  
    const ALBUM_URL = "https://api.spotify.com/v1/artists/";
    
    var accessToken = 'BQD7l-FwN9VtW5kD0yuzef9oVUdrbLuErCL_TVY1dGDx95m22zvuOCr0k-lE9PmmGZD8iS2sLrBAK9Vdlsxvu-J2BXij_4vMUs7yGE9GomA3ZyoHus-QdgjOZsUve7hDa50h9RdxpA';
    
    var myOptions = {
      method: 'GET',
      headers:  {
        'Authorization': 'Bearer ' + accessToken
     },
      mode: 'cors',
      cache: 'default'
    };

    fetch(FETCH_URL, myOptions )
      .then(response => response.json())
      .then(json => {
          const artists=json.artists.items[0];
         
          
            this.setState({artists});  
            
            
            FETCH_URL=`${ALBUM_URL}${artists.id}/top-tracks?country=US&`;
            fetch(FETCH_URL,myOptions)
            .then(response => response.json())
             .then(json => {
             
           
             const tracks=json.tracks;
             this.setState({tracks});
             console.log(this.state.tracks)
      });
      
  });
}

    
    render(){
        
        return(
            <div className="App">
            <div className="App-title">Top 10 HITS</div>
            
            <FormGroup>
            
            <InputGroup>
                <FormControl 
                type="text" placeholder="Search an Artist"
                value={this.state.query}
                onChange={event=>{this.setState({query:event.target.value})}}
                onKeyPress={event=>{
                    
                    if(event.key==="Enter"){
                       this.search()
                    }
                    
                }}
                />
                <InputGroup.Addon onClick={()=>{this.search()}}>
                <Glyphicon glyph="cd"></Glyphicon>
                </InputGroup.Addon>
                </InputGroup>
                
            </FormGroup>
            {
            this.state.artists!==null?
            <div>
                <Profile  artists={this.state.artists} />
            <Gallery tracks={this.state.tracks}/>
            <div className="App-subtitle">Curated by DJ Q</div>
            </div>
            
            :
            <div></div>
            }
            
            
            
            </div>
            )
        
    }
}

export default App;
