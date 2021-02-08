import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import products from '../tmp/products';
import Product from '../components/Product';

const HomeScreen = ({ title }) => {
  return (
    <div>
      <Header as='h3'>{title}</Header>
      <Grid columns={3}>
        <Grid.Row>
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
};

HomeScreen.defaultProps = {
  title: 'Latest',
};

HomeScreen.propTypes = {
  title: PropTypes.string,
};

export default HomeScreen;
