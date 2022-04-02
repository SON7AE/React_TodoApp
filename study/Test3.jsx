import React, { useEffect, useState } from 'react';

function Test3(props) {
  const [state, setState] = useState();
  const [state2, setState2] = useState();

  useEffect(() => {
    // didMount

    return () => {
      //
    };
  }, []);

  useEffect(() => {
    // didUpdate
  }, [state, state2]);

  return <div>응 난 컴포넌트</div>;
}

export default Test3;
