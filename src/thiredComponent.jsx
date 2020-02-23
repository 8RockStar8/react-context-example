import React, { Component } from 'react';

class Thired extends Component {
    static contextType = this.ThemeContext;

    render() {
        console.log(this.contextType);
        
        return(
            <div style={styles.thiredPlace}>
                <button style={Object.assign({}, styles.btn, {backgroundColor: this.contextType})}>button from thired component</button>
            </div>
        )
    }
}

const styles = {
    thiredPlace: {
        width: '50%',
        height: 'calc(100vh - 80px)',
        float: 'right',
        backgroundColor: 'yellow'
    },
    btn: {
        height: '40px',
        color: '#fff',
        fontSize: '24px',
        padding: '10px 20px',
        borderRadius: '40px',
        cursor: 'pointer'
    }
}

export default Thired;
