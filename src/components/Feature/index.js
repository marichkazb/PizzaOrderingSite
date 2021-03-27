import React from 'react'
import {FeatureContainer, FeatureH1, FeatureP, FeatureBtn, FeatureItems} from './FeatureElements'

const Feature = () => {
   return (
      <>
    <FeatureContainer>
       <FeatureItems>
       <FeatureH1>Pizza of the Day</FeatureH1>
       <FeatureP>Truffle alfredo sause topped with 24carat gold dust </FeatureP>
       <FeatureBtn>Order Now</FeatureBtn>
       </FeatureItems>
    </FeatureContainer>
    </>
   )
}

export default Feature
