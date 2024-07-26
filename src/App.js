// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import custom Navbar component
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page.jsx';
import Login from './Components/Login/Login.jsx';
import Sign_Up from './Components/Sign_Up/Sign_Up.jsx';

// Function component for the main App
function App() {

    // Render the main App component
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Landing_Page />} />
                    <Route path='/Login' element={<Login />} />
                    <Route path='/SignUp' element={<Sign_Up />} />

                </Routes>
            </BrowserRouter>
        </div>
    );
}

// Export the App component as the default export
export default App;