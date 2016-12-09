import React, { Component } from 'react'
import BoxItem from './BoxItem'
import characters from '../characters.json'
import styles from './App.scss'

class App extends Component {

  render () {
    return <div>
      <header>
        <h1>Match Game</h1>
      </header>
      <table>
        <tbody>
          <tr>
            <BoxItem image={characters[0]} />
            <BoxItem image={characters[1]} />
            <BoxItem image={characters[0]} />
            <BoxItem image={characters[1]} />
          </tr>
          <tr>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
          </tr>
          <tr>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
          </tr>
          <tr>
            <td>13</td>
            <td>14</td>
            <td>15</td>
            <td>16</td>
          </tr>
        </tbody>
      </table>
    </div>
  }
}

export default App
