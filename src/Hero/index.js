import React from 'react';

const Hero = props => {
  return (
    <tbody>
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.power}</td>
            <td>{props.universe}</td>
      <br></br>
      </tr>
    </tbody>
  );
};

export default Hero;
