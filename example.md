I can't figure out why React doesn't recognize the "flashcard" argument for the component called "Flashcard".

<b>Error Message</b>
```
TypeError: flashcard is undefined
Flashcard
src/components/Flashcard.js:10
```


<b>App.js</b>
```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Flashcard from './components/Flashcard';
import './App.css'

function App() {
	const [flashcards, setFlashcards] = useState([])
	const [currentIndex, setCurrentIndex] = useState(0)

	useEffect( () => {
		axios
			.get('http://127.0.0.1:8000/api/view-cards/1')
			.then(res => {
				setFlashcards(res.data.map((questionItem) => {
					return {
						id: questionItem.id,
						question: questionItem.question,
						answer: questionItem.answer
					}})
			)
		}
	)}, [])

	return (
		<center>
		<Flashcard flashcard={flashcards[0]} />
		<button onClick={() => setCurrentIndex(currentIndex => currentIndex + 1)}>
			Next Card
		</button>
		</center>
	);
}

export default App;
```

<b>Flashcard.js</b>
```javascript
import React, { useState } from 'react';

export default function Flashcard({ flashcard }) {
	const [flip, setFlip] = useState(false);
	return (
		<div 
			className={`card ${flip ? 'flip' : ''}`}
			onClick={() => setFlip(!flip)}
		>
			<div className="front">
				{flashcard.question}
			</div>
			<div className="back">{flashcard.answer}</div>
		</div>
	)
}
```
