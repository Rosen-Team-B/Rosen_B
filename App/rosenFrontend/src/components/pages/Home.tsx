import React from "react";
import { Link } from "react-router-dom";
import GeneralButton from "../shared/button/submitButton";
import { RoutePaths } from "../../constants/routes";

function Home() {
  return (
    <>
      <Link to={RoutePaths.Stepper}>
        <GeneralButton
          color="pink"
          onClick={() => console.log("You clicked on the button")}
          children="Stepper"
        />
      </Link>
    </>
  );
}

export default Home;
