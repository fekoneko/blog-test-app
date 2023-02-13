import './styles/About.css';

const About = () => {
  return (
    <main className="About" role="main">
      <figure className="profile">
        <img src="https://avatars3.githubusercontent.com/u/55813967" alt="" />
        <figcaption>@fekoneko <span style={{color: "#808080"}}>
          (<a href="https://github.com/fekoneko">GitHub</a>)</span></figcaption>
      </figure>
    </main>
  );
}

export default About;