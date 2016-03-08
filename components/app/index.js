import React from 'react';
import Navigation from '../navigation';
import Header from '../header';

class App extends React.Component {
  render() {
    return (
     <main>
        <Navigation />
        <Header />
      </main>
    )
  }
}

export default App;
