import React from 'react';
import styles from './lockscreen.module.css';

export default class Lockscreen extends React.Component {
  render() {
    return (
      <div>
        <div className={styles['lock-display']}>
          <i className='fa fa-lock' aria-hidden='true'></i>
        </div>
        <div className={styles['bottom-div-lock']}>
          <h3>Press Centre Button to unlock!</h3>
        </div>
      </div>
    );
  }
}
