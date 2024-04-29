import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    top: 10px;
    right: 10px;
    `;

export default function Alert({message, type}: {message: string, type: string}) {
    return (
        <Container className={`alert alert-${type} position-absolute`} role="alert">
            {message}
        </Container>
    );
}