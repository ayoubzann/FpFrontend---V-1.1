import React, { Component } from 'react'
import TrackService from '../../Services/TrackService';

class CreateTrackComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            title: '',
            composer: '',
            seconds: '',
            releaseDate: '',
            photoUrl: ''
        }
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeComposerHandler = this.changeComposerHandler.bind(this);
        this.changeSecondsHandler = this.changeSecondsHandler.bind(this);
        this.changeReleaseDateHandler = this.changeReleaseDateHandler.bind(this);
        this.changePhotoUrlHandler = this.changePhotoUrlHandler.bind(this);
        this.saveOrUpdateTrack = this.saveOrUpdateTrack.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            TrackService.getTrackById(this.state.id).then( (res) =>{
                let track = res.data;
                this.setState({title: track.title,
                    composer: track.composer,
                    seconds : track.seconds,
                    releaseDate : track.releaseDate,
                    photoUrl : track.photoUrl
                });
            });
        }        
    }
    saveOrUpdateTrack = (e) => {
        e.preventDefault();
        let track = {title: track.title, composer: track.composer, seconds : track.seconds, releaseDate : track.releaseDate, photoUrl : track.photoUrl};
        console.log('track => ' + JSON.stringify(track));

        // step 5
        if(this.state.id === '_add'){
            TrackService.createTracks(track).then(res =>{
                this.props.history.push('/Track');
            });
        }else{
            TrackService.updateTrack(track, this.state.id).then( res => {
                this.props.history.push('/Track');
            });
        }
    }
    
    changeTitleHandler= (event) => {
        this.setState({title: event.target.value});
    }

    changeComposerHandler= (event) => {
        this.setState({composer: event.target.value});
    }

    changeSecondsHandler= (event) => {
        this.setState({seconds: event.target.value});
    }

    changeReleaseDateHandler= (event) => {
        this.setState({releaseDate: event.target.value});
    }

    changePhotoUrlHandler= (event) => {
        this.setState({photoUrl: event.target.value});
    }

    cancel(){
        this.props.history.push('/Track');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Track</h3>
        }else{
            return <h3 className="text-center">Update Track</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Title: </label>
                                            <input placeholder="Title" name="title" className="form-control" 
                                                value={this.state.title} onChange={this.changeTitleHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Composer: </label>
                                            <input placeholder="Composer" name="composer" className="form-control" 
                                                value={this.state.composer} onChange={this.changeComposerHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Seconds: </label>
                                            <input placeholder="Seconds" name="seconds" className="form-control" 
                                                value={this.state.seconds} onChange={this.changeSecondsHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Release date: </label>
                                            <input placeholder="ReleaseDate" name="releaseDate" className="form-control" 
                                                value={this.state.releaseDate} onChange={this.changeReleaseDateHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Photo URL: </label>
                                            <input placeholder="PhotoUrl" name="photoUrl" className="form-control" 
                                                value={this.state.photoUrl} onChange={this.changePhotoUrlHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateTrack}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateTrackComponent