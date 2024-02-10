import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const DarkMode = () => {
    const [isDarkMode, setDarkMode] = React.useState(false);

    const toggleDarkMode = (prev) => {
        setDarkMode(prev=>!prev);
    };

    return (
        <DarkModeSwitch
            style={{ marginBottom: '2rem',
            width:"30px"
         }}
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={30}
         />
    );
};

export default DarkMode;