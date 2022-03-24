import './App.css';
import { Button } from './Components/Button';

function App() {
  return (
    <div className="App">
      <Button border={"none"} background={"#2693ff"} color={"white"} > Primary Button </Button>
      <Button border={"1px solid black"} background={"white"} color={"black"} > Default Button </Button>
      <Button border={"1px dashed black"} background={"white"} color={"black"} > Dashed Button </Button>
      <Button border={"none"} background={"white"} color={"black"} > Text Button </Button>
      <Button border={"none"} background={"white"} color={"#2693ff"} > Link Button </Button>
    </div>
  );
}

export default App;
