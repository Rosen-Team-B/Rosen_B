import React from "react";
import { Link } from "react-router-dom";
import GeneralButton from "../shared/button/Button";
import { RoutePaths } from "../../constants/routes";

function Home() {
  return (
    <>
      <Link to={RoutePaths.Stepper}>
        <GeneralButton
          background="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
          color="white"
          onClick={() => console.log("You clicked on the button")}
          children="Stepper"
          padding="0 30px"
          height="40px"
        />
      </Link>
    </>
  );
}

export default Home;
