import React, {Component} from "react";
import "./App.css";



class Profile extends Component {
    
    numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}



    render(){
        let artist={name:'', followers:{total:''},images:[{url:''}],genres:[]};
        artist=this.props.artists !== null ? this.props.artists: artist;
        
       
        
        
        return(
            
            <div className="Profile well">
                <img className="profile-image" alt="profile" 
                src={artist.images[0].url}/>
                <div className="profile-info">
                
                <div className='profile-artist'>{artist.name}</div>
                <div className='profile-followers'>Followers: {this.numberWithCommas(artist.followers.total)}</div>
                <div >Popularity Score: {artist.popularity}</div>
                <div className='profile-genres'>
                {
                    artist.genres.map(
                    (genre,k)=>{
                    
                    if(genre===artist.genres[0]){
                       genre="Specialties include: "+genre;
                        
                    }
                    else{
                    if(genre===artist.genres[artist.length-1]){
                        genre="& "+genre;
                    }
                        else{ genre=", "+genre;
                        }
                    }
                        
                        return(
                        
                        <span key={k}>{genre}</span>
                        )
                        
                    }
                    )
                    
                }
                
                </div>
                
                </div>
                
            </div>
            
            
            
            )
    }
    
}

export default Profile;