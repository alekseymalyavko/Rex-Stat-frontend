import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleSubmit(e) {
    alert('Отправленное имя: ' + this.state.value);
    e.preventDefault();
  }

  render() {
    return (
      <section className="work">
          <div className="workspace__form">
              <form name="searchVk" onSubmit={(e) => this.handleSubmit(e)}>
                  <div className="workspace__search">
                      <input name="groupName" value={this.state.value} onChange={(e) => this.handleChange(e)} placeholder="Enter a goup name"/>
                      <input type="submit" value="Search"/>
                  </div>
              </form>
          </div>
          <div className="work__items" id="place">
              <div className="work__items__item">
                  <div className="work__item__img">
                      <h1>Your next search group</h1>
                  </div>
              </div>
          </div>
      </section>
    )
  }
}

export default Main;