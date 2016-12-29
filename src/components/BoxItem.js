import React, { Component } from 'react'
import styles from './BoxItem.scss'

class BoxItem extends Component {

  // static propTypes = {
  //   isUp: React.PropTypes.boolean.isRequired,
  //   handleClick: React.PropTypes.function.isRequired,
  //   card: React.PropTypes.object.isRequired
  // }

  render () {
    const upClass = this.props.isUp ? styles.up : styles.down
    return <td
      onClick={() => this.props.handleClick()}
      className={[styles.root, upClass].join(' ')}>
      <img src={this.props.card.image} />
    </td>
  }
}

export default BoxItem
