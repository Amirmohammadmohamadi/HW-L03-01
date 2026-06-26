
import UserList from './components/UsetList';

const users = [
  {
    id: 1,
    name: "Ali Rezaei",
    age: 24,
    city: "Tehran",
  },
  {
    id: 2,
    name: "Sara Mohammadi",
    age: 29,
    city: "Shiraz",
  },
  {
    id: 3,
    name: "Mina Hosseini",
    age: 21,
    city: "Isfahan",
  },
  {
    id: 4,
    name: "Mohammad Ahmadi",
    age: 33,
    city: "Mashhad",
  },
  {
    id: 5,
    name: "Narges Karimi",
    age: 27,
    city: "Tabriz",
  },
  {
    id: 6,
    name: "Hossein Ahmadi",
    age: 31,
    city: "Kerman",
  },
  {
    id: 7,
    name: "Fatemeh Moradi",
    age: 23,
    city: "Rasht",
  },
  {
    id: 8,
    name: "Reza Karimi",
    age: 35,
    city: "Yazd",
  },
  {
    id: 9,
    name: "Zahra Ahmadi",
    age: 26,
    city: "Qom",
  },
  {
    id: 10,
    name: "Amir Hosseini",
    age: 30,
    city: "Ahvaz",
  },
];

function App() {

  return (
    <>
      <UserList  user_list={users}/>
    </>
  )
}

export default App;
