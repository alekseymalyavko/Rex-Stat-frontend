import React from 'react';
import Form from './Main/form';
import Loading from './Main/loading';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      currentGroup: '',
    };
  }
  
  setCurrentGroup(data) {
    this.setState({
      currentGroup: data,
      loading: true
    })
  }

  render() {
    return (
      <section className="work">
          <div className="workspace__form">
              <Form onGetData={ (e) => this.setCurrentGroup(e) }/>
          </div>
                    
          { this.state.loading ? (
              <Loading currentGroup={this.state.currentGroup}/>
            ) : (
              <div className="work__items" id="place">
                <div className="work__items__item">
                    <div className="work__item__img">
                        <h1>Your next search group</h1>
                    </div>
                </div>
              </div>
            )
          }
          
      </section>
    )
  }
}

export default Main;