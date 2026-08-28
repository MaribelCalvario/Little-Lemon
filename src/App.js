import './App.css';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="page-wrapper">
      <Nav />
      <Main /> {/* Make sure <Header /> is NOT typed here anymore */}
      <Footer />
    </div>
  );
}

export default App;
