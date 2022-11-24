import React from "react";
import { Link } from "react-router-dom";
import SimpleButton from "../shared/button/submitButton";
import { RoutePaths } from "../../constants/routes";

function Home() {
  return (
    <>
      <Link to={RoutePaths.Stepper}>
        <SimpleButton />
      </Link>
    </>
  );
}

export default Home;
