This is finally working!

```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Flashcard from './components/Flashcard';
import './App.css'

function App() {
	const [flashcards, setFlashcards] = useState([])
	const [loadState, setLoadState] = useState(false)
	const [error, setError] = useState('');
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
				);
				setLoadState(true);
		}
	)}, [])
	if (loadState) {
	return (
		<center>
		<Flashcard flashcard={flashcards[currentIndex]} />
		<button onClick={() => setCurrentIndex(currentIndex => currentIndex + 1)}>
			Next Card
		</button>
		</center>
	);
	} else {
		return (
	    <div>
	        Loading...
	    </div>
	    );
	}

}

export default App;
```
