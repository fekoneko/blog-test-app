import { createContext, ReactNode, useMemo, useState } from 'react';
import {
  Location,
  NavigateFunction,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { useSettings } from '../hooks/useSettings';
import { LangDataInterface, langMap } from '../languages/langMap';
import { Languages, SettingsInterface } from '../scripts/interfaces';

type GlobalContextProps = {
  location: Location;
  navigate: NavigateFunction;
  searchParams: ReturnType<typeof useSearchParams>[0];
  setSearchParams: ReturnType<typeof useSearchParams>[1];
  settings: SettingsInterface;
  setSettings: React.Dispatch<React.SetStateAction<SettingsInterface>>;
  langData: LangDataInterface;
  userId: number | null;
  setUserId: React.Dispatch<React.SetStateAction<number | null>>;
};

type GlobalProviderProps = {
  children: ReactNode;
};

export const GlobalContext = createContext<GlobalContextProps>({} as GlobalContextProps);

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [settings, setSettings] = useSettings();
  const langData = useMemo<LangDataInterface>(
    () => langMap.get(settings.language) || langMap.get(Languages.eng) || ({} as LangDataInterface),
    [settings]
  );
  const [userId, setUserId] = useState<number | null>(null);

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
        userId,
        setUserId,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
