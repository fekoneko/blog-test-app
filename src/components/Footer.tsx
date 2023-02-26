import { useContext } from 'react';
import { FaRegMoon, FaRegSun } from 'react-icons/fa';
import { GlobalContext } from '../contexts/GlobalContext';
import { Themes } from '../scripts/interfaces';

const Footer = () => {
  const { settings, setSettings, langData } = useContext(GlobalContext);

  const handleLanguageChange = () => {
    setSettings((prev) => ({ ...prev, language: (prev.language + 1) % 3 }));
  };

  const handleThemeChange = () => {
    setSettings((prev) => ({ ...prev, theme: (prev.theme + 1) % 2 }));
  };

  return (
    <footer className="Footer" role="contentinfo">
      <p>{langData.Footer_text}</p>
      <button title={langData.Footer_languageTooltip} onClick={handleLanguageChange}>
        Language: {langData.language}
      </button>
      <button title={langData.Footer_themeTooltip} onClick={handleThemeChange}>
        {settings.theme === Themes.light ? <FaRegSun /> : <FaRegMoon />}
      </button>
    </footer>
  );
};

export default Footer;
