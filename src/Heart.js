import { Component } from "react";
import heart from './heart.webp';
import heart2 from './heart2.webp';


export class Heart extends Component {
    
    state = {
        CTA: "Like us!",
        image: heart
    }

    heartClicked = () => {
      this.setState ({
        CTA: "Thank you! We love you too!!",
        image: heart2
      })
    }
    
    render() {
        return <div>
    <div className="container">
    <h1>{this.state.CTA}</h1>
    </div>
    <div className="container">
    <img onClick={this.heartClicked} src={this.state.image} width="120px" alt="heart"/>
    </div>
        </div>
    }
}

// пишемо імпорт, щоб імпортувати цей документ в App.js ш щоб він там відображався
// CTA - call to action
// хочемо,щоб при кліку на кнопку у нас змінювалось зображення,тому ставимо підслушку 
// на зображення onClick, і прописуємо логіку функції -якщо клікнуто зміниться картинка
// і текст. Щоб змінилась картинка, ми її імпортуємо спочаткую
// !!! onClick - можна привязати не тільки до кнопки, але й до зображення !!!!