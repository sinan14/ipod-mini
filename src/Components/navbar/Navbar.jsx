import React from 'react';
import BatImg from 'src/assets/battery.png';
import styles from './navbar.module.css';
export default class Navbar extends React.Component {
  constructor() {
    super();

    this.state = {
      time: this.getCurrentTime(),
    };
    this.stateId = '';
  }

  // if there is no notification then iPod logo, time and battery icon
  // If there is a notification show it for 1 second and clear it
  componentDidMount() {
    const { noty } = this.props;
    if (noty === true) {
      return;
    }
    // set an interval of 60 seconds to update time
    this.stateId = setInterval(() => {
      this.setState({ time: this.getCurrentTime() });
    }, 1000);
  }

  componentDidUpdate() {
    const { setNoty, noty } = this.props;
    if (noty === true) {
      setTimeout(function () {
        setNoty();
      }, 1000);
    }
  }

  // Clear the update time interval
  componentWillUnmount() {
    const { noty } = this.props;
    if (noty !== true) {
      clearInterval(this.stateId);
    }
  }

  // Time Function - 24 hrs
  getCurrentTime() {
    const Today = new Date();
    var time = Today.getHours() + ':' + Today.getMinutes();

    // if minutes is < 10, then showing 0 with minutes (:02)
    if (Today.getMinutes() < 10) {
      time = Today.getHours() + ':0' + Today.getMinutes();
    }
    return time;
  }

  render() {
    const { time } = this.state;
    const { noty, notifyText } = this.props;

    return (
      <div className={styles['bar']}>
        <h5 className={styles['heading']}>iPod</h5>
        {noty === true && (
          <h5 className={styles['notification']}>{notifyText}</h5>
        )}
        {noty === false && <h3 className={styles['time']}>{time}</h3>}
        <div className={styles['right-container-nav']}>
          <img className={styles['battery']} src={BatImg} alt='battery' />
        </div>
      </div>
    );
  }
}
