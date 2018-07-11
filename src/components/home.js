import React, { Component } from 'react';

import header from './header';

class Home extends Component {
  render() {
    return (
      <div className="home">
        { Header('Bottega Madlibs') }
        { Header('User Profile Settings') }
      </div>
    );
  }
}

export default Home;
