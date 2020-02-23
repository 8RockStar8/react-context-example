import React from 'react';

import Thired from './thiredComponent';

function Second() {
    return(
        <div style={styles.secondPlace}>
            <Thired />
        </div>
    )
}

const styles = {
    secondPlace: {
        width: '50%',
        height: 'calc(100vh - 40px)',
        paddingTop: '20px',
        float: 'right',
        backgroundColor: 'blue',
        boxSizing: 'border-box'
    }
}

export default Second;
