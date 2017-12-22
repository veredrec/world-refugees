import React, { Component } from 'react';
import './style/People.css';
import FaFemale from 'react-icons/lib/fa/female';
import FaMale from 'react-icons/lib/fa/male';

const people = [
  <FaMale />,
  <FaFemale />,
  <FaMale />,
  <FaFemale />,
  <FaMale />,
  <FaFemale />,
  <FaMale />,
  <FaFemale />,
  <FaMale />,
  <FaFemale />,
  <FaMale />,
  <FaFemale />,
  <FaMale />,
  <FaFemale />,
  <FaMale />,
  <FaFemale />,
  <FaMale />,
  <FaFemale />,
  <FaMale />,
  <FaFemale />,
  <FaMale />,
  <FaFemale />,
  <FaMale />,
  <FaFemale />
];

class People extends Component {
  render() {
    return (
      <div className="people-section">
        {people.map(p => {
          return <div class="person">{p}</div>;
        })}
      </div>
    );
  }
}

export default People;
