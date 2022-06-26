import './App.css';
import React from 'react';
import Header from './Header'
import Content from './Content';
import Footer from './Footer';

// exercício 1 const Task = (value) => {
/*   return (
    <li>{value}</li>
  );
}
 */
// exercício 1.3 const tarefas = ['ler a bíblia', 'montar o dia', 'correr']

class App extends React.Component {
  render() {
    return (
      // exercício 1.3  <ul>{tarefas.map((action) => Task(action))}</ul>
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}

export default App;
