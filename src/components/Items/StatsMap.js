import React from 'react';
import {Modal, Label, Icon, Button} from 'semantic-ui-react'
import {CreateCluster} from "../../components/Map/MapCluster";

const StatsMap = (props) =>
    <Modal trigger={
        <Button as='div' labelPosition='left'>
            <Label as='a' basic pointing='right'>
                {props.data.length}
            </Label>
            <Button icon>
                <Icon name='map'/>
                Vis alle i kart
            </Button>
        </Button>}
    >
        <CreateCluster markers={props.data}
        />
    </Modal>

export {StatsMap};