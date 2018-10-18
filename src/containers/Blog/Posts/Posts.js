import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import axios from "axios";

import classes from "./Posts.module.css";
import Post from "../../../components/Post/Post";
import FullPost from "../FullPost/FullPost";


class Posts extends Component {

    state = {
        posts: []
    };

    componentDidMount() {
        console.log(this.props);
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => (
                    {...post, author: 'Kalesh'}
                ));
                this.setState({posts: updatedPosts});
            })
            .catch(error => {
                console.log(error.message);
                //this.setState({error: true});
            });
    }

    render() {

        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post =>
                <Link to={this.props.match.url + '/'  + post.id}
                      key={post.id} exact>
                    <Post
                        title={post.title}
                        author={post.author}
                    />
                </Link>
            );
        }

        return (
            <div>
                <section className={classes.Posts}>
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} component={FullPost} exact/>
            </div>
        );
    }
}

export default Posts;