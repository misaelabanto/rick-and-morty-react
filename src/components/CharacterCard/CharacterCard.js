/** @typedef {{ name: string, gender: string, origin: string, type: string, status: string, image: string }} Character */

/**
 * 
 * @param {Character} props
 */
export const CharacterCard = (props) => {
  return (
    <div className="flex flex-row" title={'Character Card'}>
      <img src={props.image} alt={props.name}/>
      <div>
        <div>{props.name}</div>
        <div>{props.gender}</div>
        <div>{props.origin}</div>
        <div>{props.type}</div>
      </div>
    </div>
  )
}