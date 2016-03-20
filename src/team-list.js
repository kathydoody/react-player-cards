
import React, {Component} from 'react';
import $ from 'jquery';

export default class TeamList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data : this.props.teams
        };
    }

    getTeams(){

        $.ajax({
            url: "https://api.fantasydata.net/nhl/v2/JSON/Teams",
            beforeSend: function(xhr){
                // Request headers
                xhr.setRequestHeader("Ocp-Apim-Subscription-Key","6d976e152c064df589ae4ea4b51462eb");
            },
            type: "GET",
            success:(data) => {
                this.setState({data: data});
            },
            error: (xhr, status, err) => {
                console.error(xhr,status, err.toString());
            }

        });
    }

    componentDidMount() {
        this.getTeams();
        //setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    }


    handleChange(e){
        let selectedTeam = e.target.selectedOptions[0].text
        console.log('team changed to ', selectedTeam);
    }


    render() {


        return (
            <div>
                <select
                    ref="teamsSelect"
                    onChange={this.handleChange}>

                { this.state.data.map(function(team){
                        return <option value={team.Key}>{team.Name}</option>
                    })
                }

                </select>
            </div>
        );
    }
}