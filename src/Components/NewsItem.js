import React, { Component } from 'react'
// import { data } from 'react-router-dom'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props    //array destructuring syntax
    
    return (
      <div className='my-3'>
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex: '1'}}>{source}</span>
          <img src={imageUrl?imageUrl:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_bMyK51UEk6G7B-Umw22ugEyKzM5XopsWrKqUMglTqQRoEKUlvK08LNAHhRi6Vlso1TgpglAzpIe7x9KD2Tyt6HOkYIRMwpYPaW2tdEDifYO85t8r7GQCJfUum_QbH59dbdvseZ4Wt0BxKzh_j-Zxz7oVxWrnPDH6uVfmsLd_PQhPOxUw4H7nqsPSiFw/s728-rw-e365/threathunting.png"} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}..</h5>
            <p className="card-text">{description}..</p>
            <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} on {new Date(date).toGMTString()} </small></p>
            <a className="btn btn-dark btn-sm" href={newsUrl} target="_blank" rel="noreferrer">Read More</a> {/*target="_blank" to open link in new tab*/}
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem


// NOTE: 
// "publishedAt": "2024-12-16T02:36:17Z" we have this "ISO" string in our fetched data

// so we can use so many javascript methods on it for eg.

// const a = "2024-12-16T02:36:17Z";
// const date = new Date(a);
// const year = date.getUTCFullYear(); // 2024
// const month = date.getUTCMonth() + 1; // 12 (0-indexed)
// const day = date.getUTCDate(); // 16
// const hours = date.getUTCHours(); // 2
// const minutes = date.getUTCMinutes(); // 36
// const seconds = date.getUTCSeconds(); // 17
// const gmtString = date.toUTCString(); // "Mon, 16 Dec 2024 02:36:17 GMT"
// const onlyDate = date.toISOString().split('T')[0]; // "2024-12-16"
// const onlyTime = date.toISOString().split('T')[1].split('Z')[0]; // "02:36:17"

