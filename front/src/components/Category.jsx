import React from 'react';
import { Label } from 'semantic-ui-react';

const Category = ({ category }) => {
  return <Label as='a'>{category}</Label>;
};

export default Category;
