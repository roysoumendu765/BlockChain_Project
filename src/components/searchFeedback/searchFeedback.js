import React from 'react';
import { Form, Button } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';
import './SearchFeedback.css';

const Searchfeedback = ({setValue}) => {
  return (
    <>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Search</Form.Label>
                <Form.Control type="search" placeholder="search items" onChange={(e) => setValue(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                <SearchIcon />
            </Button>
        </Form>
    </>
  )
}

export default Searchfeedback;