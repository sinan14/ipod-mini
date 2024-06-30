import React from 'react';
import music from 'src/assets/music.jpg';
import game from 'src/assets/game.jpg';
import settings from 'src/assets/settings.png';
import styles from './menu.module.css';

export default class Menu extends React.Component {
  render() {
    const { active, menuItems, songImgUrl } = this.props;

    return (
      <div className={styles['menu-container']}>
        <div className={styles['menu']}>
          <ul>
            {menuItems.map((element, index) => {
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

        <div className={styles['leaf']}>
          {active === 0 && (
            <img
              src={songImgUrl}
              alt='Song Image'
              className={styles['leaf-img']}
            />
          )}
          {active === 1 && (
            <img src={music} alt='Music Image' className={styles['leaf-img']} />
          )}
          {active === 2 && (
            <img src={game} alt='Game Image' className={styles['leaf-img']} />
          )}
          {active === 3 && (
            <img
              src={settings}
              alt='Setting Image'
              className={styles['leaf-img']}
            />
          )}
        </div>
      </div>
    );
  }
}
