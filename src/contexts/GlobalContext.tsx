import { createContext, ReactNode, useMemo, useState } from 'react';
import { Location, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useSettings } from '../hooks/useSettings';
import { LangDataInterface, langMap } from '../languages/langMap';
import { BASE_URL } from '../scripts/constants';
import { Languages, SettingsInterface } from '../scripts/interfaces';

type Auth = {
  username: string;
  password: string;
  roles: Array<number>;
  accessToken: string;
};

type GlobalContextProps = {
  location: Location;
  navigate: (to: string) => void;
  searchParams: ReturnType<typeof useSearchParams>[0];
  setSearchParams: ReturnType<typeof useSearchParams>[1];
  settings: SettingsInterface;
  setSettings: React.Dispatch<React.SetStateAction<SettingsInterface>>;
  langData: LangDataInterface;
  auth: Auth | null;
  setAuth: React.Dispatch<React.SetStateAction<Auth | null>>;
};

type GlobalProviderProps = {
  children: ReactNode;
};

export const GlobalContext = createContext<GlobalContextProps>({} as GlobalContextProps);

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const location = useLocation();
  const globalNavigate = useNavigate();
  const navigate = (to: string): void => globalNavigate(`${BASE_URL}${to}`);
  const [searchParams, setSearchParams] = useSearchParams();
  const [settings, setSettings] = useSettings();
  const langData = useMemo<LangDataInterface>(
    () => langMap.get(settings.language) || langMap.get(Languages.eng) || ({} as LangDataInterface),
    [settings]
  );
  const [auth, setAuth] = useState<Auth | null>(null);

  return (
    <GlobalContext.Provider
      value={{
        location,
        navigate,
        searchParams,
        setSearchParams,
        settings,
        setSettings,
        langData,
        auth: auth,
        setAuth: setAuth,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
