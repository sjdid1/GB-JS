import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>Information about company</p>
      <Link to="/one">Home page</Link>
      <div>
      <Link to="/">Main page</Link>
      </div>
    </div>
  );
};

export default AboutPage;