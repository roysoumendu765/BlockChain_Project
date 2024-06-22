import React from 'react';
import './FeedbackList.css';

const FeedbackList = ({value}) => {
    const feedback = [
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
        <div className='main-feedbacklist'>
            <h3>FeedBack List</h3>
            {(value !== "") ? feedback.filter((val) => feedback.type.includes(value ? value : "")).map((val) => {
                return(
                    <div key={val.id}>
                        <h3>{val.type}</h3>
                        <p>{val.description}</p>
                    </div>
                )
            }) : feedback.map((val) => {
                return (
                    <div key={val.id}>
                        <h3>{val.type}</h3>
                        <p>{val.description}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default FeedbackList;