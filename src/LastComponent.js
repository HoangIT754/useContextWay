import { useContext } from 'react';
import { BackgroundContext } from "./App";

const LastComponent = () => {
  // get value form Context
  const background = useContext(BackgroundContext);

  return (
    <div>
      <p className={background}> This is the last component</p>
    </div>
  );
};

export default LastComponent;
