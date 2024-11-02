// App.js
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './componets/PageNotFound';
import Password from './componets/Password';
import Profile from './componets/Profile';
import Recovery from './componets/Recovery';
import Register from './componets/Register';
import Reset from './componets/Reset';
import Username from './componets/Username';

const App = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<Username />} />
        <Route path="/password" element={<Password />} />
        <Route path="/recovery" element={<Recovery />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/reset" element={<Reset />} />
        {/* Add a catch-all route for 404 pages */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
