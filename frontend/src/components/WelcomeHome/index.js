import React from "react"
import { useSelector } from "react-redux";


function Welcome() {
  const sessionUser = useSelector(state => state.session.user)
  return (
    <>
      <h2 className="h2-with-the-name" > Welcome back, {sessionUser?.username}! </h2>
    </>
  );

}

export default Welcome;
