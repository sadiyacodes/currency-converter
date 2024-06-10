import React from 'react'
import {useId} from 'react';

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    className = "",
    selectCurrency ="usd",
    amountDisable = false,
    currencyDisable=false,
}) {
    const amountInputId = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex 
    ${className}`}>
        <div className='w-1/2'>
            <label className='text-zinc-700 mb-2 inline-block'
            htmlFor={amountInputId}>
                {label}
            </label>
            <input
            id={amountInputId}
            className='outline-none w-full bg-transparent py-1.5'
            type="number"
            min="0"
            step="any"
            placeholder="Amount"
            disabled ={amountDisable}
            value={amount}
            onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}/>
          
        </div>

        <div className='w-1/2 flex flex-wrap justify-end text-right'>
            <p className='text-zinc-700 mb-2 w-full'>Currency type</p>
            <select
            className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer'
            value={selectCurrency}
           
            onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled={currencyDisable}>
               
             {currencyOptions.map((currency)=>
                (
                    <option key={currency}
                    value={currency}>
                    {currency}
                </option>
                ))
             }
            </select>
        </div>

    </div>
  )
}

export default InputBox