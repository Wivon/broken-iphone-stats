import React from 'react'
import Part from './Part'

export default function PartSelector({registerBrokenPart, active, setCurrentFormStep, renderActiveBall}) {

    return (
        <div className={'form-input' + (active === 1 ? ' active' : '')}>
            <label>Broken Parts</label>
            <div className='part-list'>
                {partsIDs.map(p => <Part key={p[0]} data={p[0]} text={p[1]} registerBrokenPart={registerBrokenPart} />)}
            </div>
        </div>
    )
}

const partsIDs = [
    ['screen', 'Screen'],
    ['battery', 'Battery'],
    ['back-glass', 'Back Glass'],
    ['back-camera', 'Back Camera'],
    ['id', 'Auth ID'],
    ['logic-board', 'Logic Board'],]