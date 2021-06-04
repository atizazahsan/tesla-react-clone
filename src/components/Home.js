import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {

    
    return (
        <div>
            <Section
               title = "Model 3"
               description = "Order Online for Touchless Delivery"
               backgroundImg = "model-3.jpg"
               leftButtonText = "Custom Order" 
               rightButtonText = "Existing Inventory" 
            />
            <Section
               title = "Model X"
               description = "Order Online for Touchless Delivery"
               backgroundImg = "model-x.jpg"
               leftButtonText = "Custom Order" 
               rightButtonText = "Existing Inventory" 
            />
             <Section
               title = "Model S"
               description = "Order Online for Touchless Delivery"
               backgroundImg = "model-s.jpg"
               leftButtonText = "Custom Order" 
               rightButtonText = "Existing Inventory" 
            />
            <Section
               title = "Model Y"
               description = "Order Online for Touchless Delivery"
               backgroundImg = "model-y.jpg"
               leftButtonText = "Custom Order" 
               rightButtonText = "Existing Inventory" 
            />
        </div>
    )
}

export default Home
