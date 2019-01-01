import React, { Component } from 'react';
// import logo from './logo.svg';
import logo from './logo.png';
import './App.css';

const firstWords = [
    "זה",
    "אני",
    "אגודת",
    "אהבת",
    "אור",
    "אח\"י",
    "אחי",
    "אחים",
    "אחיעזר",
    "אחריות",
    "ארץ",
    "ברית",
    "גיל",
    "דמוקראטורה",
    "האיחוד",
    "האמונה",
    "הבית",
    "הברית",
    "הישראלים",
    "הליכוד",
    "המפלגה",
    "הסתדרות",
    "הפיראטים",
    "הציונות",
    "התנועה",
    "התקווה",
    "זהות",
    "זכויותנו",
    "חזית",
    "חירות",
    "חץ",
    "יחד",
    "ייצוג",
    "ימין",
    "יעוד",
    "יש",
    "ישראל",
    "כבוד",
    "כולנו",
    "כח",
    "לב",
    "לזוז",
    "לח\"ם",
    "מד\"ע",
    "מהפך",
    "מולדת",
    "מורשת",
    "מימד",
    "מנהיגות",
    "מפ\"ם",
    "מפלגה",
    "פנינה",
    "גה\"ת",
    "האזרחים",
    "האחדות",
    "הבחירה",
    "ההתיישבות",
    "הירוקים",
    "המרכז",
    "העבודה",
    "העצמאות",
    "הערבי",
    "הרפורמה",
    "חוק",
    "כלכלה",
    "נגב",
    "עלה",
    "קזינו",
    "מרצ",
    "נוי",
    "נצח",
    "עצמה",
    "עלי״ה",
    "עם",
    "עתיד",
    "פעולה",
    "פרח",
    "צבר",
    "צדק",
    "צומת",
    "צל״ש",
    "קדימה",
    "קול",
    "רע״ש",
    "ר״צ",
    "רשימת",
    "ש״ס",
    "חוסן",
    "גשר",
    "שינוי",
    "תנופה",
    "תפנית",
    "המחנה",
    "דגל",
    "חברה"
];

const secondWords = [
    "מקומי",
    "ואתה",
    "החרדים",
    "ישראל",
    "שלנו",
    "ארץ",
    "ישראלי",
    "אנחנו",
    "חדשה",
    "עולם",
    "הלאומי-תקומה",
    "היהודי",
    "המתקדמת",
    "הלאומית",
    "הקומוניסטית",
    "אגודת",
    "החדשה",
    "הערבית",
    "להתחדשות",
    "בקולנו",
    "יהודית",
    "לאומית",
    "שווה",
    "עתיד",
    "תקוה",
    "אחרת",
    "אחת",
    "ביתינו",
    "בעליה",
    "חזקה",
    "ומסורת",
    "חברים",
    "לגימלאים",
    "להשפיע",
    "הישראלית",
    "לישראל",
    "בחינוך",
    "אבות",
    "דמוקרטית",
    "מקומית",
    "מתקדמת",
    "ערבית",
    "רוזנבלום",
    "הותיקים",
    "הדמוקרטית",
    "ליברלית",
    "איסלמית",
    "הפרוגרסיבית",
    "החדש",
    "הירוקה",
    "הטבע",
    "ירוק",
    "לשכונות",
    "ותקווה",
    "אחד",
    "חברתי",
    "לכל",
    "הסביבה",
    "הציוני",
    "התורה",
    "הערבי",
    "יהדות"
];

const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];

const randomizePartyName = () => `${getRandomItem(firstWords)} ${getRandomItem(secondWords)}`;


class App extends Component {

    constructor() {
        super();

        this.state = {
            party: ''
        };

        this.onClick = this.onClick.bind(this);
        this.onShareClick = this.onShareClick.bind(this);
    }

    onClick() {
        this.setState({
            party: randomizePartyName()
        });
    }

    onShareClick() {
        window.FB.ui({
            method: 'share',
            display: 'popup',
            quote: `המפלגה שלי היא ${this.state.party}. ושלך?`,
            href: 'https://nati-levi.github.io/miflagator/',
        }, function (response) {
        });
    }

    render() {
        return (

            <div className="App">

                <header className="App-header">

                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>המפלגטור</h1>
                    <h4>מחולל המפלגות של ישראל</h4>
                    <br/>
                    <button className="btn btn-lg btn-success" onClick={this.onClick}>לחצו וחוללו</button>
                    <br/>
                    <br/>
                    <p>{this.state.party}</p>
                    <br/>

                    <button className="facebook" onClick={this.onShareClick}>share</button>

                </header>
            </div>
        );
    }
}

export default App;

