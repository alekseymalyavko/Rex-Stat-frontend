import React from 'react';
import { setTimeout } from 'timers';

class notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
      text: props.text
    };
  }

  componentDidMount() {
    setTimeout(() =>this.setState({ isOpen: false}), 1700)
  }

  render() {
    if (!this.state.isOpen) {
      return null
    }
    const text = this.state.text || 'Data saved'
    return (
      <div className="notification_wrapper">
        <div className="notification_body">
          <p>{text}</p>
        </div>
      </div>
    )
  }
}

export default notification;