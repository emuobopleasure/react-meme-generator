import './App.css';
import Form from './components/Meme';
import Header from './components/Header';

function App() {
  return (
    <div className="app text-white max-w-lg mx-auto bg-slate-100 h-[100vh] mb-auto">
      <Header/>
      <Form/>
    </div>
  );
}

export default App;
