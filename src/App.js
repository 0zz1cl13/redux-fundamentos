import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';

import SideBar from './components/SideBar';
import Video from './components/Video';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Video />
          <SideBar />
        </Provider>
      </div>
    );
  }
}

export default App;
