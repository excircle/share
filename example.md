I am importing the following component into my main `App.js`.

Can anyone tell me how I can expose this "backDivRef" in the below code to functions defined in my `App.js`?

```JSX
import React, { useState, useRef } from 'react';

export default function Flashcard({ flashcard }) {
	const [flip, setFlip] = useState(false);
	const backDivRef = useRef();
	return (
		<div 
			className={`card${flip ? 'flip' : ''}`}
			onClick={() => setFlip(!flip)}
		>
			<div className="front">
				{flashcard.question}
			</div>
			<div className="back" ref={backDivRef}>{flashcard.answer}</div>
		</div>
	)
}
```
