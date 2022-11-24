import React from "react";
import { Link } from "react-router-dom";
import GeneralButton from "../shared/button/submitButton";
import { RoutePaths } from "../../constants/routes";

function Home() {
  return (
    <>
      <Link to={RoutePaths.Stepper}>
        <GeneralButton
          border="none"
          color="pink"
          height="200px"
          onClick={() => console.log("You clicked on the pink circle!")}
          radius="50%"
          width="200px"
          children="I'm here"
        />
      </Link>
    </>
  );
}

export default Home;
