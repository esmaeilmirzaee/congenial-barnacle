import React, { useState, useEffect } from 'react';
import { Grid, Form, Segment, Input, Button, Message } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Loader from '../components/Loader';
import { login } from '../actions/userActions';

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  let userLogin = useSelector((state) => state.userLogin);
  let { loading, error, userInfo } = userLogin;

  let redirect = location.search ? location.search.split('=')[1] : '/';

  const signInHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, redirect, userInfo]);

  return (
    <>
      <Grid
        textAlign='center'
        verticalAlign='middle'
        style={{ height: '100vh' }}
      >
        {error && (
          <Grid.Row>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Message color='red'>{error}</Message>
            </Grid.Column>
          </Grid.Row>
        )}
        {loading && <Loader />}
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form size='large' onSubmit={signInHandler}>
              <Segment raised stacked color='violet'>
                <Form.Input
                  fluid
                  icon='mail'
                  iconPosition='left'
                  placeholder='Email address'
                  type='email'
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  fluid
                  color='violet'
                  size='large'
                  type='submit'
                  onClick={signInHandler}
                >
                  Login
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ maxWidth: 450 }}>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Message>
              Not a user?{' '}
              <Link
                to={redirect ? `/register?redirect=${redirect}` : '/register'}
              >
                Register
              </Link>
            </Message>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default LoginScreen;
