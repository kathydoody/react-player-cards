import React, { Component } from 'react';
import {teams} from './teams';
import TeamList from './team-list';

export default class App extends Component {


    render() {
    return (
        <div>
            <h3>Under construction....</h3>
            <TeamList teams={teams}/>
        </div>

    );
  }
}
