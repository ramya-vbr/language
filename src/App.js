// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import i18n from "./i18n";
import Welcome from "./Welcome";
import { Suspense } from "react";
import localeContext from "./localeContext";

function Loading() {
  return <>Loading...</>;
}

function App() {
  const [locale, setLocale] = useState(i18n.language);

  i18n.on("languageChanged", (lng) => setLocale(i18n.language));

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <localeContext.Provider value={{ locale, setLocale }}>
          <Suspense fallback={<Loading />}>
            <div>
              <label>select lang</label>
              <select value={locale} onChange={handleChange}>
                <option value="en">English</option>
                <option value="cn">chinese(T)</option>
              </select>
            </div>
            <Welcome />
          </Suspense>
        </localeContext.Provider>
      </header>
    </div>
  );
}

export default App;
