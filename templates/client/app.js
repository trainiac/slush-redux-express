import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './stores/configureStore'
import Root from './containers/Root'
import AppContainer from './containers/AppContainer'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
  <AppContainer>
    <Root
      store={store}
      history={history}
    />
  </AppContainer>,
  document.getElementById('root')
)

if (module.hot) {

  module.hot.accept('./containers/Root', () => {

    const RootContainer = require('./containers/Root').default // eslint-disable-line global-require

    render(
      <AppContainer>
        <RootContainer
          store={store}
          history={history}
        />
      </AppContainer>,
      document.getElementById('root')
    )

  })

}
