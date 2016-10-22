import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import MainContainer from './containers/MainContainer';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

render(
  <AppContainer>
    <MainContainer />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./containers/MainContainer', () => {
    const NextApp = require('./containers/MainContainer').default;
    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
