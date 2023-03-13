import { useState } from "react";
import Banner from "./components/Banner"
import Form from "./components/Form";
import Team from "./components/Team";


function App() {

  const teams = [
    {
      name: 'Programação',
      firstColor: '#57C278',
      secondColor: '#D9F7E9'
    },
    {
      name: 'Front-End',
      firstColor: '#82CFFA',
      secondColor: '#E8F8FF'
    },
    {
      name: 'Data Science',
      firstColor: '#A6D157',
      secondColor: '#F0F8E2'
    },
    {
      name: 'Devops',
      firstColor: '#E06B69',
      secondColor: '#FDE7E8'
    },
    {
      name: 'UX e Design',
      firstColor: '#DB6EBF',
      secondColor: '#FAE9F5'
    },
    {
      name: 'Mobile',
      firstColor: '#FFBA05',
      secondColor: '#FFF5D9'
    },
    {
      name: 'Inovação e Gestão',
      firstColor: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }

  ]

  const [workers, setWorkers] = useState([]);
  
  const newWorker = (worker) => {
    setWorkers([...workers, worker])
    console.log(worker)
  }

  console.log(workers)

  return (
    <div className="App">
      <Banner />
      <Form
        teams={teams.map(team => team.name)} 
        addWorker={worker => newWorker(worker)}
      />
      {teams.map(team => <Team 
        key={team.name} 
        name={team.name} 
        firstColor={team.firstColor} 
        secondColor={team.secondColor}
        workers={workers.filter(worker => worker.team === team.name)}
        />)}
    </div>
  );
}

export default App;
