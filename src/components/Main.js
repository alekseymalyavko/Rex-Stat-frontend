import React from 'react';
import Form from './Main/form';
import Loading from './Main/loading';
import Stats from './Main/stats';
import { Link } from 'react-router-dom'
import SaveButton from './Main/saveButton';

import Notification from './Notification';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSaved: false,
      isError: false,
      loading: false,
      currentGroup: null,
      groupData: null,
    };
  }
  
  setCurrentGroup(data) {
    this.setState({
      isError: false,
      currentGroup: data,
      loading: true
    })
  }

  onSaveData() {
    this.setState({
      isSaved: true,
      currentGroup: null,
      groupData: null
    })
  }

  cleanState() {
    this.setState({
      loading: false,
      currentGroup: null,
      groupData: null,
    })
  }

  onGetData(data) {
    if (data === 0) {
      this.setState({
        isError: true
      })
    } else {
      this.setState({
        groupData: data,
        loading: false,
        isError: false
      })
    }
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

          { this.state.loading && !this.state.isError && (
              <Loading currentGroup={this.state.currentGroup}/>
            )
          }

          { this.state.isError && 
            (
              <div className="work__items">
                <div className="work__items__item">
                    <div className="work__items__item_text">
                        <h1>Error :( 
                          <br/>
                          please try again or choose another group
                        </h1>
                    </div>
                </div>
              </div>
            )
          }
          
          { this.state.groupData === null && this.state.currentGroup === null && (
            <div className="work__items">
              <div className="work__items__item">
                  <div className="work__items__item_text">
                      <h1>Your next search group</h1>
                      <p>{this.state.groupData}</p>
                      <Link to='/collection' className="btn main">
                          Look saved data
                      </Link>
                  </div>
              </div>
            </div>
            )
          }     
          { this.state.groupData !== null && !this.state.loading && (
              <Stats groupData={this.state.groupData}/>
            )
          }

          { this.state.groupData !== null && this.state.loading === false && this.state.groupData.allActivity &&  (
              <SaveButton groupData={this.state.groupData} onSaveData={ (e) => this.onSaveData(e)}/>
            )
          } 
          { this.state.groupData !== null && this.state.loading === false && this.state.groupData.allActivity &&  (
              <div className="button_work clean" onClick={ () => this.cleanState(null) }>
                <span className="btn module">Отчистить</span>
              </div>
            )
          }          
          {this.state.isSaved  && (
              <Notification text={'Data saved'}/>
            )
          }
      </section>
    )
  }
}

export default Main;