import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
  useEffect(() => {
    console.log("button render");
  });
  return (
    <button className="btn btn-primary" onClick={onLogOut}>
      {" "}
      Log Out
    </button>
  );
};

LogOutButton.propTypes = {
  onClick: PropTypes.func,
};

function areEqual(prevState, nextState) {
  if (prevState.onLogOut !== nextState.onLogOut) {
    return false;
  }
  return true;
}

const MemoizedLogOutButton = React.memo(LogOutButton, areEqual);

const MemoWithUseCallbackExample = (props) => {
  const [state, setState] = useState(false);
  const handleLogOut = useCallback(() => {
    localStorage.removeItem("auth");
  }, [props]);

  return (
    <>
      <button className="btn btn-primary" onClick={() => setState(!state)}>
        initiate rerender
      </button>
      <MemoizedLogOutButton onLogOut={handleLogOut} />;
    </>
  );
};

export default MemoWithUseCallbackExample;
