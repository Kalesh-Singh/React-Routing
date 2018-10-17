import React, {Component} from 'react';
import axios from "axios";

import classes from "./Posts.module.css";
import Post from "../../../components/Post/Post";


class Posts extends Component {

    state = {
        posts: [],
        selectedPostId: null
    };

    componentDidMount() {
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

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    };

    render() {

        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post =>
                (<Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)}
                />));
        }

        return (
            <section className={classes.Posts}>
                {posts}
            </section>
        );
    }
}

export default Posts;