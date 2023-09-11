import React from 'react'
import Slider from '../../Component/Slider/Slider'
import Services from '../../Component/Services/Services'
import HeadingTitle from '../../Component/HeadingTitle/HeadingTitle'
import BookSlider from '../../Component/BookSlider/BookSlider'
import { books } from '../../data/books'

function HomePage() {
  return (
    <div className="home">
      <Slider/>
      <Services />
      <HeadingTitle title="Most gifted" />
      <BookSlider data={books} />
      <HeadingTitle title="Best seller" />
      <BookSlider data={books} />
      <HeadingTitle title="Most wished for" />
      <BookSlider data={books} />
    </div>
  )
}

export default HomePage