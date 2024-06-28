import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {
    count: 0,
    text: 'Even',
  }

  OnIncrement = () => {
    const RandomNumber = Math.floor(
      Math.random() * 101,
    ) /* creating random nuber between 0 to 100 */

    this.setState(prevState => {
      const newCount = prevState.count + RandomNumber
      return {
        count: newCount,
        text: newCount % 2 === 0 ? 'Even' : 'Odd',
      }
    })
  }

  render() {
    const {count, text} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Count {count}</h1>
          <p className="description">Count is {text}</p>
          <button type="button" className="button" onClick={this.OnIncrement}>
            Increment
          </button>
          <p className="text">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
