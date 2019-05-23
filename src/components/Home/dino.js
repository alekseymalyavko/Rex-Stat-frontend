import React from 'react';

class Dino extends React.Component {
  constructor(props) {
    super(props);
    this.dinoEye = React.createRef();
  }

  render() {    
    const styleEye = {
      transform: `rotate(${this.props.eyeRotation}deg)`,
    }
    return (
      <div className="header__photo">
          <img src={require('../../assets/images/rex-logo.png')} alt=""/>
          <div style={styleEye} className="eye" ref={this.dinoEye}></div>
      </div>
    )
  }
}
export default Dino;