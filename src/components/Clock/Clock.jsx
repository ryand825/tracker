import React, { Component } from 'react';
import AmPm from './AmPm/AmPm';
import './Clock.css';

const twelveHour = true;

class clock extends Component {
    state = {
        hours: 0,
        minutes: 0,
        seconds: 0,
        active: false,
        activeClass: '',
        isAm: true,
    }

    componentWillMount() {
        if (!this.props.dateObj) {
            this.setCurrentTime(new Date(), true);
            this.setState({ activeClass: 'active' })
        } else {
            this.setCurrentTime(this.props.dateObj);
        }
    }

    componentDidMount() {
        if (this.state.active) {
            const secondsLeft = 60 - new Date().getSeconds();
            setTimeout(() => this.setCurrentTime(new Date()), secondsLeft * 1000)
        }
    }

    componentWillUpdate() {
        if (this.state.active) {
            setTimeout(() => this.setCurrentTime(new Date()), 60000)
        }
    }

    setCurrentTime = (date, isActive = this.state.active) => {
        let hours = date.getHours();
        const minutes = date.getMinutes();
        let isAm = true;

        if (twelveHour && hours > 12) {
            hours -= 12;
            isAm = false;
        } else {
            isAm = true;
        }

        this.setState({
            hours: hours,
            minutes: minutes,
            active: isActive,
            isAm: isAm
        })
    }

    render() {
        return (
            <div className="clock">
                {this.state.hours > 9 ? this.state.hours : '0' + this.state.hours}
                <span className={this.state.activeClass}>:</span>
                {this.state.minutes > 9 ? this.state.minutes : '0' + this.state.minutes}
                {twelveHour ? <AmPm am={this.state.isAm} /> : null}
            </div>
        )
    }
}

export default clock
