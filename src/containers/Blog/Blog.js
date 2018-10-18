import React, {Component} from 'react';
import {Route, NavLink, Switch, withRouter} from 'react-router-dom';

import classes from './Blog.module.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {

    render() {
        console.log('MATCH', this.props.match.url);
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
                                    pathname: this.props.match.url + 'new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                }}>New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Route path='/posts' component={Posts} exact/>
                <Switch>
                    <Route path={this.props.match.url + 'new-post'} component={NewPost}/>
                    <Route path='/posts/:id' component={FullPost} exact/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(Blog);