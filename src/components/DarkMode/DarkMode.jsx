import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import lightToDarkModeIcon from "../../assets/icons/interactions/light-to-dark-mode.svg";
import darkToLightModeIcon from "../../assets/icons/interactions/dark-to-light-mode.svg";
import "../../styles/scss/components/DarkMode.scss";

const DarkMode = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="dark-mode" onClick={toggleTheme}>
      <img
        src={theme === 'light' ? lightToDarkModeIcon : darkToLightModeIcon}
        alt={theme === 'light' ? 'Mode nuit' : 'Mode jour'}
      />
    </div>
  );

};

export default DarkMode;