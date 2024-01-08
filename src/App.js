
import Board from './component/Board'
function App() {
  const squares = [[1,2,3],[4,5,6],[7,8,9]]
  return (
    <div className="App">
      <Board squares={squares} />
    </div>
  );
}




export default App;
