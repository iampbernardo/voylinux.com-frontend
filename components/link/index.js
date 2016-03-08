import React from 'react';

class Link extends React.Component {
  render() {
    return (
      <a href={this.props.url}>{this.props.caption}</a>
    );
  }
}

export default Link;
