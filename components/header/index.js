import React from 'react';
import Image from '../image';
import Social from '../social';

class Header extends React.Component {
  render() {
    return (
      <header itemScope itemType="https://schema.org/WPHeader" className="container blog-metta">
        <div className="site-name">
          <b>voylinux</b>.com
        </div>
        <p className="site-description">
          ¿Y quién ha dicho que quiero ser normal?
        </p>
        <div className="header-author container">
          <a href="#">
            <Image src="https://secure.gravatar.com/avatar/14f3f802a2dce7abec7fa9b5440179c3?s=100&d=mm&r=g"
              class="circle" alt="Pablo Bernardo"/>
          </a>
        </div>
        <Social />
      </header>
    )
  }
}

export default Header;
