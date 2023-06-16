import Container from "./components/Container";
import MiniNavbar from "./components/MiniNavbar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App bg-stone-50 min-h-screen w-screen ">
      <Navbar />
      <MiniNavbar />
      <Container />
    </div>
  );
}

export default App;