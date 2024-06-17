import React from 'react';
import './feedbackList.css';

const feedbackList = ({value}) => {
    const feedbackList = [
        {
            id: 1,
            type: "generic",
            description: "generic type data item"
        },
        {
            id: 1,
            type: "holistic",
            description: "holistic type data item"
        },
        {
            id: 1,
            type: "imaginary",
            description: "imaginary type data item"
        },
        {
            id: 1,
            type: "primitive",
            description: "primitive type data item"
        },
        {
            id: 1,
            type: "native",
            description: "native type data item"
        }
    ];
    return (
        <>
            {feedbackList.filter((val) => feedbackList.type.includes(value)).map((val) => {
                return(
                    <div key={val.id}>
                        <h3>{val.type}</h3>
                        <p>{val.description}</p>
                    </div>
                )
            })}
        </>
    )
}

export default feedbackList