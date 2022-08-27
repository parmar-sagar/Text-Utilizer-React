import React from 'react'

function Alert(props) {

    const capitalizeFirstLetter = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    return (
        props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
            <strong>{capitalizeFirstLetter(props.alert.type)}</strong>: {props.alert.message}
        </div>
    )
}

export default Alert