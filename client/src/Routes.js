import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './components/routing/PrivateRoute';

import Home from './layouts/Home';
import Login from './layouts/Login';
import Register from './layouts/Register';
import CreateBlog from './layouts/CreateBlog';
import BlogDisplay from './layouts/BlogDisplay';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        {' '}
        <Home />
      </Route>
      <Route path='/register' component={Register} />
      <Route path='/login' component={Login} />
      <Route
        path='/blog/:blogId'
        render={(props) => <BlogDisplay blogId={props.match.params.blogId} />}
      />

      <PrivateRoute path='/createblog' component={CreateBlog} />
    </Switch>
  );
};

export default Routes;
