import React from 'react';
import Dino from './Home/dino';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eyeRotation: 0
    }
    this.dino = React.createRef();
  }
  handlerEye(e) {
    const eye = this.dino.current.dinoEye.current;
    const x = eye.offsetLeft + (eye.offsetWidth / 2);
    const y = eye.offsetTop + (eye.offsetHeight / 2);
    const rad = Math.atan2(e.pageX - x, e.pageY - y);
    const rot = (rad * (180 / Math.PI) * -1) + 180;
    
    this.setState({
      eyeRotation: rot
    })
  }
  render() {
    return (
      <section className="header" onMouseMove={(e) => this.handlerEye(e)}>
        <Dino ref={this.dino} eyeRotation={this.state.eyeRotation}/>
        <div className="header__text">
            <h1>Rex - Stat, perfect way to anylize social networks</h1>
            <hr/>
            <h3>Discover vital insights within the billions of conversations happening online every day. Be the first to act on the next
            big opportunity in your market.</h3>
            <div className="button">
                <a href="/" className="btn module" >Get Started</a>
            </div>
        </div>
      </section>
    )
  }
  
}

export default Home;