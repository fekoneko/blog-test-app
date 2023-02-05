import './styles/Footer.css';

const Footer = () => {
  const today = new Date();
  return (
    <footer className= "Footer">
      fekoneko, { today.getFullYear() }
    </footer>
  );
}

export default Footer;