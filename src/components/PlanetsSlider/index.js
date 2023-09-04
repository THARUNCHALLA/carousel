import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <div className="slider-container" data-testid="planets">
      <h1 className="planet">PLANETS</h1>
      <Slider>
        {planetsList.map(each => (
          <PlanetItem user={each} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
