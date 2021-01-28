import logo from './logo.svg';
import './App.css';
var firebase = require('firebase/app')
require('firebase/auth')
require('firebase/database')

function App() {
count [form, setForm] = useState([])
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL4xBKNIhTXeWb3NzkshO3aOfc1mveRo4",
  authDomain: "doli-doffin.firebaseapp.com",
  databaseURL: "https://doli-doffin-default-rtdb.firebaseio.com",
  projectId: "doli-doffin",
  storageBucket: "doli-doffin.appspot.com",
  messagingSenderId: "832880945140",
  appId: "1:832880945140:web:4cb516ab0eb75e50db3ba1",
  measurementId: "G-DY94RRFXFK"
};

firebase.initializeApp(firebaseConfig)

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig)
}

var database = firebase.database()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
