import React from 'react';
import { HTTP } from '../../request/request';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      from: '2019-05-25',
      to:'2019-06-10',
      groupName: 'https://vk.com/fc_liverpool'
    };
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.state.groupName !== '' && this.state.from !== '' && this.state.to !== '') {
      const group = this.state.groupName.split('/').pop();
      const from = this.state.from;
      const to = this.state.to;

      this.props.onStartLoading(group);
      
      try {
        const basicData = 
          await HTTP.get('/api/stats/basic', {
            params: {
              group,
              from,
              to
            }
          })
        
        const result = basicData.data;
        console.log(result)
        this.props.onGetData(result)
      } catch(err) {
       console.log(err)
       this.props.onGetData(0)
      } 
    }
  }

  render() {    
    return (
      <form name="searchVk" onSubmit={(e) => this.handleSubmit(e)}>
          <div className="workspace__search">
              <span className="dates">
                <span>
                  <label>From: </label>
                  <input name="from" type="text" value={this.state.from} 
                          onChange={(e) => this.handleChange(e)} placeholder="yyyy-dd-mm"/>
                </span>
                <span>
                  <label>To: </label>                
                  <input name="to" type="text" value={this.state.to} 
                          onChange={(e) => this.handleChange(e)} placeholder="yyyy-dd-mm"/>
                </span>
              </span>
              <span className="text">
                <input name="groupName" value={this.state.groupName} 
                        onChange={(e) => this.handleChange(e)} placeholder="Enter a group link"/>
                <input type="submit" value="Search"/>
              </span>

          </div>
      </form>
    )
  }
}
export default Form;