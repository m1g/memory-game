import React, { Component } from 'react'
import characters from '../characters.json'
import styles from '../BoxItem.scss'

class BoxItem extends Component {

  constructor () {
    super()
    this.state = {
      isUp: false
    }
  }

  handleClick () {
    this.setState({
      isUp: !this.state.isUp
    })
  }
  render () {
    const upClass = this.state.isUp ? styles.up : styles.down
    return <td
      onClick={() => this.onClick()} // Inserts the click function
      className={[styles.root, styles.down].join(' ')}>
      <img src={this.props.image} />
    </td>
  }
}

export default BoxItem
