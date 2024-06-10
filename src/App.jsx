import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
 
  const [amount, setAmount]=useState("");
  const [from , setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);  //for result after conversion

  const currencyInfo = useCurrencyInfo(from);  //our custom hook used
  const options = Object.keys(currencyInfo);

  //swapping to & from
  const swap = () =>
    {
      setTo(from);
      setFrom(to);
      setConvertedAmount(amount);
      setAmount(convertedAmount);
    }

    //conversion function
    const convert = () => {
           setConvertedAmount(amount * currencyInfo[to]);
    }


  return (
    <div 
    className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat shadow-md'
    style={{ backgroundImage: `linear-gradient(135deg, rgb(180, 115, 255), rgb(201, 154, 242), rgb(255, 200, 221))`, 
      // linear-gradient(to right, #d3cce3, #e9e4f0)
    }}>
      <div className='w-full'>
      <h1 class="mb-4 text-3xl font-extrabold text-gray-700/75  dark:text-white md:text-5xl lg:text-6xl text-center "><span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">Currency</span> Converter</h1>

        <div className='w-full max-w-md mx-auto border-2 border-zinc-400 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit = {(e) => {
            e.preventDefault();
            convert();
          }}>
            <div className='w-full mb-1'>
              <InputBox label ="From"
                  amount= {amount}
                  currencyOptions = {options}
                  onCurrencyChange= {(currency)=> setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(amount)=> setAmount(amount)}
              ></InputBox>
            </div>
            <div className='relative w-full h-0.5'>
              <button type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-zinc-400 rounded-md bg-purple-600 text-white px-2 py-0.5 hover:bg-purple-800"
                       onClick={swap}         >
                                  Swap
                
              </button>
            </div>
            <div className='w-full mt-1 mb-4'>
                <InputBox label="To"
                amount={convertedAmount}
                currencyOptions = {options}
                onCurrencyChange={(currency)=> setTo(currency)}
                selectCurrency={to}
                amountDisable></InputBox>
            </div>
            <button type="submit"
            className='w-full bg-purple-600 border-2 border-zinc-400 text-white px-4 py-3 rounded-lg hover:bg-purple-800'>
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
