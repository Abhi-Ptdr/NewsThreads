import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
  
  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1
    }
  }

  async componentDidMount(){ 
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=028c82e1117c4615a152c8c3862e1e4c&pageSize=${this.props.pageSize}&page=1`; //here in class based component no need to pass props as argument becoz classes never takes arg/parameter as funtions
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
  }

  handlePrevClick = async ()=>{
    console.log("prev");
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=028c82e1117c4615a152c8c3862e1e4c&pageSize=${this.props.pageSize}&page=${this.state.page - 1}`; //setting pageSize varible by giving props to the Newj component
      this.setState({loading: true})
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles,
        loading: false
      })
  }

  handleNextClick = async ()=>{
    console.log("next");
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){  //21 is replaced by this.props.pageSize everywhere
        //negation is applied so we can do else vala part in it
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=028c82e1117c4615a152c8c3862e1e4c&pageSize=${this.props.pageSize}&page=${this.state.page + 1}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      })
    }
  }
  
  render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center'>NewsThreads Tranding Topics</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title?.slice(0, 45) || "Title not available"} description={element.description?.slice(0, 80) || "Description not available"} newsUrl={element.url} imageUrl={element.urlToImage}/>
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" className="btn btn-dark" onClick={this.handlePrevClick} disabled={this.state.page<=1}>&larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick} disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
