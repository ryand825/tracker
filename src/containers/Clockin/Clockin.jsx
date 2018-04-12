import React, { Component } from 'react';
import ClockCounter from '../../components/ClockCounter/ClockCounter';

class Clockin extends Component {
  state = {
    startTime: new Date(),
    duration: new Date(null),
    test: 1,
    timerActive: true
  }

  componentDidMount() {
    this.runTimer();
  }

  componentDidUpdate() {
    this.state.timerActive ? this.runTimer() : null;
  }

  runTimer = () => {
    let tempDuration = new Date(this.state.duration);
    tempDuration.setSeconds(tempDuration.getSeconds() + 1)
    setTimeout(() => this.setState({
      duration: tempDuration
    }), 1000);
  }

  render() {
    return (
      <div>
        <ClockCounter
          duration={this.state.duration.toISOString()}
          running={this.state.timerActive} />
      </div>
    )
  }
}

export default Clockin
