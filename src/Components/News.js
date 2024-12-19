import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  
  static defaultProps = {
    country: 'us',
    pageSize: 9,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  capitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  constructor(props){
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsThreads`;
  }

  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}&apiKey=c8f5b45d3ba04487bf664ab0093ed3aa&page=${this.state.page}`; //here in class based component no need to pass props as argument becoz classes never takes arg/parameter as funtions
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
  }

  async componentDidMount(){ 
    this.updateNews();
  }

  fetchMoreData = async () => {
    this.setState({page: this.state.page + 1});
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}&apiKey=c8f5b45d3ba04487bf664ab0093ed3aa&page=${this.state.page+1}`; //here in class based component no need to pass props as argument becoz classes never takes arg/parameter as funtions
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    })
  };
  
  render() {
    return (
      <>
        <h2 className='text-center' style={{margin: '35px 0px'}}>Tranding {this.capitalizeFirstLetter(this.props.category)} NewsThreads</h2>
        {this.state.loading && <Spinner/>}

        <InfiniteScroll dataLength={this.state.articles.length} next={this.fetchMoreData} hasMore={this.state.articles.length !== this.state.totalResults} loader={<Spinner/>}>
          
          <div className="container">
            <div className="row">
              {this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title?.slice(0, 45) || "Title not available"} description={element.description?.slice(0, 80) || "Description not available"} 
                  newsUrl={element.url} imageUrl={element.urlToImage} author={element.author} date={element.publishedAt} source={element.source.name}/>
                </div>
              })}
            </div>
          </div>
        
        </InfiniteScroll>
        {/* first we have to install infinite scroll component using "npm i react-infinite-scroll-component" */}
        {/*this Infite scroll syntax is taken from docs: https://codesandbox.io/p/sandbox/yk7637p62z?file=%2Fsrc%2Findex.js%3A15%2C5 */}
      </>
    )
  }
}

export default News
