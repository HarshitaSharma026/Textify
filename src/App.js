import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

// whatever written inside this App.js will be rendered on the webpage after npm start
function App() {
  return (
    <>
      <Navbar title = "TextUtils" aboutText = "About TextUtils" />
      <div className="container my-3">
        <TextForm heading="Enter your text here"/>  
      </div>
      
    </>
  );
}

export default App;
