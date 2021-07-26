import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Divider, Text } from './style';

const Breadcrumbs = ({ routes }) => {
  return (
    <Container>
      {routes?.map?.((route, index) => (
        <React.Fragment key={`breadcrumb-${index}`}>
          {route?.path && <Link to={route?.path}>{route?.name}</Link>}
          {!route?.path && <Text>{route?.name}</Text>}
          {index < routes?.length - 1 && <Divider>{'>'}</Divider>}
        </React.Fragment>
      ))}
    </Container>
  );
};

Breadcrumbs.propTypes = {
  routes: PropTypes.array,
};

Breadcrumbs.defaultProps = {
  routes: [],
};

export default Breadcrumbs;
