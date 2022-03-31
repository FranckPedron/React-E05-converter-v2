/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import PropTypes from 'prop-types';
import React from 'react';

// function Demo({ name }) {
//   return (
//     <div>Salut {name}</div>
//   );
// }

class Demo extends React.Component {
  // constructor(props) {
  //   this.props = props;
  // }
  render() {
    return (
      <div>Salut {this.props.name}</div>
    );
  }
}

Demo.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Demo;
