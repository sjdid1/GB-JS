import { Link } from 'react-router-dom';



const HomePage = () => {
  return (
    <div>
      <h1>Home page</h1>
      <p>Home page with product of company</p>
      <Link to="/two">About Us</Link>
      <div>
      <Link to="/">Main page</Link>
      </div>
    </div>
  );
};

export default HomePage;