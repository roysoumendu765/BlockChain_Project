import React, { useState } from 'react';
import { AddCircle } from '@mui/icons-material';
import { Clear } from '@mui/icons-material';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Adminpanel.css';
import getWeb3 from '../../web3js/web3';
import FeedBackManagement from '../../contracts/FeedManagement.json';
import Swal from 'sweetalert2';

const Adminpanel = () => {
    const [showmodal, setshowModal] = useState(false);
    const [categoryType, setCategoryType] = useState("");
    const [severityType, setSeverityType] = useState("");
    const [subQues1, setSubQues1] = useState("");
    const [subQues2, setSubQues2] = useState("");
    const [subQues3, setSubQues3] = useState("");
    const [subQues4, setSubQues4] = useState("");
    const [subQues5, setSubQues5] = useState("");
    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");
    const [overallExp, setOverallExp] = useState("");
    const [questionValue, setQuestionValue] = useState("");

    const categories = [
        {
            id: 1,
            category: "Sales feedback"
        },
        {
            id: 2,
            category: "Constructive feedback"
        },
        {
            id: 3,
            category: "Positive feedback"
        },
        {
            id: 4,
            category: "Behavioral feedback"
        },
        {
            id: 5,
            category: "Feature requests"
        },
        {
            id: 6,
            category: "Informal feedback"
        },
        {
            id: 7,
            category: "Negative feedback"
        },
        {
            id: 8,
            category: "Net Promoter Score (NPS)"
        },
        {
            id: 9,
            category: "Customer preference feedback"
        }
    ];

    const severities = [
        {
            id: 1,
            severity: "High Priority"
        },
        {
            id: 2,
            severity: "Medium Priority"
        },
        {
            id: 3,
            severity: "Low Priority"
        }
    ];

    const overall_experience = [
        {
            id: 1,
            question: "How satisfied are you with our sales process?"
        },
        {
            id: 2,
            question: "Please provide constructive feedback on our service:"
        },
        {
            id: 3,
            question: "What aspects of your experience did you find most positive?"
        },
        {
            id: 4,
            question: "Do you have any behavioral feedback for our team?"
        },
        {
            id: 5,
            question: "What features would you like to see added or improved?"
        },
        {
            id: 6,
            question: "Any informal comments or thoughts you'd like to share?"
        },
        {
            id: 7,
            question: "What areas do you feel need improvement?",
        },
        {
            id: 8,
            question: "On a scale of 0-10, how likely are you to recommend us to a friend or colleague?"
        },
        {
            id: 9,
            question: "What are your preferences in terms of our product/service offerings?"
        }
    ];

    const sales_feedback = [
        {
            id: 1,
            subquestion: "Rate your satisfaction with the information provided during the sales process."
        },
        {
            id: 2,
            subquestion: "How well did our sales team address your questions and concerns?"
        },
        {
            id: 3,
            subquestion: "Rate your satisfaction with the pricing options offered.",
        },
        {
            id: 4,
            subquestion: "How would you rate the professionalism and knowledge of our sales representatives?"
        },
        {
            id: 5,
            subquestion: "How likely are you to recommend our sales process to others?"
        }
    ];

    const constructive_feedback = [
        {
            id: 1,
            subquestion: "How strongly do you feel there are areas of improvement in our service?"
        },
        {
            id: 2,
            subquestion: "Rate your satisfaction with the suggestions for streamlining our processes or workflows."
        },
        {
            id: 3,
            subquestion: "How satisfied are you with our current customer support or assistance?"
        },
        {
            id: 4,
            subquestion: "How frequently do you experience issues or pain points that we should address?"
        },
        {
            id: 5,
            subquestion: "Rate your confidence in us meeting your expectations in the future."
        },
    ]

    const positive_feedback = [
        {
            id: 1,
            subquestion: "Rate the value you find in the specific features or aspects of our product/service."
        },
        {
            id: 2,
            subquestion: "How much has our product/service positively impacted your workflow or daily operations?"
        },
        {
            id: 3,
            subquestion: "Rate your satisfaction with the exceptional service provided by our team members or departments."
        },
        {
            id: 4,
            subquestion: "How much did our product/service exceed your expectations?"
        },
        {
            id: 5,
            subquestion: "How likely are you to recommend our product/service to others?"
        }
    ];

    const behavioral_feedback = [
        {
            id: 1,
            subquestion: "How satisfied are you with your interactions with our team members?"
        },
        {
            id: 2,
            subquestion: "Rate the communication skills demonstrated by our team members."
        },
        {
            id: 3,
            subquestion: "How respected and valued did you feel during your interactions with us?"
        },
        {
            id: 4,
            subquestion: "Rate the level of collaboration or teamwork demonstrated by our team."
        },
        {
            id: 5,
            subquestion: "How would you rate the professionalism or demeanor of our team members?"
        }
    ];

    const feature_requests = [
        {
            id: 1,
            subquestion: "How important are the specific features or functionalities you would like to see added to our product/service?"
        },
        {
            id: 2,
            subquestion: "How much could we improve existing features to better meet your needs?"
        },
        {
            id: 3,
            subquestion: "Rate the importance of integrating our product/service with other tools or platforms."
        },
        {
            id: 4,
            subquestion: "How satisfied are you with the user interface or user experience of our product/service?"
        },
        {
            id: 5,
            subquestion: "How valuable would additional capabilities make our product/service to you?"
        },
    ];

    const informal_feedback = [
        {
            id: 1,
            subquestion: "How likely are you to recommend our company based on your experience?"
        },
        {
            id: 2,
            subquestion: "How satisfied were you with our company as a whole?"
        },
        {
            id: 3,
            subquestion: "How confident are you in our ability to address your needs?"
        },
        {
            id: 4,
            subquestion: "How valued do you feel as a customer of our company?"
        },
        {
            id: 5,
            subquestion: "How satisfied were you with your overall experience with us?"
        }
    ];

    const negative_feedback = [
        {
            id: 1,
            subquestion: "How specific were the aspects of our product/service that did not meet your expectations?"
        },
        {
            id: 2,
            subquestion: "How much did you experience issues or challenges while using our product/service?"
        },
        {
            id: 3,
            subquestion: "How satisfied were you with our customer service or support?"
        },
        {
            id: 4,
            subquestion: "How much better could we have handled the issues you faced?"
        },
        {
            id: 5,
            subquestion: "How likely are you to continue using our product/service?"
        }
    ];

    const net_promoter_score = [
        {
            id: 1,
            subquestion: "On a scale of 1-5, how likely are you to recommend our product/service to others?"
        },
        {
            id: 2,
            subquestion: "How strongly do you feel about the primary reasons for your rating?"
        },
        {
            id: 3,
            subquestion: "How effective do you think potential improvements could be to increase your likelihood of recommending us?"
        },
        {
            id: 4,
            subquestion: "How strongly do you agree with your rating, or do you want to provide more comments?"
        },
        {
            id: 5,
            subquestion: "How important is it that we improve our products to increase your likelihood of recommending us?"
        }
    ]

    const customer_preference_feedback = [
        { 
            id: 1,
            subquestion: "How satisfied are you with our product range?" 
        },
        { 
            id: 2, 
            subquestion: "Rate your satisfaction with our pricing." 
        },
        { 
            id: 3, 
            subquestion: "How well do we meet your specific preferences?" 
        },
        { 
            id: 4, 
            subquestion: "Rate the quality of our customer service." 
        },
        { 
            id: 5, 
            subquestion: "How likely are you to recommend us based on your preferences?" 
        }
    ];

    const optional_value = [
        {
            id: 1,
            optionalValue: "What is your gender identity?"
        },
        {
            id: 2,
            optionalValue: "Which age group do you belong to?"
        },
        {
            id: 3,
            optionalValue: "What is your current occupation?"
        },
        {
            id: 4,
            optionalValue: "How likely are you to recommend our product/service to others?"
        },
        {
            id: 5,
            optionalValue: "How can we improve our product/service to better meet your needs?"
        },
        {
            id: 6,
            optionalValue: "Are there any specific features or functionalities you would like to see in future updates?"
        },
        {
            id: 7,
            optionalValue: "Is there anything else you'd like to share about your experience with us?"
        },
        {
            id: 8,
            optionalValue: "Can you share a specific example of when our product/service exceeded your expectations?"
        },
        {
            id: 9,
            optionalValue: "How can we tailor our offerings to better align with your needs?"
        },
        {
            id: 10,
            optionalValue: "How did you first hear about our product/service?"
        }
    ];


    const subquestionlist = categoryType === "Sales feedback" ? sales_feedback : categoryType === "Constructive feedback" ? constructive_feedback : categoryType === "Positive feedback" ? positive_feedback : categoryType === "Behavioral feedback" ? behavioral_feedback : categoryType === "Feature requests" ? feature_requests : categoryType === "Informal feedback" ? informal_feedback : categoryType === "Negative feedback" ? negative_feedback : categoryType === "Net Promoter Score (NPS)" ? net_promoter_score : categoryType === "Customer preference feedback" ? customer_preference_feedback : [];
    console.log(subquestionlist);

    const handleFeedBackForm = () => {
        setshowModal(true);
    }

    const handleModalClose = () => {
        setshowModal(false);
    }

    const handleCategories = (e) => {
        setCategoryType(e.target.value);
    }

    const handleSeverities = (e) => {
        setSeverityType(e.target.value);
    }

    const handleSubQues1 = (e) => {
        setSubQues1(e.target.value);
    }

    const handleSubQues2 = (e) => {
        setSubQues2(e.target.value);
    }

    const handleSubQues3 = (e) => {
        setSubQues3(e.target.value);
    }

    const handleSubQues4 = (e) => {
        setSubQues4(e.target.value);
    }

    const handleSubQues5 = (e) => {
        setSubQues5(e.target.value);
    }

    const handleOption1 = (e) => { 
        setOption1(e.target.value);
    }

    const handleOption2 = (e) => {
        setOption2(e.target.value);
    }

    const handleOverAllExperience = (e) => {
        setOverallExp(e.target.value);
    } 

    const handleQuestionValue = (e) => {
        setQuestionValue(e.target.value);
    }

    const presentDate = () => {
        const date = new Date(); 

        const day = date.getDate();
        const updatedday = day < 10 ? "0" + day : day;

        const month = date.getMonth() + 1;
        const updatedmonth = month < 10 ? "0" + month : month;

        const year = date.getFullYear();

        const datestring = `${year}-${updatedmonth}-${updatedday}`;

        return datestring;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const datestr = presentDate();
            const web3 = await getWeb3();
            if (!window.ethereum) {
              throw new Error("MetaMask is not installed. Please install it to use this dApp.");
            }
            await window.ethereum.enable();
            const accounts = await web3.eth.getAccounts();
            if (accounts.length === 0) {
              throw new Error("No accounts found. Please make sure MetaMask is unlocked.");
            }
            const contract = new web3.eth.Contract(FeedBackManagement.abi, FeedBackManagement.contractAddress); 

            await contract.methods.addfeedbackdata(questionValue, categoryType, severityType, subQues1, subQues2, subQues3, subQues4, subQues5, option1, option2, overallExp, datestr);

            setQuestionValue("");
            setCategoryType("");
            setSeverityType("");
            setSubQues1("");
            setSubQues2("");
            setSubQues3("");
            setSubQues4("");
            setSubQues5("");
            setOption1("");
            setOption2("");
            setOverallExp("");
            setshowModal(false);

            Swal.fire({
                title: "Success",
                text: `Question for Feedback Submitted Successfully`,
                icon: "success"
            })
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: `${error.message}`,
              });
        }
    }

    return (
        <div className={"main-admin-container " + (showmodal ? 'backdropclass' : ' ')}>
            {
                showmodal && <div className='modal-container'>
                    <div className='clear-btn'>
                        <Clear onClick={handleModalClose} />
                    </div>
                    <div className='form-main-container'>
                        <Form className='form' onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicQuery">
                                <Form.Label>Question</Form.Label>
                                <Form.Control as="textarea" placeholder="Post Your Question" value={questionValue} onChange={handleQuestionValue}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Category</Form.Label>
                                <Form.Select aria-label="Select Categories" value={categoryType} onChange={handleCategories}>
                                    <option>Select Categories</option>
                                    {
                                        categories.map((val, index) => {
                                            return(
                                                <option key={index} value={val.category}>{val.category}</option>
                                            )
                                        })
                                    }
                                </Form.Select>
                             </Form.Group>
                            <Form.Group>
                                <Form.Label>Severity Level</Form.Label>
                                <Form.Select aria-label="Select Severity" value={severityType} onChange={handleSeverities}>
                                    <option>Select Severity Level</option>
                                    {
                                        severities.map((val, index) => {
                                            return(
                                                <option key={index} value={val.severity}>{val.severity}</option>
                                            )
                                        })
                                    }
                                </Form.Select>
                             </Form.Group>
                            <Form.Group>
                                <Form.Label>Sub-Question-1</Form.Label>
                                <Form.Select aria-label="Select Sub-Question-1" value={subQues1} onChange={handleSubQues1}>
                                    <option>Select SubQuestion1</option>
                                    {
                                        subquestionlist.map((val, index) => {
                                            return(
                                                <option key={index} value={val.subquestion}>{val.subquestion}</option>
                                            )
                                        })
                                    }
                                </Form.Select>
                             </Form.Group>
                            <Form.Group>
                                <Form.Label>Sub-Question-2</Form.Label>
                                <Form.Select aria-label="Select Sub-Question-2" value={subQues2} onChange={handleSubQues2}>
                                    <option>Select SubQuestion2</option>
                                    {
                                        subquestionlist.map((val, index) => {
                                            return(
                                                <option key={index} value={val.subquestion}>{val.subquestion}</option>
                                            )
                                        })
                                    }
                                </Form.Select>
                             </Form.Group>
                            <Form.Group>
                                <Form.Label>Sub-Question-3</Form.Label>
                                <Form.Select aria-label="Select Sub-Question-3" value={subQues3} onChange={handleSubQues3}>
                                    <option>Select SubQuestion3</option>
                                    {
                                        subquestionlist.map((val, index) => {
                                            return(
                                                <option key={index} value={val.subquestion}>{val.subquestion}</option>
                                            )
                                        })
                                    }
                                </Form.Select>
                             </Form.Group>
                            <Form.Group>
                                <Form.Label>Sub-Question-4</Form.Label>
                                <Form.Select aria-label="Select Sub-Question-4" value={subQues4} onChange={handleSubQues4}>
                                    <option>Select SubQuestion4</option>
                                    {
                                        subquestionlist.map((val, index) => {
                                            return(
                                                <option key={index} value={val.subquestion}>{val.subquestion}</option>
                                            )
                                        })
                                    }
                                </Form.Select>
                             </Form.Group>
                            <Form.Group>
                                <Form.Label>Sub-Question-5</Form.Label>
                                <Form.Select aria-label="Select Sub-Question-5" value={subQues5} onChange={handleSubQues5}>
                                    <option>Select SubQuestion5</option>
                                    {
                                        subquestionlist.map((val, index) => {
                                            return(
                                                <option key={index} value={val.subquestion}>{val.subquestion}</option>
                                            )
                                        })
                                    }
                                </Form.Select>
                             </Form.Group>
                            <Form.Group>
                                <Form.Label>Optional Question 1</Form.Label>
                                <Form.Select aria-label="Select Optional Question 1" value={option1} onChange={handleOption1}>
                                    <option>Select Optional Question 1</option>
                                    {
                                        optional_value.map((val, index) => {
                                            return(
                                                <option key={index} value={val.optionalValue}>{val.optionalValue}</option>
                                            )
                                        })
                                    }
                                </Form.Select>
                             </Form.Group>
                            <Form.Group>
                                <Form.Label>Optional Question 2</Form.Label>
                                <Form.Select aria-label="Select Optional Question 2" value={option2} onChange={handleOption2}>
                                    <option>Select Optional Question 2</option>
                                    {
                                        optional_value.map((val, index) => {
                                            return(
                                                <option key={index} value={val.optionalValue}>{val.optionalValue}</option>
                                            )
                                        })
                                    }
                                </Form.Select>
                             </Form.Group>
                            <Form.Group>
                                <Form.Label>Overall Experience</Form.Label>
                                <Form.Select aria-label="Select a Overall Experience Question" value={overallExp} onChange={handleOverAllExperience}>
                                    <option>Select a Overall Experience: </option>
                                    {
                                        overall_experience.map((val, index) => {
                                            return(
                                                <option key={index} value={val.question}>{val.question}</option>
                                            )
                                        })
                                    }
                                </Form.Select>
                             </Form.Group>
                            <Button type="submit" className='btn-submit'>
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            }
            <div className='heading-admin-top'>
                <button className='post-btn' onClick={handleFeedBackForm}>
                    <AddCircle /> Add New Feedback
                </button>
                <h2>Welcome, Admin</h2>
            </div>
            <div className='data-panel'>
                <div className='card bg-primary '>
                    <div className='card-body'></div>
                </div>
                <div className='card bg-success text-white'>
                    <div className='card-body'></div>
                </div>
                <div className='card bg-danger'>
                    <div className='card-body'></div>
                </div>
                <div className='card bg-warning text-white'>
                    <div className='card-body'></div>
                </div>
            </div>
        </div>
    )
}

export default Adminpanel