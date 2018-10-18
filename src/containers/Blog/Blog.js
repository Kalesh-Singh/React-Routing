import React, {Component} from 'react';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';

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
                            <li><NavLink
                                activeClassName={classes.active}
                                to='/posts'>Posts</NavLink>
                            </li>
                            <li><NavLink
                                activeClassName={classes.active}
                                to={{
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                }}>New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>

                <Switch>
                    <Route path='/posts' component={Posts}/>
                    <Route path='/new-post' component={NewPost} exact/>
                    <Redirect from='/' to='/posts'/>
                </Switch>
            </div>
        );
    }
}

export default Blog;