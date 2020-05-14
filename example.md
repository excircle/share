This code is able to reach out to my API and return multiple objects.

I'd like to populate an array from the API call, display the first object in the array,
then use a button to display the next object until they are all done.

How can I do that?

```javascript
import React, {
  useState,
  useEffect
} from 'react';
import axios from 'axios';
import FlashcardList from './components/FlashcardList';
import './App.css'

function App() {
  const [flashcards, setFlashcards] = useState([])

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/view-cards/1').then(res => {
        setFlashcards(res.data.map((questionItem) => {
          return {
            id: questionItem.id,
            question: questionItem.question,
            answer: questionItem.answer
          }
        }))
      })
  }, [])

  return (
    <FlashcardList flashcards = {flashcards}/> 
    <button onClick = "#" >Next Card</button>
  );
}

export default App;
```
