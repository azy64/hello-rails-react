import React from "react"
import PropTypes from "prop-types"
import {useSelector} from 'react-redux';
const Greeting =(props)=> {
    const message = useSelector((state) => state.messageReducer.message);
    console.log("message::",message);
    return (
      <div>
        Message: {message.text}
      </div>
    );
}

/* Greeting.propTypes = {
  message: PropTypes.string
}; */
export default Greeting
