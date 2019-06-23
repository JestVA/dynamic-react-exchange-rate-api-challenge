import React from 'react'

const ExchangeRateResults = ({ rateItems }) => {
    return (
        <div className="rate-items__wrapper">
            <h2>Your results:</h2>
            {Object.keys(rateItems).map(rateKey => (
                <div className="rate-items-item" key={rateKey}>
                    {`${rateKey}: ${rateItems[rateKey].toFixed(4)}`}
                </div>
            ))}

        </div>
    )
}
export default ExchangeRateResults