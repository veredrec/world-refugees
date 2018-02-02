import React, { Component } from 'react';
import './../style/About.css';

const PoemA = `After every war \n
someone has to clean up. \n
Things won’t \n
straighten themselves up, after all... \n

Photogenic it’s not, \n
and takes years. \n
All the cameras have left \n
for another war. \n`;

const PoemB = `We’ll need the bridges back, \n
and new railway stations. \n
Sleeves will go ragged \n
from rolling them up. \n

Those who knew \n
what was going on here \n
must make way for \n
those who know little. \n
And less than little. \n
And finally as little as nothing. \n`;

const PoemC = `
In the grass that has overgrown \n
causes and effects, \n
someone must be stretched out \n
blade of grass in his mouth \n
gazing at the clouds. \n `;

class After extends Component {
  render() {
    return (
      <div className="about-section">
        <h2 class="about-title">After The War</h2>
        <div className="poem">
          <p className="about-text"> {PoemA} </p>
          <p className="about-text"> {PoemB} </p>
          <p className="about-text"> {PoemC} </p>
        </div>
        <p className="poet">By Wislawa Szymborska</p>
      </div>
    );
  }
}

export default After;
