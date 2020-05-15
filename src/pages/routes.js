import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import React, {Suspense, lazy, Fragment} from 'react';
import Loader from 'react-loaders'

import PageNotFound from '../commons/pageNotFound'
const LoginContainer = lazy(() => import('./Login/container'));
const ListingContainer = lazy(() => import('./Listing/container'));

const Routes = () => { 
  return (
    <Fragment>
      <Suspense fallback={
        <div className="loader-container">
          <div className="loader-container-inner">
            <div className="text-center">
              <Loader type="ball-pulse-rise"/>
            </div>
            <h6 className="mt-5">
                Please wait ...
            </h6>
          </div>  
        </div>
      }>
        <BrowserRouter>
          <Switch>
            {
                localStorage.getItem('token')
              ?
                <Route 
                    path={`/list`}
                    component={ListingContainer}
                    exact={true}
                />
              :
                <Route 
                  path={'/'}
                  component={LoginContainer}
                  exact={true}
                />
            }
            <Route component={PageNotFound} />

          </Switch>
          <Route exact path="/" render={() => (
            <Redirect to={localStorage.getItem('token')?'/list':'/'}/>
          )}/>
          </BrowserRouter>
      </Suspense>
    </Fragment>
  )
};

export default Routes;