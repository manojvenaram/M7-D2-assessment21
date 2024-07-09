import logo1 from './logo1.svg';
import './App.css';

function App() {
  let n=0;
  const handleDetail=()=>{
    
    if (n%2==0){
      document.getElementById('id2').innerHTML="HideDetails"
      document.getElementById('id1').innerHTML="Additional details or content can go here..."
    }
    else{
      document.getElementById('id2').innerHTML="ShowDetails"

    document.getElementById("id1").innerHTML=""
    
    }
    n++;
  }
  return (
    <div className="App">
      <div class="container">
        <img src={logo1} className="App-logo" alt="logo" />
        <p className="id4" ><strong>NAME : MANOJ V </strong><br></br></p>
        <p className="id3">RegisterNumber:212221240025</p>
        <button className="button" onClick={handleDetail} id="id2">Show Details</button>
        <br></br>
        <div id="id1"></div>
        </div>
        
    </div>
  );
}

export default App;
