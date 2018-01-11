import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Country from './Country';
import './../style/Country.css';
import './../style/CountryList.css';

class CountryList extends Component {
  static defaultProps = {
    countries: [
      {
        title: 'Chad',
        img: 'assets/chad.jpg',
        popul: '14,899,994',
        refugees: '386,100',
        percent: '2.59%'
      },
      {
        title: 'Ethiopia',
        img: 'assets/ethiopia.jpg',
        popul: '102,403,196',
        refugees: '736,100',
        percent: '0.71%'
      },
      {
        title: 'Germany',
        img: 'assets/germany.jpg',
        popul: '82,209,701',
        refugees: '478,600',
        percent: '0.58%'
      },
      {
        title: 'Iran',
        img: 'assets/iran.jpg',
        popul: '81,162,788',
        refugees: '979,400',
        percent: '0.001%'
      },
      {
        title: 'Israel',
        img: 'assets/israel.jpeg',
        popul: '8,785,020',
        refugees: '45,000',
        percent: '0.51%'
      },
      {
        title: 'Jordan',
        img: 'assets/jordan.jpg',
        popul: '10,011,820',
        refugees: '691,800',
        percent: '6.9%'
      },
      {
        title: 'Kenya',
        img: 'assets/kenya.jpg',
        popul: '49,125,325',
        refugees: '553,900',
        percent: '1.12%'
      },
      {
        title: 'Lebanon',
        img: 'assets/lebanon.jpg',
        popul: '6,006,668',
        refugees: '1,000,000',
        percent: '16.6%'
      },
      {
        title: 'Pakistan',
        img: 'assets/pakistan.jpg',
        popul: '207,774,520',
        refugees: '1,400,000',
        percent: '0.67%'
      },
      {
        title: 'Turkey',
        img: 'assets/turkey.jpg',
        popul: '79,510,000',
        refugees: '2,900,000',
        percent: '3.64%'
      },
      {
        title: 'Uganda',
        img: 'assets/uganda.jpg',
        popul: '42,862,958',
        refugees: '512,600',
        percent: '1.19%'
      }
    ]
  };

  static PropTypes = {
    countries: PropTypes.arrayOf(PropTypes.object)
  };
  render() {
    const countries = this.props.countries.map((country, index) => (
      <Country key={index} {...country} />
    ));
    return <div className="country-list">{countries}</div>;
  }
}

export default CountryList;
