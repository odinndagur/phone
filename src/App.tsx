import { useState } from 'react'
import './App.css'

function App() {
	const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#']
	const [currentVal, setCurrentVal] = useState('')

	return (
		<>
			<div className='phone'>
				<div className='input-area'>{currentVal}</div>
				<div className='keypad'>
					{digits.map((digit) => {
						return (
							<button
								className='digit'
								onClick={() => setCurrentVal((old) => old + digit)}
							>
								{digit}
							</button>
						)
					})}
					<div className='empty'></div>
					<button
						className='digit'
						style={{ backgroundColor: 'rgba(50,255,50,1)', color: 'white' }}
					>
						c
					</button>
					<button
						className='backspace digit'
						style={{ visibility: currentVal.length ? '' : 'hidden' }}
						onClick={() =>
							setCurrentVal((old) => old.substring(0, old.length - 1))
						}
					>
						{'<-'}
					</button>
				</div>

				<div className='navbar'>
					<button>lol</button>
					<button>lol</button>
					<button>lol</button>
					<button>lol</button>
				</div>
			</div>
		</>
	)
}

export default App
