import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import './NewsCategory.scss';

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
                    <div class='news_container-id'>
                        <p>{this.state.news.title}</p>
                        {console.log(this.state.news.items)}
                        {this.state.news.items.map((data, i) => { 
                            return (
                                <div>
                                    {i <= this.props.amount ? (<a href={data.link}>{data.title}</a>) : (console.log('nothing'))}
                                </div>
                            )
                        })}
                        <Link to={this.props.path}>Allar Fréttar</Link>
                    </div>
                )}
            </div>
        );
    }
}

export default NewsCategory;