import Board from './components/Board';

function App() {
  return (
    <div className="App h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl sm:text-4xl mb-6 text-center">Карточная игра</h1>
      <Board />
    </div>
  );
}

export default App;
