import './App.css';
import HomeScreen from './Pages/HomeScreen';
import MyButton from './Components/MyButton'
import MyInput from './Components/MyInput';
import { useState, useEffect } from "react";
import { useGetProductsQuery, useGetProductCommentsQuery, useCreateProductCommentMutation } from './Services/API';
//import { CartProvider } from './Context/CarContext';;

function App() {
  const launchAlert = () => alert('alerte')
  const launchConsole = () => console.log('console')

  let [mail, setMail] = useState("");
  let [password, setPassword] = useState("");
  let { data, isLoading } = useGetProductsQuery();

  return (
    <div className="App">
      <header className="App-header">
        <MyButton text='Alert' onClick={launchAlert} />
        <MyButton text='Console log' onClick={launchConsole} />
        <MyInput text="Mail" value={mail} onChange={(e) => setMail(e.target.value)} />
        <MyInput text="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <span>{mail}</span>
        <span>{password}</span>

        {!isLoading ? (
          data.map((article) => {
            console.log(article)
            return (
              <div>
                <h3>{article.title}</h3>
                <p>{article.content}</p>
                <psan>Proute</psan>
              </div>
            );
          })
        ) : (
          <span>Loading</span>
        )}
      </header>
    </div>
  );
}

export default App;
