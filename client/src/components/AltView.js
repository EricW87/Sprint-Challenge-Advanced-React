import React, {useState } from 'react';

const useAltView = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const handleChanges = updatedValue => {
        console.log("handleChanges", value);
        setValue(!value);
    };

    return [value, handleChanges];
  };

  export default useAltView;
