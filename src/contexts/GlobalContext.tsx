import { createContext, ReactNode, useMemo, useState } from 'react';
import { useSettings } from '../hooks/useSettings';
import { LangDataInterface, langMap } from '../languages/langMap';
import { Languages, SettingsInterface } from '../scripts/interfaces';

type Auth = {
  username: string;
  password: string;
  roles: Array<number>;
  accessToken: string;
};

type GlobalContextValue = {
  settings: SettingsInterface;
  setSettings: React.Dispatch<React.SetStateAction<SettingsInterface>>;
  langData: LangDataInterface;
  auth: Auth | null;
  setAuth: React.Dispatch<React.SetStateAction<Auth | null>>;
};

type GlobalProviderProps = {
  children: ReactNode;
};

export const GlobalContext = createContext<GlobalContextValue>({} as GlobalContextValue);

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [settings, setSettings] = useSettings();
  const langData = useMemo<LangDataInterface>(
    () => langMap.get(settings.language) || langMap.get(Languages.eng) || ({} as LangDataInterface),
    [settings]
  );
  const [auth, setAuth] = useState<Auth | null>(null);

  return (
    <GlobalContext.Provider
      value={{
        settings,
        setSettings,
        langData,
        auth,
        setAuth,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
