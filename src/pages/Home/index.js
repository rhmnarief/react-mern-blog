import React from "react";
import { Button, BlogItem, Gap } from "../../components";
import "./home.scss";
import { useHistory } from 'react-router-dom';


const Home = () => {
  const history = useHistory()
  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button title="create blog" onClick={() => history.push('/create-blog')} />
      </div>
      <Gap width={20} />
      <div className="content-wrapper">
        <BlogItem />
      </div>
      <div className="pagination">
        <Button title="Previous" />
        <Gap width={20} />
        <p className="text-page">20</p>
        <Gap width={20} />
        <Button title="Next" />
      </div>
      <Gap width={20} />
    </div>
  );
};

export default Home;
