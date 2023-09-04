import './index.css'

const PlanetItem = props => {
  const {user} = props
  const {imageUrl, description, name} = user
  return (
    <div className="center">
      <img src={imageUrl} alt={`planet ${name}`} className="image" />
      <h1 className="name">{name}</h1>
      <p className="para">{description}</p>
    </div>
  )
}
export default PlanetItem
