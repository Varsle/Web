import React, {Component} from 'react';
import {Card, Image, Icon, Modal} from 'semantic-ui-react'
import {Map} from "../Map/Map";

class Items extends Component {
    render() {
        const data = this.props.data;

        return (
            <Card>
                <Image src={data.photo}/>
                <Card.Content>
                    <Card.Header>
                        {data.title}
                        <Modal trigger={<Icon name="marker"/>}>
                            <Map
                                lat={data.location.lat}
                                long={data.location.long}/>
                        </Modal>
                    </Card.Header>
                    <Card.Meta>
                        <span className='date'>
                            {new Date(data.date).toDateString()}
                        </span>
                    </Card.Meta>
                    <Card.Description>
                        {data.description}
                    </Card.Description>
                </Card.Content>
            </Card>
        );
    }
}


export {Items};
