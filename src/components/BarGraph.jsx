import { Chart } from '@devexpress/dx-react-chart'
import React from 'react'
import { Card, ProgressBar } from 'react-bootstrap'

const BarGraph = () => {

    return (
        <>
        <Card >
            <Card.Body>
        <ProgressBar className='mb-3'>
            <ProgressBar variant="warning" now={50} key={2} />
            <ProgressBar variant="danger" now={10} key={3} />
        </ProgressBar>
        <ProgressBar className='mb-3'>
            <ProgressBar variant="warning" now={50} key={2} />
            <ProgressBar  variant="danger" now={10} key={3} />
        </ProgressBar >
        <ProgressBar className='mb-3'>
            <ProgressBar variant="warning" now={50} key={2} />
            <ProgressBar variant="danger" now={10} key={3} />
        </ProgressBar>
        </Card.Body>
        </Card>
        </>
    )
}

export default BarGraph