import React, { Component } from 'react'
import BoxItem from './BoxItem'
import styles from './App.scss'

import images from '../characters.json'

class App extends Component {

  constructor () {
    super()
    this.state = {
      matched: [],
      picks: [],
      won: false
    }
  }

  // choose(card) function:
  //   If the number of picks is 2:
  //     Do nothing (stop the player from choosing 3 cards).
  //   Store card index in picks.
  //   If the number of picks is now 2:
  //     check()
  choose (card) {
    if (this.state.picks.length === 2 || this.state.matched.includes(card)) { return } // DO NOTHING, BAIL OUT
    this.setState({
      picks: [...this.state.picks, card]
    }, () => {
      // Call back function that happens after
      // React is done updating the state.
      if (this.state.picks.length === 2) {
        this.check()
      }
    })
  }

  // check() function:
  //   If picks[0] is equal to picks[1]:
  //     Add the cards to matches.
  //     If all matches found:
  //       Game over.
  //   Reset picks to [] after a short delay.
  check () {
    const picks = this.state.picks
    if (images[picks[0]].name === images[picks[1]].name) {
      this.setState({
        matched: [...this.state.matched, ...picks],
        picks: []
      }, () => {
        // Call back function that happens after
        // React is done updating the state.
        if (this.state.matched.length === images.length) {
          // Show modal
          this.setState({
            won: true
          })
        }
      })
    }
    setTimeout(() => {
      this.setState({ picks: [] })
    }, 3000)
  }

  // For each card in faces:
  // If picks inclues card:
  //   Show card face.
  // Else:
  //   Show card back.
  render () {
    const picks = this.state.picks
    const matched = this.state.matched
    return <div>
      <header>
        <h1>{this.state.won ? 'YOU WIN' : ' '}</h1>
      </header>
      <section>
        <table>
          <tbody>
            <tr>
              <BoxItem card={images[0]} isUp={picks.includes(0) || matched.includes(0)} handleClick={() => this.choose(0)} />
              <BoxItem card={images[1]} isUp={picks.includes(1) || matched.includes(1)} handleClick={() => this.choose(1)} />
              <BoxItem card={images[2]} isUp={picks.includes(2) || matched.includes(2)} handleClick={() => this.choose(2)} />
              <BoxItem card={images[3]} isUp={picks.includes(3) || matched.includes(3)} handleClick={() => this.choose(3)} />
            </tr>
            <tr>
              <BoxItem card={images[4]} isUp={picks.includes(4) || matched.includes(4)} handleClick={() => this.choose(4)} />
              <BoxItem card={images[5]} isUp={picks.includes(5) || matched.includes(5)} handleClick={() => this.choose(5)} />
              <BoxItem card={images[6]} isUp={picks.includes(6) || matched.includes(6)} handleClick={() => this.choose(6)} />
              <BoxItem card={images[7]} isUp={picks.includes(7) || matched.includes(7)} handleClick={() => this.choose(7)} />
            </tr>
            <tr>
              <BoxItem card={images[8]} isUp={picks.includes(8) || matched.includes(8)} handleClick={() => this.choose(8)} />
              <BoxItem card={images[9]} isUp={picks.includes(9) || matched.includes(9)} handleClick={() => this.choose(9)} />
              <BoxItem card={images[10]} isUp={picks.includes(10) || matched.includes(10)} handleClick={() => this.choose(10)} />
              <BoxItem card={images[11]} isUp={picks.includes(11) || matched.includes(11)} handleClick={() => this.choose(11)} />
            </tr>
            <tr>
              <BoxItem card={images[12]} isUp={picks.includes(12) || matched.includes(12)} handleClick={() => this.choose(12)} />
              <BoxItem card={images[13]} isUp={picks.includes(13) || matched.includes(13)} handleClick={() => this.choose(13)} />
              <BoxItem card={images[14]} isUp={picks.includes(14) || matched.includes(14)} handleClick={() => this.choose(14)} />
              <BoxItem card={images[15]} isUp={picks.includes(15) || matched.includes(15)} handleClick={() => this.choose(15)} />
            </tr>
          </tbody>

          {/* <tr>
            <td className='down'><img src='http://img03.deviantart.net/002f/i/2012/147/9/7/vanilla_belle__s_cutie_mark_by_exkira-d519625.png' alt='purple Seashell' width='200px' /></td>
            <td className='down'><img src='http://img03.deviantart.net/002f/i/2012/147/9/7/vanilla_belle__s_cutie_mark_by_exkira-d519625.png' alt='purple Seashell' width='200px' /></td>
            <td className='up'><img src='' alt='purple Seashell' width='200px' /></td>
            <td className='up'><img src='http://img03.deviantart.net/002f/i/2012/147/9/7/vanilla_belle__s_cutie_mark_by_exkira-d519625.png' alt='purple Seashell' width='200px' /></td>
          </tr>
          <tr>
            <td className='down'><img src='' alt='pink starfish' width='200px' /></td>
            <td className='down'><img src='https://s-media-cache-ak0.pinimg.com/originals/c9/56/73/c95673bb9e116447f43ff57e95a0a468.png' alt='pink starfish' width='200px' /></td>
            <td className='up'><img src='https://s-media-cache-ak0.pinimg.com/originals/c9/56/73/c95673bb9e116447f43ff57e95a0a468.png' alt='pink starfish' width='200px' /></td>
            <td className='up'><img src='https://s-media-cache-ak0.pinimg.com/originals/c9/56/73/c95673bb9e116447f43ff57e95a0a468.png' alt='pink starfish' width='200px' /></td>
          </tr>
          <tr>
            <td className='down'><img src='' alt='coral starfish' width='200px' /></td>
            <td className='down'><img src='http://www.clker.com/cliparts/q/e/k/7/q/C/coral-starfish-hi.png' alt='coral starfish' width='200px' /></td>
            <td className='up'><img src='http://www.clker.com/cliparts/q/e/k/7/q/C/coral-starfish-hi.png' alt='coral starfish' width='200px' /></td>
            <td className='up'><img src='http://www.clker.com/cliparts/q/e/k/7/q/C/coral-starfish-hi.png' alt='coral starfish' width='200px' /></td>
          </tr> */}
        </table>
      </section>
    </div>
  }
}

export default App
