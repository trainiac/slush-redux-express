import React, { PropTypes } from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import Wrapper from './Wrapper'
import ObjectPage from './ObjectPage'
import ObjectsPage from './ObjectsPage'
import HomePage from './HomePage'

export default function Routes(props) {

  const { history } = props

  return (
    <Router history={history}>
      <Route path='/' component={Wrapper}>
        <IndexRoute component={HomePage}/>
        <Route path='objects/' component={ObjectsPage}/>
        <Route path='objects/:objectId/' component={ObjectPage}/>
      </Route>
    </Router>
  )

}

Routes.propTypes = {
  history: PropTypes.object
}
