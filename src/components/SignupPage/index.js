import React from 'react'
import styles from './index.module.css'
import Input from '../Input'
import Button from '../Button'
import SearchInput from '../SearchInput'
import UserService from '../../userService'

function isCorrectEmail(email) {
  return email.length >= 5
}

function isCorrectPassword(email) {
  return email.length >= 5
}

export default class SignupPage extends React.Component{
  state = {
    email: '',
    password: '',
    repeatPassword: '',
    emailError: false,
    passwordError: false,
    repeatPasswordError: false,
    errorText: ''
  };

  render() {
    const {
      email,
      password,
      repeatPassword,
      errorText,
      emailError,
      passwordError,
      repeatPasswordError,
    } = this.state;

    return (
      <div className={styles.blocks}>
        <div className={styles.search_block}>
            <SearchInput name="search" placeholder="Search"/>
        </div>
        <div className={styles.text_block}>
          <div className ={styles.text}>
            <div className={styles.major_text}>
              Build to share achievements
            </div>
            <div className={styles.small_text}>
              This site is created for you. Now you can store all your projects in one place
            </div>
          </div>

          <form className={styles.wrapper}>
            <div className={styles.inputs}>
              <div className={styles.input_text}>
                Username
              </div>
              <Input name="email" type="email"  onChange={this.onChangeEmail} value={email} error={emailError}/>
              <div className={styles.input_text}>
                Password
              </div>
              <Input name="password" type="password"  onChange={this.onChangeEmail} value={email} error={emailError}/>
            </div>
            
            <div className={styles.buttons}>
              <Button onClick={this.onSignUp}>Sign up</Button>
              <Button primary onClick={this.onToLogin}>Sign In</Button>
            </div>
            <p className={styles.error}>{errorText}</p>
          </form>
        </div>
      </div>  
    )
  }

  onSignUp = (event) => {
    event.preventDefault();

    const {
      email,
      password,
      repeatPassword,
    } = this.state;

    if (!isCorrectEmail(email)) {
      this.setState({
        emailError: true,
        errorText: 'Логин должен быть длиннее 5 символов'
      });

      return
    }

    if (!isCorrectPassword(password)) {
      this.setState({
        passwordError: true,
        errorText: 'Пароль должен быть длиннее 5 символов'
      });

      return
    }

    if (password !== repeatPassword) {
      this.setState({
        passwordError: true,
        repeatPasswordError: true,
        errorText: 'Пароли не совпадают'
      });

      return
    }


    UserService.signup(email, password)
      .then((user) => {
        this.props.setUser(user);


        this.props.history.push('/');
      })
      .catch((error) => {
        this.setState({errorText: error.error})
      })

  };

  onChangeEmail = (event) => {
    this.resetAllErrors();
    this.setState({email: event.target.value})
  };

  onChangePassword = (event) => {
    this.resetAllErrors();
    this.setState({password:  event.target.value})
  };

  onChangeRepeatPassword = (event) => {
    this.resetAllErrors();
    this.setState({repeatPassword:  event.target.value})
  };

  resetAllErrors = (event) => {
    this.setState({
      emailError: false,
      passwordError: false,
      repeatPasswordError: false,
      errorText: ''
    })
  };

  onToLogin = (event) => {
    event.preventDefault();

    this.props.history.push('/login');
  }
}
