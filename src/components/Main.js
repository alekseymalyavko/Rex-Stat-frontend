import React from 'react';
import Form from './Main/form';
import Loading from './Main/loading';
import Stats from './Main/stats';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      currentGroup: null,
      groupData: null
    };
  }
  
  setCurrentGroup(data) {
    this.setState({
      currentGroup: data,
      loading: true
    })
  }

  onGetData(data) {
    this.setState({
      groupData: data,
      loading: false
    })
  }

  render() {
    return (
      <section className="work">
          <div className="workspace__form">
              <Form 
                onStartLoading={ (e) => this.setCurrentGroup(e) } 
                onGetData={ (e) => this.onGetData(e) }
              />
          </div>

          { this.state.loading && (
              <Loading currentGroup={this.state.currentGroup}/>
            )
          }
          
          { this.state.groupData === null && this.state.currentGroup === null && (
            <div className="work__items">
              <div className="work__items__item">
                  <div className="work__items__item_text">
                      <h1>Your next search group</h1>
                      <p>{this.state.groupData}</p>
                  </div>
              </div>
            </div>
            )
          }     
          { this.state.groupData !== null && !this.state.loading && (
              <Stats groupData={this.state.groupData}/>
            )
          }
          
          
      </section>
    )
  }
}

export default Main;