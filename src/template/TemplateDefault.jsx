import React from 'react'
import Header from "../components/Header/Header"

const TemplateDefault = ({ children }) => {
    return (
        <>
            <Header />
            { children }
        </>
    )
}

export default TemplateDefault