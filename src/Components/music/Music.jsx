import React from 'react';
import styles from './music.module.css';

export default class Music extends React.Component {
  render() {
    const { musicItems, active } = this.props;

    return (
      <div className={styles['music']}>
        <h3>Music</h3>

        <ul>
          {musicItems.map((element, index) => {
            return active === index ? (
              <li key={index} className={styles['active']}>
                &nbsp; {element}
              </li>
            ) : (
              <li key={index}>&nbsp; {element}</li>
            );
          })}
        </ul>
      </div>
    );
  }
}
