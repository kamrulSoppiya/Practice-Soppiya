import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/styles/App.css";
import Layout from '../src/components/Layout';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Result from './components/pages/Result';
import Signup from './components/pages/Signup';
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import QuizDataClient from './components/Quiz/QuizDataClinet';
import NavContext from "./context/NavContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <NavContext>  
          <Layout>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/quiz/:id" element={<QuizDataClient/>} />
                <Route exact element={<PrivateRoute  />}>
                  {/* <Route exact path="/quiz/:id" element={<QuizDataClient/>} /> */}
                  <Route exact path="/result/:id" element={<Result />} />
                </Route>
            </Routes>
          </Layout>
        </NavContext>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;