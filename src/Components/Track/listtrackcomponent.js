import React, { Component } from 'react'
import TrackService from '../../Services/TrackService';
class ListTrackComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                tracks: []
        }
        this.addTrack = this.addTrack.bind(this);
        this.editTrack = this.editTrack.bind(this);
        this.deleteTrack = this.deleteTrack.bind(this);
    }

    deleteTrack(id){
        TrackService.deleteTrack(id).then( res => {
            this.setState({track: this.state.tracks.filter(track => track.id !== id)});
        });
    }
    viewTrack(id){
        this.props.history.push(`/Track/${id}`);
    }
    editTrack(id){
        this.props.history.push(`/Track/${id}`);
    }

    componentDidMount(){
        TrackService.getTrack().then((res) => {
            this.setState({ tracks: res.data});
        });
    }

    addTrack(){
        this.props.history.push('/Track');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Tracks List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addTrack}> Add Track</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Title</th>
                                    <th> Composer</th>
                                    <th> Seconds</th>
                                    <th> Releasedate</th>
                                    <th> Photo URL</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.tracks.map(
                                        track => 
                                        <tr key = {track.id}>
                                             <td> {track.title} </td>   
                                             <td> {track.composer}</td>
                                             <td> {track.seconds}</td>
                                             <td> {track.releaseDate}</td>
                                             <td> {track.photoUrl}</td>
                                             <td>
                                                 <button onClick={ () => this.editTrack(track.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteTrack(track.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewTrack(track.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListTrackComponent