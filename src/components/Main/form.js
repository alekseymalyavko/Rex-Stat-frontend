import React from 'react';
import { HTTP } from '../../request/request';

class Form extends React.Component {
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
    e.preventDefault();
    const group = this.state.value.split('/').pop();
    this.props.onGetData(group);

    const basicData = async (group) => {
      await HTTP.get('/api/stats/basic', {
        params: {
          group
        }
      })
    }

    basicData(group)

  }

  render() {    
    return (
      <form name="searchVk" onSubmit={(e) => this.handleSubmit(e)}>
          <div className="workspace__search">
              <input name="groupName" value={this.state.value} onChange={(e) => this.handleChange(e)} placeholder="Enter a group link"/>
              <input type="submit" value="Search"/>
          </div>
      </form>
    )
  }
}
export default Form;