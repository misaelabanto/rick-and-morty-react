/** @typedef {{ name: string, gender: string, origin: string, type: string, status: string, image: string }} Character */

import { CharacterStatus } from '../CharacterStatus/CharacterStatus';

/**
 * 
 * @param {Character} props
 */
export const CharacterCard = (props) => {
  return (
    <div className="flex flex-row p-4 bg-blue-200 border-2 border-blue-600" title={'Character Card'}>
      <img src={props.image} alt={props.name}/>
      <div className="m-2">
        <div>{props.name}</div>
        <div>{props.gender}</div>
        <div>{props.origin}</div>
        <div>{props.type}</div>
        <CharacterStatus status={props.status}/>
      </div>
    </div>
  )
}