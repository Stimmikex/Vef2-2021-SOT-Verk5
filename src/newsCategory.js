import React, { Component } from 'react';

class newsCategory extends Component {
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
                <p>{console.log(this.state)}</p>
                {this.state.loading || !this.state.news ? (
                    <div>loading...</div>
                ) : (
                    <div>
                        {
                        this.state.news.map((data, i) => { 
                            return (
                                <div>
                                    <p>{data.id}</p>
                                    <a href='{data.map}'>link</a>
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
export default newsCategory;