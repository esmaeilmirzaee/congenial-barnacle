import React from 'react';
import { Card, Icon, Image, Grid } from 'semantic-ui-react';

import Rating from './Rating';
import Category from './Category';

const Product = ({ product }) => {
  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <Card>
        <Image src={product.img} />
        <Card.Content>
          <Card.Header>{product.name}</Card.Header>
          <Card.Meta>
            <span className='date'>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </span>
          </Card.Meta>
          <Card.Description>{product.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <span>
            <Icon name='' />
            {product.category.map((cat) => (
              <Category key={cat} category={cat} />
            ))}
          </span>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
};

export default Product;
