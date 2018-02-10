import React from 'react'
import { Container,List, Segment } from 'semantic-ui-react'
const Footer = () =>
    <Segment
        raised
        vertical
        style={{margin: '5em 0em 0em'}}
    >
        <Container textAlign='center'>
            MEEM<br/>
            <List horizontal divided link>
                <List.Item as='a' href='#'>Martin</List.Item>
                <List.Item as='a' href='#'>Erlend</List.Item>
                <List.Item as='a' href='#'>Erlend</List.Item>
                <List.Item as='a' href='#'>Mathias</List.Item>
            </List>
        </Container>
    </Segment>


export {Footer}