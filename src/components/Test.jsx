import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_PRODUCT_PROGRESS } from '../redux-saga/product/action/action'

const Test = () => {

    const dispatch = useDispatch()
    const data = useSelector(state => state.productReducer)
    console.log(data);

    useEffect(() => {
        dispatch({ type: GET_PRODUCT_PROGRESS })
    }, [])

    return (
        <>
        <h1>Test</h1>
        </>
    )
}

export default Test