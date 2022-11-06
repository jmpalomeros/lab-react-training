// import logo from './logo.svg';
import './App.css';
import IdCard from "./components/IdCard.jsx"
import Greetings from "./components/Greetings"
import Ramdon from './components/Ramdon';
import BoxColor from './components/BoxColor';


function App() {

//   const idArr = [
//     {lastName : "Doe", firstName : "John", gender:"male", height : 178, birth: "1992-07-14", picture:"https://randomuser.me/api/portraits/men/44.jpg"},
//     {lastName:'Delores ', firstName:'Obrien', gender:'female', height: 172, birth: "1988-05-11", picture:"https://randomuser.me/api/portraits/women/44.jpg"}
// ]



  return (
    <div className="App">

      <IdCard />
      <Greetings lang="Hallo" children="Stephan"/>
      <Ramdon />
      <BoxColor />
      
    </div>
  );
}

export default App;
