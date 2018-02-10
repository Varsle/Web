import React from 'react'
import {Container, Image, Menu, Input} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom';

const MenuBar = () => (

    <Menu secondary position='centered' pointing>
        <Container>
            <Menu.Menu position='left'>
                <Menu.Item as={NavLink} exact to={'/'}>
                    <Image
                        size='mini'
                        src='/img/logo.png'
                        style={{marginRight: '1.5em'}}
                    />
                    Varsle
                </Menu.Item>
            </Menu.Menu>
            <Menu.Item as={NavLink} exact to={'/medic'}>Ambulanse</Menu.Item>
            <Menu.Item as={NavLink} exact to={'/police'}>Politi</Menu.Item>
            <Menu.Item as={NavLink} exact to={'/fire'}>Brannvesen</Menu.Item>
            <Menu.Item as={NavLink} exact to={'/region'}>Kommune</Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item>
                    <Input icon='search' placeholder='Søk...'/>
                </Menu.Item>
            </Menu.Menu>
        </Container>
    </Menu>
)
export default MenuBar;