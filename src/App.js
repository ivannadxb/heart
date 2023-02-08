import './App.css';
import { Component } from 'react';
import { Heart } from './Heart';

class App extends Component {
  render() {
    return <Heart/>
  }
}


export default App;

// спочатку все видаляємо і лишаємо тільки import './App.css'; та export default App;
// потім пишемо клас з компонентом - class App extends Component
// та імпортуємо, якщо він не імпортувався автоматично
// створюємо новий компонент, який будемо показувати в класі App
//  заходимо в папку SRC і створюємо його (наприклад Heart.js - в якому прописуємо всю логіку)
// 