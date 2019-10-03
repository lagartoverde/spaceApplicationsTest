import React, { Component } from 'react'


import {ReactComponent as ExpandIcon} from 'images/icons/Chevron.svg'
import {ReactComponent as DownloadIcon} from 'images/icons/download_arrow.svg'

import {Link} from '../link'

import ExpandableStyles from './style.module.css';

export class Expandable extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      open: false
    };
    this.toggleOpen = this.toggleOpen.bind( this );
  }
  render() {
    let contentStyle = ExpandableStyles.content;
    let containerStyle = ExpandableStyles.container
    if ( this.state.open ) {
      contentStyle += ' ' + ExpandableStyles.opened;
      containerStyle += ' ' + ExpandableStyles.containerOpened
    }
    return (
      <div className={containerStyle}>
        <div className={ExpandableStyles.header}>
          <h6 className={ExpandableStyles.title}>{this.props.title}</h6>
          <button className={ExpandableStyles.arrow} onClick={this.toggleOpen}>
            <ExpandIcon
              className="fill-current"
              style={{
              transform: this.state.open ? 'rotate(180deg)' : '', 
              height: 16, 
              width: 16, 
              color: this.state.open ? '#577636' : undefined
            }}
            />
          </button>
        </div>
        <div className={contentStyle}>
          <div dangerouslySetInnerHTML={{__html: this.props.content}}/>
          <Link to={this.props.button.url} target={this.props.button.target} className={ExpandableStyles.button}>
            {this.props.button.title} <DownloadIcon className={ExpandableStyles.downloadIcon}/>
          </Link>
        </div>
      </div>
    )
  }
  toggleOpen() {
    this.setState( ( prevState ) => ({open: ! prevState.open}) );
  }
}


export default Expandable;
