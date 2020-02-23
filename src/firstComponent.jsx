import React from 'react';

// // import Second from './secondComponent';

// const ThemeContext = React.createContext('#fff');

// class First extends Component {
//     render() {
//         return(
//             <div style={styles.firstPlace}>
//                 <ThemeContext.Provider value='#000'>
//                     <Second />
//                 </ThemeContext.Provider>
//             </div>
//         )
//     }
// }

// function Second(props) {
//     return(
//         <div style={styles.secondPlace}>
//             <Thired />
//         </div>
//     )
// }

// class Thired extends Component {
//     static contextType = ThemeContext;

//     render() {
//         console.log(this.contextType);
        
//         return(
//             <div style={styles.thiredPlace}>
//                 <button style={Object.assign({}, styles.btn, { backgroundColor: this.contextType })}>button from thired component</button>
//             </div>
//         )
//     }
// }

// const styles = {
//     firstPlace: {
//         width: '100%',
//         height: '100vh',
//         paddingTop: '20px',
//         backgroundColor: 'orange',
//         boxSizing: 'border-box'
//     },
//     secondPlace: {
//         width: '50%',
//         height: 'calc(100vh - 40px)',
//         paddingTop: '20px',
//         float: 'right',
//         backgroundColor: 'blue',
//         boxSizing: 'border-box'
//     },
//     thiredPlace: {
//         width: '50%',
//         height: 'calc(100vh - 80px)',
//         float: 'right',
//         backgroundColor: 'yellow'
//     },
//     btn: {
//         height: '40px',
//         color: '#fff',
//         fontSize: '24px',
//         padding: '10px 20px',
//         borderRadius: '40px',
//         cursor: 'pointer'
//     }
// }

// export default First;


const DealerContext = React.createContext();

class DealerProvider extends React.Component {
  state = {
    name: 'New Dealer',
    dealerId: 1234,
    groupId: 1,
    editing: false
  }
  render() {
    return (
      <DealerContext.Provider value={{ 
        state: this.state,
        updateDealerName: (value) => {
          this.setState({ name: value.target.value });
        },
        toggleEditing: () => {
          if (this.state.editing) {
            this.setState({editing: false})
          } else {
            this.setState({editing: true})
          }
        }
      }}>
        {this.props.children}
      </DealerContext.Provider>
    )
  }
}

class DealerProfile extends React.Component {
  render() {
    return (
      <div className="dealer-profile">
        <DealerContext.Consumer>
          {(context) => {
            let btnText = "edit";
            if (context.state.editing) {
              btnText = 'save';
            }
            return (
            <React.Fragment>
              <p>
                Name: {context.state.name}
                <button onClick={context.toggleEditing}>{btnText}</button>
              </p>
              <p>Dealer ID: {context.state.dealerId}</p>
            </React.Fragment>
          )}}
        </DealerContext.Consumer>
      </div>
    )
  }
}

class DealerActions extends React.Component {
  render() {
    return (
      <DealerContext.Consumer>
        {(context) => (
          <React.Fragment>
            {context.state.editing
              ? <input 
              type="text" 
              defaultValue={context.state.name} 
              onChange={context.updateDealerName.bind(this)} />
              : null
            }
          </React.Fragment>
        )}
      </DealerContext.Consumer>
    )
  }
}

const DealerCard = () => {
  return (
    <div className="dealer-page">
      <DealerProfile />
      <DealerActions />
    </div>
  )
}

class DealerApp extends React.Component {
  render() {
    return (
      <DealerProvider>
        <h1>Dealer Card</h1>
        <DealerCard />
        <p><em>Using React Context API with React 16.4</em></p>
      </DealerProvider>
    );
  }
}

export default DealerApp;
