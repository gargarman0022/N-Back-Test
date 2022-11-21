import React from 'react'

const LetterCard = ({letter}) => {
    return (

            <div className="h-32 w-32 border-4 border-gray-600 rounded-lg text-6xl">
                <h5 className="text-center mt-6">{letter}</h5>
            </div>
    )
}

export default LetterCard
