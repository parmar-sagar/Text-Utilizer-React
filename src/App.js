import './App.css';
// import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
      <NavBar title="TextUtils SAGAR"/>
      <div className="container">
        <TextForm heading="Enter the text to analyze below" />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
