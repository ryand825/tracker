import React, { Component } from 'react';
import ClockCounter from '../../components/ClockCounter/ClockCounter';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

class Clockin extends Component {
  state = {
    startTime: new Date(),
    duration: new Date(null),
    test: 1,
    timerActive: false
  }

  componentDidUpdate() {
    if (this.state.timerActive)
      this.runTimer();
  }

  runTimer = () => {
    let tempDuration = new Date(this.state.duration);
    tempDuration.setSeconds(tempDuration.getSeconds() + 1)
    setTimeout(() => this.setState({
      duration: tempDuration
    }), 1000);
  }

  handleToggleTimer = () => {
    this.setState((prevState) => ({
      timerActive: !this.state.timerActive
    }))
  }

  render() {
    return (
      <div>
        <Input />
        <ClockCounter
          duration={this.state.duration.toISOString()}
          running={this.state.timerActive} />
        <Button
          clicked={this.handleToggleTimer}
          warning={this.state.timerActive}>
          {this.state.timerActive ? "Stop" : "Start"}</Button>
      </div>
    )
  }
}

export default Clockin
