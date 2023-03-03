import { useRef, useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../contexts/GlobalContext';
import LogInModal from '../modals/LogInModal';
import Modal, { ModalActions } from '../modals/Modal';
import RegistrationModal from '../modals/RegistrationModal';
import SearchBar from './SearchBar';
import { FaUserCircle } from 'react-icons/fa';

type HeaderProps = {
  searchRequest: string;
  handleSearch: (request: string) => any;
};

const Header = ({ searchRequest, handleSearch }: HeaderProps) => {
  const { navigate, searchParams, setSearchParams, userId } = useContext(GlobalContext);
  const modalRef = useRef<ModalActions>(null);
  const [modalMode, setModalMode] = useState<'login' | 'register' | 'hidden'>('hidden');

  const modalModeFromQuery = () => {
    const queryModalMode = searchParams.get('m');
    switch (queryModalMode) {
      case 'l':
        setModalMode('login');
        modalRef.current?.show();
        break;
      case 'r':
        setModalMode('register');
        modalRef.current?.show();
        break;
      default:
        setModalMode('hidden');
        modalRef.current?.hide();
    }
  };

  useEffect(() => {
    if (userId === null) modalModeFromQuery();
  }, [searchParams]);

  const handleLogIn = (): void => {
    if (userId === null)
      setSearchParams((prev) => {
        prev.set('m', 'l');
        return prev;
      });
  };

  const handleProfile = (): void => {
    if (userId !== null) navigate('profile');
  };

  return (
    <header className="Header">
      <Link to="">
        <h1 role="banner">@fekoneko blog.</h1>
      </Link>
      <div>
        <SearchBar searchRequest={searchRequest} handleSearch={handleSearch} />
        {userId === null ? (
          <>
            <button className="userButton" onClick={handleLogIn}>
              <FaUserCircle />
            </button>
            <Modal
              ref={modalRef}
              onClose={() =>
                setSearchParams((prev) => {
                  prev.delete('m');
                  return prev;
                })
              }
            >
              {modalMode === 'register' ? (
                <RegistrationModal />
              ) : modalMode === 'login' ? (
                <LogInModal />
              ) : (
                ''
              )}
            </Modal>
          </>
        ) : (
          <button className="userButton" onClick={handleProfile}>
            <FaUserCircle />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
