import { Routes, Route } from "react-router-dom";
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavouritesPage from './pages/Favourites';
import Layout from "./components/layout/Layout";
import HomePage from "./pages/Home";

function App() {
  return (
    <Layout>
        <Routes>
          <Route path='/home' element={<HomePage/>} />
          <Route path='/meetups' element={<AllMeetupsPage/>} />
          <Route path='/new-meetup' element={<NewMeetupPage/>} />
          <Route path='/favourites' element={<FavouritesPage/>}/>
        </Routes>
    </Layout>
  );
}
export default App;
