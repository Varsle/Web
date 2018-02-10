import React from 'react'
import { Container } from 'semantic-ui-react'
import MenuBar from './MenuBar'
import {AppRoute} from "../../_data/route/route";

const MainLayout = () => (
    <div>
        <MenuBar/>
            <Container>
            <AppRoute/>
            </Container>

    </div>
)

export default MainLayout