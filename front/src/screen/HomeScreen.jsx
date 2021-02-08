import React from 'react';
import { Grid } from 'semantic-ui-react';

import products from '../tmp/products';
import Product from '../components/Product';

const HomeScreen = () => {
  return (
    <Grid columns={3}>
      <Grid.Row>
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </Grid.Row>
    </Grid>
  );
};

export default HomeScreen;
