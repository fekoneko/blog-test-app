import { createContext, ReactNode, useEffect, useMemo } from 'react';
import { useSettings } from '../hooks/useSettings';
import { LangDataInterface, langMap } from '../languages/langMap';
import { Languages, SettingsInterface } from '../scripts/interfaces';

type GlobalContextProps = {
  settings: SettingsInterface;
  setSettings: React.Dispatch<React.SetStateAction<SettingsInterface>>;
  langData: LangDataInterface;
};

type GlobalProviderProps = {
  children: ReactNode;
};

export const GlobalContext = createContext<GlobalContextProps>({} as GlobalContextProps);

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [settings, setSettings] = useSettings();
  const langData = useMemo<LangDataInterface>(
    () => langMap.get(settings.language) || langMap.get(Languages.eng) || ({} as LangDataInterface),
    [settings]
  );

  return (
    <GlobalContext.Provider value={{ settings, setSettings, langData }}>
      {children}
    </GlobalContext.Provider>
  );
};
