import React,{Component} from "react"
import "./App.css";

class Gallery extends Component{
    
    constructor(props){
        super(props);
        this.state={
            playingUrl:'',
            audio:null,
            playing: false
            
            
        }
    }
    
    playAudio(previewURL){
        let audio = new Audio(previewURL);
        if(!this.state.playing){
            audio.play();
            this.setState({playing:true,
                            playingUrl:previewURL,
                            audio
            })
        }
        else{
            if(previewURL===this.state.playingUrl){
                
                this.state.audio.pause();
                
                this.setState({playing:false
                                
                })
            }
            else{
                
                this.state.audio.pause();
                audio.play()
                this.setState({
                    playing:true,
                    playingUrl:previewURL,
                    audio
                })
                
            }
            
        }
        
    }
    
    render(){
        const tracks=this.props.tracks;
        
        
        return(
            
            
            <div>
            {
                
                tracks.map((track,k) => {
               
                const trackImage=track.album.images[0].url;
                
                return(
                
                <div key={k} className="track" onClick={()=>{this.playAudio(track.preview_url)}}>
                
                    <img src={trackImage} className="track-image" id={k} alt="track"/>
                    <p className="track-text">
                    #{k+1} {track.name}
                    </p>    
                    <div className="track-play">
                    <div className="play">
                    
                    {
                        
                    
                    track.preview_url!==null?
                    this.state.playingUrl===track.preview_url? <span> &#10074; &#10074; </span> :<span>&#9654;</span>
                    
                    
                   :
                        
                         <span> NA </span>
                    
                    }
                    </div>

                </div>
                </div>
                    
                )
                    
                })
            }
            
            </div>
            
           
            )
            
        
    }
    
}

export default Gallery ;