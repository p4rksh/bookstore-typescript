import React, { useState, useEffect } from 'react';
import { Container, Header } from 'semantic-ui-react';

export default ({ money }) => {

    return (
        <Container>
            <Header as='h4'>잔액</Header>
            <p>{money}원</p>
        </Container>
    )
}