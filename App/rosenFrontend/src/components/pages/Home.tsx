import React from "react";
import { Link } from "react-router-dom";
import GeneralButton from "../shared/button/submitButton";
import { RoutePaths } from "../../constants/routes";

function Home() {
  return (
    <>
      <Link to={RoutePaths.Stepper}>
        <GeneralButton>here</GeneralButton>
      </Link>
    </>
  );
}

export default Home;
