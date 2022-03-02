import React, { useState } from 'react'
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router";


function SearchBox() {

    const [keyword, setKeyword] = useState('')

    let history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword) {
            history.push(`/?keyword=${keyword}&page=1`)
        } else {
            history.push(history.push(history.location.pathname))
        }
    }

  return (
    <Form onSubmit={submitHandler} className="d-flex">
        <Form.Control
            type="text"
            name="q"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className=''
        >
        </Form.Control>
        <Button
            type="submit"
            variant='outline-success'
            className="p-2 ml-10"
        >Submit</Button>
    </Form>
  )
}

export default SearchBox