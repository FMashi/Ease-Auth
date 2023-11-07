import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import {
  Home,
  Login,
  // Signup,
  // PasswordChange,
  // PasswordReset,
  // PasswordResetConfirm,
  // EmailVerification,
} from "./pages/index";

function App() {
  return (
    <Router>
    <Layout>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="Login/" Component={Login}></Route>
        <Route path="signup/" Component={Signup}></Route>
        <Route path="change/password/" Component={PasswordChange}></Route>
        <Route path="reset/password/" Component={PasswordReset}></Route>
        <Route
          path="api/auth/password/reset/confirm/:uid/:token"
          Component={PasswordResetConfirm}
        ></Route>
        <Route
          path="/api/auth/registration/verify-email/:key"
          Component={EmailVerification}
        ></Route>
      </Routes>
    </Layout>
  </Router>
  );
}

export default App;
