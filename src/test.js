import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class News extends Component {
    state = {
        loading: true,
        news: null,
    }
    async componentDidMount() {
        const reponse = await fetch('https://vef2-2021-ruv-rss-json-proxy.herokuapp.com/');
        const data = await reponse.json();
        this.setState({ news: data, loading: false })
    }
	render() {
		return (
            <div>
                <h1>Rúv Fréttir</h1>
                {this.state.loading || !this.state.news ? (
                    <div>loading...</div>
                ) : (
                    <div class="news_container">
                        {
                        this.state.news.map((data, i) => { 
                            return (
                                <div class="news_container-news">
                                    <NewsCategory link={data.url}></NewsCategory>
                                    <Link to={data.id}>Allar Fréttar</Link>
                                </div>
                            )
                        })
                        }
                    </div>  
                )}
                <hr></hr>
                <p>Fréttir frá <a href="https://www.ruv.is/">RÚV</a></p>
            </div>
        );
    }
}

class NewsCategory extends Component {
    state = {
        loading: true,
        news: null,
    }
    async componentDidMount() {
        const reponse = await fetch(this.props.link);
        const data = await reponse.json();
        this.setState({ news: data, loading: false })
    }
	render() {
		return (
            <div>
                {this.state.loading || !this.state.news ? (
                    <div>loading...</div>
                ) : (
                    <div>
                        <p>{this.state.news.title}</p>
                        {console.log(this.state.news.items)}
                        {this.state.news.items.map((data, i) => { 
                            return (
                                <div>
                                    <a href={data.link}>{data.title}</a>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        );
    }
}
export {
    NewsCategory,
    News,
}