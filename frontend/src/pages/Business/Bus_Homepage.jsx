import React from 'react'
import RecipeReviewCard from './Components/PostReviewCard'
import ResponsiveAppBar from './Components/Navigator'
import LabelBottomNavigation from '../../Components/bottom'

const Bus_Homepage = () => {
  return (
    <div>
        <ResponsiveAppBar/>
        <br />\
      <RecipeReviewCard/>
      <br />
      <RecipeReviewCard/>
      <br />
      <RecipeReviewCard/>
      <br />
      <RecipeReviewCard/>

      <LabelBottomNavigation/>
    </div>
  )
}

export default Bus_Homepage
