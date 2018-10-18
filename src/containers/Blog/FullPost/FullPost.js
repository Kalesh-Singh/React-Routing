import React, {Component} from 'react';
import axios from 'axios';

import classes from './FullPost.module.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    };

    componentDidMount() {
        console.log('FullPost', this.props);
        this.loadData();

    }

    componentDidUpdate() {
        this.loadData();
    }

    loadData() {
        if (this.props.match.params.id) {
            if (!this.state.loadedPost
                || (this.state.loadedPost && this.state.loadedPost.id != this.props.match.params.id)) {

                // Notice that the check above is not type enforced i.e != and not !==
                // This is because this.state.loadedPost.id is a number
                // and this.props.match.params.id is a string

                axios.get('posts/' + this.props.match.params.id)
                    .then(response => {
                        this.setState({loadedPost: response.data});
                    })
            }

        }
    }

    deletePostHandler = () => {
        axios.delete('posts/' + this.props.match.params.id)
            .then(response => {
                console.log(response);
            })
    };

    render() {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if (this.props.match.params.id) {
            post = <p style={{textAlign: 'center'}}>Loading ... </p>
        }

        if (this.state.loadedPost) {
            post = (
                <div className={classes.FullPost}>
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}t</p>
                    <div className={classes.Edit}>
                        <button onClick={this.deletePostHandler} className={classes.Delete}>Delete</button>
                    </div>
                </div>

            );
        }

        return post;
    }

}

export default FullPost;