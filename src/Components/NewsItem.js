import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props
    
    return (
      <div className='my-3'>
        <div className="card" style={{width: '18rem'}}>
          <img src={imageUrl?imageUrl:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_bMyK51UEk6G7B-Umw22ugEyKzM5XopsWrKqUMglTqQRoEKUlvK08LNAHhRi6Vlso1TgpglAzpIe7x9KD2Tyt6HOkYIRMwpYPaW2tdEDifYO85t8r7GQCJfUum_QbH59dbdvseZ4Wt0BxKzh_j-Zxz7oVxWrnPDH6uVfmsLd_PQhPOxUw4H7nqsPSiFw/s728-rw-e365/threathunting.png"} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}..</h5>
            <p className="card-text">{description}..</p>
            <a href={newsUrl} target="_blank" className="btn btn-primary btn-sm">Read More</a> {/*target="_blank" to open link in new tab*/}
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
