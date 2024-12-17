import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  //Data members shoudld be defined here
  articles = [
      {
        "source": {
            "id": "australian-financial-review",
            "name": "Australian Financial Review"
        },
        "author": "Gus McCubbing",
        "title": "Victorian politics: Labor’s Tim Pallas resigns after 10 years as treasurer",
        "description": "The state treasurer says Labor’s ambitions were always bigger than the budget would allow, but he “never” questioned the $100 billion Suburban Rail Loop.",
        "url": "http://www.afr.com/politics/my-greatest-regret-pallas-resigns-as-victoria-s-debt-grows-20241216-p5kyni",
        "urlToImage": "https://static.ffx.io/images/$zoom_0.3646%2C$multiply_3%2C$ratio_1.777778%2C$width_1059%2C$x_180%2C$y_107/t_crop_custom/c_scale%2Cw_800%2Cq_88%2Cf_jpg/t_afr_no_label_no_age_social_wm/e25aff622ba219864b1ea91afe2aa783cbac4e80",
        "publishedAt": "2024-12-16T02:36:17Z",
        "content": "Victorias Treasurer Tim Pallas says his one major regret after a decade in the role and nearly 20 years in parliament is that Labors ambitions were bigger than its purse strings. But he has no qualms… [+384 chars]"
    },
    {
        "source": {
            "id": "politico",
            "name": "Politico"
        },
        "author": null,
        "title": "The nation’s cartoonists on the week in politics",
        "description": "Every week political cartoonists throughout the country and across the political spectrum apply their ink-stained skills to capture the foibles, memes, hypocrisies and other head-slapping events in the world of politics. The fruits of these labors are hundred…",
        "url": "https://www.politico.com/gallery/2024/12/13/the-nations-cartoonists-on-the-week-in-politics-00194162",
        "urlToImage": "https://static.politico.com/5e/7f/66c3d8e94a48bf2b57401cfd516c/0-teaser.jpg",
        "publishedAt": "2024-12-13T13:27:56+00:00",
        "content": "Cartoon Carousel Every week political cartoonists throughout the country and across the political spectrum apply their ink-stained skills to capture the foibles, memes, hypocrisies and other head-s… [+260 chars]"
    },
    {
        "source": {
            "id": "politico",
            "name": "Politico"
        },
        "author": "Megan Messerly",
        "title": "‘Now she’s the world’s problem’: Some Arizona Republicans relieved Lake is heading to Washington - POLITICO",
        "description": "She's still expected to play a role in Arizona politics.",
        "url": "https://www.politico.com/news/2024/12/12/kari-lake-voa-republicans-00194096",
        "urlToImage": "https://static.politico.com/4c/a4/11d34dff49a39ee4ecd66021d84a/election-2024-rnc-52916.jpg",
        "publishedAt": "2024-12-12T21:31:37+00:00",
        "content": "When youre a two-time loser and you did worse the second time around, thats a clue that maybe the voters dont want you, said Barrett Marson, a GOP strategist in Arizona. I think it clears space for t… [+4416 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Dawn Handley",
        "title": "CNN Headlines | CNN",
        "description": "CNN Headlines is a curated channel covering major news events across politics, international, business, and entertainment, and showcasing the most impactful stories of the day.",
        "url": "https://www.cnn.com/videos/fast/cnn-headlines",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/cnn-headlines-placeholder-1920x1080.png?c=16x9&q=w_800,c_fill",
        "publishedAt": "2024-09-03T19:55:38.781Z",
        "content": "CNN Headlines is a curated channel covering major news events across politics, international, business, and entertainment, and showcasing the most impactful stories of the day."
    },
    {
        "source": {
            "id": "the-american-conservative",
            "name": "The American Conservative"
        },
        "author": null,
        "title": "Politics Archives - The American Conservative",
        "description": null,
        "url": "https://www.theamericanconservative.com/category/politics/",
        "urlToImage": null,
        "publishedAt": "2022-07-07T21:37:27.3936289Z",
        "content": null
    },
    {
        "source": {
            "id": "the-jerusalem-post",
            "name": "The Jerusalem Post"
        },
        "author": null,
        "title": "Congresswoman Nita Lowey: I am proud to stand with Israel",
        "description": "Gantz: Security of Israel is above politics; PA: This is a crime.",
        "url": "https://www.jpost.com/Arab-Israeli-Conflict/Gantz-Security-of-Israel-is-above-politics-Palestinians-This-is-a-crime-607595",
        "urlToImage": "https://images.jpost.com/image/upload/f_auto,fl_lossy/t_Article2016_ControlFaceDetect/448812",
        "publishedAt": "2019-11-13T04:41:00Z",
        "content": "US Ambassador David M. Friedman said the US stands “with our friend and ally Israel at this critical moment” on social media on Tuesday after roughly 170 rockets were fired on Israel from the Gaza St… [+6160 chars]"
    }
  ]
  
  constructor(){      //constructor called whenever we create an object
    super();          //It should always here..
    console.log("Hello I am a constructor form news compo");
    this.state = {
      articles: this.articles,
      loading: false      //we will use it whenever page will load and we want to show some loading Icon
    }
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