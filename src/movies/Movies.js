import React from 'react'
import {Link} from 'react-router-dom'

class Movies extends React.Component{
    state ={
        movies : []
    }
    async componentWillMount(){
        let  movies = await fetch("https://www.omdbapi.com/?s=man&apikey=65525897")
        movies = await movies.json()
        this.setState({
            movies : movies.Search
        })
    }
    render(){
        let movies = this.state.movies.map((item, index)=>{
            return(
            <Link to={`/singlemovie/?imdbID=${item.imdbID}`}><button type="button" class="list-group-item list-group-item-action"><img className="poster" src={item.Poster}/>{item.Title}</button></Link>
            )
        })
    return(
        <div>
            <div className="container">
                <div className="row">
    <div class="list-group box">{movies}</div>
            </div>
            </div>
        </div>
    )
}
}

export default Movies;

