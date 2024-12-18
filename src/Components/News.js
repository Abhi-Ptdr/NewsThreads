import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  
  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1          //to handle pagination default is page = 1
    }
  }

  async componentDidMount(){ 
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=028c82e1117c4615a152c8c3862e1e4c&pageSize=21&page=1";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults   //totalResults is there in our fetched data 
    })
  }

  handlePrevClick = async ()=>{
    console.log("prev");
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=028c82e1117c4615a152c8c3862e1e4c&pageSize=21&page=${this.state.page - 1}`; //we can set pageSize to anything upto 100
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles
      })
  }

  handleNextClick = async ()=>{
    console.log("next");
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/21)){  //total results on a page is 21 as pageSize is set to 21 in url
        //Do nothing and we can disable the next button if this condition achives, so added to btn below.
    }
    else{
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=028c82e1117c4615a152c8c3862e1e4c&pageSize=21&page=${this.state.page + 1}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
      })
    }
  }
  
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsThreads Tranding Topics</h2>
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title?.slice(0, 45) || "Title not available"} description={element.description?.slice(0, 80) || "Description not available"} newsUrl={element.url} imageUrl={element.urlToImage}/>
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" className="btn btn-dark" onClick={this.handlePrevClick} disabled={this.state.page<=1}>&larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick} disabled={this.state.page+1 > Math.ceil(this.state.totalResults/21)}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
