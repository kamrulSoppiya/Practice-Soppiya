// import Details from './components/pages/Details';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/styles/App.css";
import Layout from '../src/components/Layout';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Result from './components/pages/Result';
import Signup from './components/pages/Signup';
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
          <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                {/* <Route path="/details" element={<Details />} /> */}
                <Route element={<PrivateRoute  />}>
                  <Route path="/result" element={<Result />} />
                </Route>
            </Routes>
          </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;