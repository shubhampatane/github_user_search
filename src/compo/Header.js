import React from 'react';

const Header = () => {
    const st = {
            color: "#343434",
            fontWeight: 'normal',
            fontFamily: 'Ultra',
            fontSize: '36px',
            textTransform: 'uppercase',
            textShadow: '0 2px white, 0 3px #777',
            textAlign: "center",
    }
    return(
        <div style = {st}>
            Github User Search
        </div>
    )
}

export default Header