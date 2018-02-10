import React from 'react';
import { Container, Header } from 'semantic-ui-react'

const NotFound = () =>
    <Container text>
        <Header as='h3'>404 page not found</Header>
        <p>Kunne ikke finne siden du leter etter.</p>
    </Container>

export {NotFound};