import React from 'react'
import queryString from 'query-string'

class Singlemovie extends React.Component{
    state={
        movie : []
    }
    async componentWillMount(){
        let {imdbID} = queryString.parse(this.props.location.search)
        let movie = await fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=65525897`)

        movie = await movie.json()
        console.log(movie)
        this.setState({
            movie : movie
        })
    }
    render(){     
        return(
            <div>
                <div className="container">
                <div class="jumbotron jumbotron-fluid">
  <div class="container">
  <img src={this.state.movie.Poster}/>
    <h1 class="display-4">{this.state.movie.Title}</h1>
        <h4>{this.state.movie.Year}</h4>
        <h4>{this.state.movie.Rated}</h4>
        <h4>{this.state.movie.Released}</h4>
        <h4>{this.state.movie.Runtime}</h4>
        <h4>{this.state.movie.genre}</h4>
        <h4>{this.state.movie.Director}</h4>
        <h4>{this.state.movie.Writer}</h4>
        <h4>{this.state.movie.Actors}</h4>
        <h4>{this.state.movie.Language}</h4>
        <h4>{this.state.movie.Country}</h4>
        <h4>{this.state.movie.Awards}</h4>
        <h4>{this.state.movie.Production}</h4>
        <h4>{this.state.movie.imdbRating}</h4>
        <h4>{this.state.movie.imdbVotes}</h4>
        <p>{this.state.movie.Plot}</p>
  </div>
</div>
            <div>
                </div>
      
        
                        </div>
                </div>
        )
    }
}
export default Singlemovie;