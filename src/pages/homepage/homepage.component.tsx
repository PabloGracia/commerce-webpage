import React from "react";

import "./homepage.styles.scss";

import { Directory } from "../../components/directory/directory.component";

const HomePage: React.FC = () => (
  <div className="homepage">
    <Directory />
  </div>
);

export default HomePage;
