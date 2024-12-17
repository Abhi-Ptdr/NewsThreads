import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  
  constructor(){      //constructor called whenever we create an object
    super();          //It should always here..
    this.state = {
      articles: [],
      loading: false      //we will use it whenever page will load and we want to show some loading Icon
    }
  }

  async componentDidMount(){    //this cdm runs after the render() which is below
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=028c82e1117c4615a152c8c3862e1e4c";
    let data = await fetch(url);
    let parsedData = await data.json();   //await: to wait for the url to load content
    // console.log(parsedData);
    this.setState({articles: parsedData.articles})
  }
  
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsThreads Tranding Topics</h2>
        <div className="row">
          {this.state.articles.map((element)=>{       //To loop through elements(objects) in our aricles array.
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title?.slice(0, 45) || "Title not available"} description={element.description?.slice(0, 80) || "Description not available"} newsUrl={element.url} imageUrl={element.urlToImage}/>
            </div>
          })}
        </div>
      </div>
    )
  }
}

export default News
