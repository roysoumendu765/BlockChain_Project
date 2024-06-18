import React from 'react';
import { Form, Button } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';
import './searchFeedback.css';

const searchFeedback = ({setValue}) => {
  return (
    <>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Search</Form.Label>
                <Form.Control type="search" placeholder="search items" onChange={() => setValue(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                <SearchIcon />
            </Button>
        </Form>
    </>
  )
}

export default searchFeedback