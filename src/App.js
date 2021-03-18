import logo from './logo.svg';
import './App.css';
import React from 'react';
import { withTranslation } from 'react-i18next';
import i18n from './i18n';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  changeLanguageToEnglish = () => {
    i18n.changeLanguage('en');
    localStorage.setItem('lang', 'en');
  }

  changeLanguageToArabic = () => {
    i18n.changeLanguage('ar');
    localStorage.setItem('lang', 'ar');
  }

  render() {
    const { t } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {`${t('welcomeMes')}THIRU`}
          </p>
          <button onClick={() => { this.changeLanguageToEnglish() }}>change English</button>
          <br />
          <button onClick={() => { this.changeLanguageToArabic() }}>change Arabic</button>
        </header>
      </div>
    );
  }
}

export default withTranslation()(App);
