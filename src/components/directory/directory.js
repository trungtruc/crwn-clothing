import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item';
import './directory.scss';

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [
        {
          title: 'HATS',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: 'JACKETS',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'jackets'
        },
        {
          title: 'SNEAKERS',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'sneakers'
        },
        {
          title: 'WOMENS',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          id: 4,
          size: 'large',
          linkUrl: 'womens'
        },
        {
          title: 'MENS',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          id: 5,
          size: 'large',
          linkUrl: 'mens'
        }
      ]
    }
  }

  render() {
    return(
      <div className='directory-menu'>
        {
          this.state.sections.map(section => (
            <MenuItem key={section.id} title={section.title} imageUrl={section.imageUrl} size={section.size}/>
          ))
        }
      </div>
    );
  }
}

export default Directory;