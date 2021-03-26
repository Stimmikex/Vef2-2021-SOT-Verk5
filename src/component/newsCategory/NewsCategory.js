import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import NC from './NewsCategory.module.scss';

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
                    <div className={NC.news_container_id}>
                        <p>{this.state.news.title}</p>
                        {console.log(this.state.news.items)}
                        {typeof this.state.news.items !== 'undefined' ? (
                            this.state.news.items.map((data, i) => { 
                                return (
                                    <div>
                                        {i <= this.props.amount ? (<a href={data.link}>{data.title}</a>) : (console.log('nothing'))}
                                    </div>
                                )
                            })
                        ) : (
                            <h1>404: Það er ekkert með þetta id</h1>
                        )}
                        {this.props.back === '' ? (
                            <Link to="/">Til Baka</Link>
                        ) : (
                            <Link to={this.props.path}>Allar Fréttar</Link>
                        )}
                    </div>
                )}
            </div>
        );
    }
}

export default NewsCategory;