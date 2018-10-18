import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

import classes from './NewPost.module.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Kalesh',
        submitted: false
    };

    componentDidMount() {
        // If unauth => this.props.history.replace('/posts');
        console.log(this.props);
    }

    postDataHandler = () => {
        const post = {
            title: this.state.title,
            body: this.state.body,
            author: this.state.author
        };

        axios.post('/posts', post)
            .then(response => {
                console.log(response);
                this.setState({submitted: true});
                // this.props.history.push('/posts');       // Adds a new page to the stack
                // this.props.history.replace('/posts');    // Replaces the current page

            });
    };

    render () {
        let redirect = null;
        if (this.state.submitted) {
            redirect = <Redirect to='/posts'/>;
        }

        return (
            <div className={classes.NewPost}>
                {redirect}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Kalesh">Kalesh</option>
                    <option value="Anthony">Anthony</option>
                </select>
                <button onClick={this.postDataHandler}> Add Post</button>
            </div>
        );
    }
}

export default NewPost;