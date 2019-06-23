import React, { useState, useEffect } from 'react'
import ExchangeRateResults from './component/exchange-rate-results'
import UserInputCurrency from './component/user-input-currency'
import UserInputDate from './component/user-input-date'


const ExchangeRateApp = () => {
    // Let's define state: currency selection (base) & date input & the rates returned from the API poll
    // Currency
    const defaultCurrency = "GBP"
    const [base, setBase] = useState(defaultCurrency)
    // Time Factor
    const [date, setDate] = useState()
    // API results
    const [rates, setRates] = useState(Object.create(null))
    
    
    
    return (
        <h1>building api poll...</h1>
    )
}

export default ExchangeRateApp