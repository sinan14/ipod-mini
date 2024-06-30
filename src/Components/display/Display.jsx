import React from 'react';
import Lockscreen from '../lock-screen/Lockscreen';
import Menu from '../menu/Menu';
import Music from '../music/Music';
import Navbar from '../navbar/Navbar';
import Themes from '../themes/Themes';
import Wallpaper from '../wallpaper/Wallpaper';
import WheelColor from '../wheel-color/WheelColor';
import styles from './display.module.css';

// On the basis of what the current menu is this item will render only that component
// Also this displays the navigation bar
// Key for displaying menu
// {-2: lock screen, -1 : main menu, 0 : now playing, 1: music menu, 2,5,6 : dummy menu, 3: setings menu,4:songs menu, 7:music playing, 8 :themes menu, 9:wheel color menu, 10:wallpaper menu}

export default class Display extends React.Component {
  render() {
    const {
      active,
      currentMenu,
      menuItems,
      musicItems,
      playing,
      songImgUrl,
      wallpaper,
      wallpaperItems,
      noty,
      setNoty,
      notifyText,
    } = this.props;
    let style = { backgroundImage: `url(${wallpaperItems[wallpaper]})` };
    if ([4, 5, 6].includes(currentMenu)) {
      style = { background: '#fff', textAlign: 'center' };
    }

    return (
      <div className={styles.display} style={style}>
        <Navbar
          noty={noty}
          setNoty={setNoty}
          playing={playing}
          notifyText={notifyText}
        />

        {currentMenu === -2 && <Lockscreen />}

        {currentMenu === -1 && (
          <Menu songImgUrl={songImgUrl} menuItems={menuItems} active={active} />
        )}

        {currentMenu === 1 && <Music musicItems={musicItems} active={active} />}

        {currentMenu === 2 && (
          <div
            style={{
              borderBottomLeftRadius: '5px',
              borderBottomRightRadius: '5px',
            }}
            className={styles['blank-div']}
          >
            <h1 className={styles['empty-text']}>Games</h1>
          </div>
        )}

        {currentMenu === 3 && (
          <div
            style={{
              borderBottomLeftRadius: '5px',
              borderBottomRightRadius: '5px',
            }}
            className={styles['blank-div']}
          >
            <h1 className={styles['empty-text']}>Settings</h1>
          </div>
        )}

        {currentMenu === 4 && (
          <div
            style={{
              borderBottomLeftRadius: '5px',
              borderBottomRightRadius: '5px',
            }}
            className='blank-div'
          >
            <h1 className='empty-text'>All songs</h1>
          </div>
        )}

        {currentMenu === 5 && (
          <div
            style={{
              borderBottomLeftRadius: '5px',
              borderBottomRightRadius: '5px',
            }}
            className='blank-div'
          >
            <h1 className='empty-text'>Artist</h1>
          </div>
        )}

        {currentMenu === 6 && (
          <div
            style={{
              borderBottomLeftRadius: '5px',
              borderBottomRightRadius: '5px',
            }}
            className='blank-div'
          >
            <h1 className='empty-text'>Albums</h1>
          </div>
        )}

        {(currentMenu === 0 || currentMenu === 7) && (
          <div
            style={{
              borderBottomLeftRadius: '5px',
              borderBottomRightRadius: '5px',
            }}
            className={styles['blank-div']}
          >
            <h1 className={styles['empty-text']}>Now playing</h1>
          </div>
        )}

        {currentMenu === 8 && <Themes active={active} />}

        {currentMenu === 9 && <WheelColor active={active} />}

        {currentMenu === 10 && <Wallpaper active={active} />}
      </div>
    );
  }
}
