import React from 'react';
import Display from '../display/Display';
import Wheel from '../wheel/Wheel';
import styles from './case.module.css';

// This component is the wrapper for iPod it does nothing special just renders display and wheel component
export default class Case extends React.Component {
  render() {
    const {
      active,
      updateActiveMenu,
      currentMenu,
      changeMenuForward,
      changeMenuBackward,
      menuItems,
      musicItems,
      togglePlayPause,
      songItems,
      playing,
      songIndex,
      theme,
      audio,
      songUrl,
      songImgUrl,
      seekSongForward,
      seekSongReverse,
      wheelColor,
      wallpaper,
      wallpaperItems,
      noty,
      setNoty,
      notifyText,
    } = this.props;

    return (
      <div className='case-container'>
        <div style={{ backgroundColor: theme }} className={styles.case}>
          <Display
            songIndex={songIndex}
            playing={playing}
            active={active}
            musicItems={musicItems}
            menuItems={menuItems}
            currentMenu={currentMenu}
            songItems={songItems}
            audio={audio}
            songUrl={songUrl}
            songImgUrl={songImgUrl}
            wallpaper={wallpaper}
            wallpaperItems={wallpaperItems}
            noty={noty}
            setNoty={setNoty}
            notifyText={notifyText}
          />

          <Wheel
            wheelColor={wheelColor}
            theme={theme}
            active={active}
            menuItems={menuItems}
            currentMenu={currentMenu}
            changeMenuForward={changeMenuForward}
            changeMenuBackward={changeMenuBackward}
            updateActiveMenu={updateActiveMenu}
            togglePlayPause={togglePlayPause}
            seekSongForward={seekSongForward}
            seekSongReverse={seekSongReverse}
          />
        </div>
      </div>
    );
  }
}
