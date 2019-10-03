import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './AddFriendForm.css';

class AddFriendForm extends Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
      gender: this.props.gender || '',
    };
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleGenderChange = this.handleGenderChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit} className={styles.addFriendForm}>
        <input
          type="text"
          autoFocus="true"
          id='name'
          className={classnames('form-control', styles.AddFriendForm)}
          placeholder="Type the name of a friend to be added"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <div className={styles.genderSelection}>
          <label className="radio-inline">
            <input 
              type="radio" 
              value="male"
              id='maleRadioButton'
              name='gender'
              checked={this.state.gender === 'male'} 
              onChange={this.handleGenderChange}
              className={styles.radioButton}
            />
            Male
          </label>
          <label className="radio-inline">
            <input 
              type="radio" 
              value="female"
              id='femaleRadioButton'
              name='gender' 
              checked={this.state.gender === 'female'}
              onChange={this.handleGenderChange}
              className={styles.radioButton}
            />
            Female
          </label>
          <label className="radio-inline">
            <input 
              type="radio" 
              value="other" 
              id='otherRadioButton'
              name='gender'
              checked={this.state.gender === 'other'}
              onChange={this.handleGenderChange}
              className={styles.radioButton}
            />
            Other
          </label>
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
    );
  }

  handleNameChange (e) {
    this.setState({ name: e.target.value });
  }

  handleGenderChange(e) {
    this.setState({gender: e.target.value})
  }

  handleSubmit (e) {
    e.preventDefault()
    const {name, gender} = this.state
    this.props.addFriend({name, gender});
    this.setState({ name: '', gender: undefined });
  }

}

AddFriendForm.propTypes = {
  addFriend: PropTypes.func.isRequired
};

export default AddFriendForm
