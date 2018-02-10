import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react'
import {Loading} from '../../components/Loading/Loading';
import {Items} from '../../components/Items/Items';
import {StatsMap} from "../../components/Items/StatsMap";
import {firebase} from "../../_data/firebase";

class Overview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true,
        };
    }

    componentDidMount() {
        let name = this.props.name;
        firebase.database().ref('/issues/').orderByChild("category").equalTo(name).once('value')
            .then((snap) => {
                let issues = firebase.toArray(snap)
                console.log(issues)
                this.setState({
                    data: issues,
                    loading: false
                })
            })
    }

    render() {
        if (this.state.loading) {
            return (
                <Loading/>
            )
        } else if (this.state.data) {
            return (
                <div>

                    <StatsMap data={this.state.data}/>

                    <br/><br/><br/>
                    <Grid>
                        {this.state.data.map(function (data) {
                            return (
                                <div key={data.key} align="center">
                                    <Items data={data}/>
                                    <br/>
                                </div>
                            );
                        })}
                    </Grid>
                </div>
            )
        }
        return (
            <div> Det er ikke registrert noe data.</div>
        )

    }
}

export {Overview};