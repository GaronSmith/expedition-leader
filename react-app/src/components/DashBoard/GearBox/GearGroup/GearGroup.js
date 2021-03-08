import React, { useState } from 'react'
import Collapsible from 'react-collapsible'

import './GearGroup.css'

const GearGroup = ({group}) => {

    return (
        <Collapsible trigger="Start here">
            <p>
                This is the collapsible content. It can be any element or React
                component you like.
            </p>
            <p>
                It can even be another Collapsible component. Check out the next
                section!
            </p>
        </Collapsible>
    )
}

export default GearGroup