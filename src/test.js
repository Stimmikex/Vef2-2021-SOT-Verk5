import React, { Component } from 'react';

class Example1 extends Component {
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
                                    <NewsCategory link={data.url}></NewsCategory>
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

class NewsCategory extends Component {
    state = {
        loading: true,
        news: null,
    }
    async componentDidMount() {
        const reponse = await fetch(this.props.link);
        console.log(this.props.link);
        const data = await reponse.json();
        console.log(data)
        this.setState({ news: data, loading: false })
    }
	render() {
		return (
            <div>
                <p>{console.log(this.state)}</p>
                {this.state.loading || !this.state.news.items ? (
                    <div>loading...</div>
                ) : (
                    <div>
                        { (this.props.link) ? (
                            <div>loading...</div>
                        ) : (
                            this.state.items.map((data, i) => { 
                                return (
                                    <div>
                                        <a href="{data.link}">{data.title}</a>
                                    </div>
                                )
                            })
                        )}
                    </div>
                )}
            </div>
        );
    }
} 
export default Example1;