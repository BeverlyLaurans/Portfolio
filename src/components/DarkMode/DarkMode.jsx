import { useState, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import lightToDarkModeIcon from "../../assets/icons/interactions/light-to-dark-mode.svg";
import lightPinkToDarkModeIcon from "../../assets/icons/interactions/lightpink-dark-to-light-mode.svg";
import lightBlueToDarkModeIcon from "../../assets/icons/interactions/lightblue-light-to-dark-mode.svg";
import darkToLightModeIcon from "../../assets/icons/interactions/dark-to-light-mode.svg";
import "../../styles/scss/components/DarkMode.scss";

const DarkMode = () => {
  const [onMouseLogo, setOnMouseLogo] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="dark-mode" onClick={toggleTheme}>
      <img
        src={onMouseLogo ? (theme === 'light' ? lightBlueToDarkModeIcon : lightPinkToDarkModeIcon) : (theme === 'light' ? lightToDarkModeIcon : darkToLightModeIcon)}
        alt={theme === 'light' ? 'Mode nuit' : 'Mode jour'}
        onMouseEnter={() => setOnMouseLogo(true)}
        onMouseLeave={() => setOnMouseLogo(false)}
      />
    </div>
  );

};

export default DarkMode;