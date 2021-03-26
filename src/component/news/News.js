import React, { Component } from 'react';
import NewsCategory from '../newsCategory/NewsCategory.js';
import N from './News.module.scss';

const {
    REACT_APP_API_URL: apiUrl,
  } = process.env;

class News extends Component {
    state = {
        loading: true,
        news: null,
    }
    async componentDidMount() {
        const reponse = await fetch(apiUrl);
        console.log(reponse);
        const data = await reponse.json();
        this.setState({ news: data, loading: false })
    }
	render() {
		return (
            <div>
                {this.state.loading || !this.state.news ? (
                    <div>loading...</div>
                ) : (
                    <div className={N.news_container}>
                        {
                        this.state.news.map((data, i) => { 
                            return (
                                <div className={N.news_container_news}>
                                    <NewsCategory link={data.url} amount={5} path={data.id} baka={"test"}></NewsCategory>
                                </div>
                            )
                        })
                        }
                    </div>  
                )}
            </div>
        );
    }
}
export default News;
