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
						className='digit material-icons'
						style={{
							backgroundColor: 'rgba(90,215,90,0.9)',
							color: 'white',
							fontSize: '2.5rem',
						}}
					>
						call
					</button>
					<button
						className='backspace erase-button material-icons'
						style={{
							visibility: currentVal.length ? undefined : 'hidden',
							fontSize: '2.5rem',
						}}
						onClick={() =>
							setCurrentVal((old) => old.substring(0, old.length - 1))
						}
					>
						backspace
					</button>
				</div>

				<div className='navbar'>
					<button
						style={{ backgroundColor: 'inherit', color: 'rgba(150,150,150,1)' }}
					>
						<span className='material-icons nav-icon'>star</span>
						<span className='nav-text'>Favorites</span>
					</button>
					<button
						style={{ backgroundColor: 'inherit', color: 'rgba(150,150,150,1)' }}
					>
						<span className='material-icons nav-icon'>schedule</span>
						<span className='nav-text'>Recents</span>
					</button>
					<button
						style={{ backgroundColor: 'inherit', color: 'rgba(150,150,150,1)' }}
					>
						<span className='material-icons nav-icon'>account_circle</span>
						<span className='nav-text'>Contacts</span>
					</button>
					<button
						style={{ backgroundColor: 'inherit', color: 'rgba(150,150,150,1)' }}
					>
						<span className='material-icons nav-icon'>dialpad</span>
						<span className='nav-text'>Keypad</span>
					</button>
					<button
						style={{ backgroundColor: 'inherit', color: 'rgba(150,150,150,1)' }}
					>
						<span className='material-icons nav-icon'>voicemail</span>
						<span className='nav-text'>Voicemail</span>
					</button>
				</div>
			</div>
		</>
	)
}

export default App
