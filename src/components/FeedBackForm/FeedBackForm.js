import React, {useEffect, useState} from 'react';
import StarRatings from 'react-star-ratings';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './FeedBackForm.css';
import { useLocation } from 'react-router';

const FeedBackForm = () => {
    const location = useLocation();
    const {data} = location.state || {};
    
    const categoryData = data[0].category;
    const severityData = data[0].severity;
    const dateStr = data[0].dateStr;
    const Question = data[0].question;
    const subQuestions = data[0].subquestions;
    const optionalQuestions = data[0].optionalQuestions;
    const overallExperience = data[0].overallExperience;

    console.log(optionalQuestions);

    // SubQuestions
    const [subquestionRating1, setSubQuestionRating1] = useState(0);
    const [subquestionRating2, setSubQuestionRating2] = useState(0);
    const [subquestionRating3, setSubQuestionRating3] = useState(0);
    const [subquestionRating4, setSubQuestionRating4] = useState(0);
    const [subquestionRating5, setSubQuestionRating5] = useState(0);
    const [averageSub, setAverageSub] = useState(0.0);

    const changeSubQuestionRating1 = (newRating, name) => {
        setSubQuestionRating1(newRating);
    }

    const changeSubQuestionRating2 = (newRating, name) => {
        setSubQuestionRating2(newRating);
    }

    const changeSubQuestionRating3 = (newRating, name) => {
        setSubQuestionRating3(newRating);
    }

    const changeSubQuestionRating4 = (newRating, name) => {
        setSubQuestionRating4(newRating);
    }

    const changeSubQuestionRating5 = (newRating, name) => {
        setSubQuestionRating5(newRating);
    }

    const AverageSubQuestionRating = () => {
        let sum = subquestionRating1 + subquestionRating2 + subquestionRating3 + subquestionRating4 + subquestionRating5;
        let avg = sum / 5;
        setAverageSub(avg);
    }

    // Optional Questions
    const [optionalRating1, setOptionalRating1] = useState(0);
    const [optionalRating2, setOptionalRating2] = useState(0);
    const [avgoptional, setAvgOptional] = useState(0.0);

    const changeOptionalRating1 = (newRating, name) => {
        setOptionalRating1(newRating);
    }

    const changeOptionalRating2 = (newRating, name) => {
        setOptionalRating2(newRating);
    }

    const AverageOptionalRating = () => {
        let sum = optionalRating1 + optionalRating2;
        let avg = sum / 2;
        setAvgOptional(avg);
    }

    //Overall Experience
    const [overallRating, setOverallRating] = useState(0);
    const [overallExperienceText, setOverallExperienceText] = useState("");

    const changeOverallRating = (newRating, name) => {
        console.log(newRating, name);
        setOverallRating(newRating);
    }

    const changeOverallExperienceText = (e) => {
        setOverallExperienceText(e.target.value);
    }

    useEffect(() => {
        AverageOptionalRating();
    },[optionalRating1, optionalRating2]);

    useEffect(() => {
        AverageSubQuestionRating();
    },[subquestionRating1, subquestionRating2, subquestionRating3,subquestionRating4, subquestionRating5]);

    return (
        <div className="feedback-main-container">
            <div className='form-heading'>
                FeedBack-Form
            </div>
            <div className='form-layout'>
            <div className='date-Section'>
                <span>Dated:</span>
                <span> {dateStr}</span>
            </div>
             <div className='top-layout'>
                <div className='top-layout-left'>
                    <span>Severity: </span>
                    <span className={"severity-label " + (severityData === 'Low Priority' ? 'severity-low' : severityData === 'Medium Priority' ? 'severity-mid' : severityData === 'High Priority' ? 'severity-high' : "")}>{severityData}</span>
                </div>
                <div className='top-layout-right'>
                    <span>Category: </span>
                    <span className={"category-label " + (categoryData === 'Sales feedback' ? 'category-sales' : categoryData === 'Constructive feedback' ? 'category-constructive' : categoryData === 'Positive feedback' ? 'category-positive' : categoryData === 'Behavioral feedback' ? 'category-behavioral' : categoryData === 'Feature requests' ? 'categor-feature' :  categoryData === 'Informal feedback' ? categoryData === 'Negative feedback' : categoryData === 'Net Promoter Score (NPS)' ? 'category-nps' : categoryData === 'Customer preference feedback' ? 'category-customer' : "")}>{categoryData}</span>
                </div>
             </div>
             <div className='main-layout'>
                <div className='question-section'>
                    <h2 className='question-heading'>Question: </h2>
                    <h5 className='question-text'>
                        {Question}
                    </h5>
                </div>
                <div className='subquestion-section'>
                  <h4>Sub-Questions</h4>
                  <div className='sub-question'>
                     <span className='subquestion-inner'>{subQuestions[0]}</span>
                     <span className='subquestion-rating'>
                        <StarRatings
                            rating={subquestionRating1}
                            starRatedColor="yellow"
                            starHoverColor="rgb(241, 241, 241)"
                            changeRating={changeSubQuestionRating1}
                            numberOfStars={5}
                            starDimension="25px"
                            starSpacing="8px"
                            name='rate'
                        />
                     </span>
                  </div>
                  <div className='sub-question'>
                     <span className='subquestion-inner'>{subQuestions[1]}</span>
                     <span className='subquestion-rating'>
                        <StarRatings
                            rating={subquestionRating2}
                            starRatedColor="yellow"
                            starHoverColor="rgb(241, 241, 241)"
                            changeRating={changeSubQuestionRating2}
                            numberOfStars={5}
                            starDimension="25px"
                            starSpacing="8px"
                            name='rate'
                        />
                     </span>
                  </div>
                  <div className='sub-question'>
                     <span className='subquestion-inner'>{subQuestions[2]}</span>
                     <span className='subquestion-rating'>
                        <StarRatings
                            rating={subquestionRating3}
                            starRatedColor="yellow"
                            starHoverColor="rgb(241, 241, 241)"
                            changeRating={changeSubQuestionRating3}
                            numberOfStars={5}
                            starDimension="25px"
                            starSpacing="8px"
                            name='rate'
                        />
                     </span>
                  </div>
                  <div className='sub-question'>
                     <span className='subquestion-inner'>{subQuestions[3]}</span>
                     <span className='subquestion-rating'>
                        <StarRatings
                            rating={subquestionRating4}
                            starRatedColor="yellow"
                            starHoverColor="rgb(241, 241, 241)"
                            changeRating={changeSubQuestionRating4}
                            numberOfStars={5}
                            starDimension="25px"
                            starSpacing="8px"
                            name='rate'
                        />
                     </span>
                  </div>
                  <div className='sub-question'>
                     <span className='subquestion-inner'>{subQuestions[4]}</span>
                     <span className='subquestion-rating'>
                        <StarRatings
                            rating={subquestionRating5}
                            starRatedColor="yellow"
                            starHoverColor="rgb(241, 241, 241)"
                            changeRating={changeSubQuestionRating5}
                            numberOfStars={5}
                            starDimension="25px"
                            starSpacing="8px"
                            name='rate'
                        />
                     </span>
                  </div>
                </div>
                <div className='optionalquestion-section'>
                    <h4>Optional Questions</h4>
                    <div className='optional-question'>
                        <span>{optionalQuestions[0]}</span>
                        <span>
                            <StarRatings
                                rating={optionalRating1}
                                starRatedColor="yellow"
                                starHoverColor="rgb(241, 241, 241)"
                                changeRating={changeOptionalRating1}
                                numberOfStars={5}
                                starDimension="25px"
                                starSpacing="8px"
                                name='rate'
                            />
                        </span>
                    </div>
                    <div className='optional-question'>
                        <span>{optionalQuestions[1]}</span>
                        <span>
                            <StarRatings
                                rating={optionalRating2}
                                starRatedColor="yellow"
                                starHoverColor="rgb(241, 241, 241)"
                                changeRating={changeOptionalRating2}
                                numberOfStars={5}
                                starDimension="25px"
                                starSpacing="8px"
                                name='rate'
                            />
                        </span>
                    </div>
                </div>
                <div className='overall-experience-section'>
                    <h4>Rate Your Overall Experience: </h4>
                    <div className='rating-center'>
                        <StarRatings
                            rating={overallRating}
                            starRatedColor="rgb(255, 255, 51)"
                            starHoverColor="rgb(241, 241, 241)"
                            changeRating={changeOverallRating}
                            numberOfStars={5}
                            starDimension="45px"
                            starSpacing="10px"
                            name='rate'
                        />
                    </div>
                    <Form className="overallexp-form">
                        <Form.Group className="mb-3" controlId="feedbackForm.ControlTextarea">
                            <Form.Label>{overallExperience}</Form.Label>
                            <Form.Control as="textarea" rows={3} value={overallExperienceText} onChange={changeOverallExperienceText}/>
                        </Form.Group>
                    </Form>
                </div>
             </div>
            </div>
            <Button>Submit</Button>
        </div>
    )
}

export default FeedBackForm;