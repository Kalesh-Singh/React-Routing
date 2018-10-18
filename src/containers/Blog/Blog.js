import React, {Component} from 'react';
import { Route } from 'react-router-dom';

import classes from './Blog.module.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {

    render() {
        return (
            <div className={classes.Blog}>
                <header>
                    <nav>
                        <ul>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/new-post'>New Post</a></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path='/' render={() => <h1>Home</h1>} exact/>
                <Route path='/' render={() => <h1>Home 2</h1>}/>*/}
                <Route path='/' component={Posts} exact />
                <Route path='/new-post' component={NewPost} exact />
            </div>
        );
    }
}

export default Blog;