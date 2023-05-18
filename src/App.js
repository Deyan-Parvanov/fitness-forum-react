import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { AuthProvider } from './AuthContext/AuthContext';
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Logout } from "./components/Logout/Logout";
import { Register } from "./components/Register/Register";
import { Profile } from "./components/Profile/Profile";
import { Forum } from "./components/Forum/Forum";
import { Create } from "./components/Create/Create";
import { Edit } from "./components/Edit/Edit";
import { topicServiceGenerator } from './services/topicService';

function App() {
  const navigate = useNavigate();
  const [topics, setTopics] = useState([]);
  
  const topicService = topicServiceGenerator();
  

  useEffect(() => {
    topicService.getAll()
      .then(result => {
        setTopics(result);
      });
  }, []);

  const onCreateTopicHandler = async (data) => {
    const newTopic = await topicService.create(data);

    setTopics(state => [...state, newTopic]);

    navigate('/');
  };

  const onTopicEditSubmit = async (values) => {
    const result = await topicService.edit(values._id, values);

    setTopics(state => state.map(x => x._id === values._id ? result : x))

    navigate(`/forum/${values._id}`);
  };

  

  return (
    <AuthProvider>
      <div className="prime">
        <Header />

        <main>
          <Routes>
            <Route path='/' element={<Home topics={topics} />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/forum/:topicId' element={<Forum />} />
            {/* <Route path='/' element={<Forum />} /> */}
            <Route path='/create' element={
                <Create onCreateTopicHandler={onCreateTopicHandler} />
            } />
            <Route path='/forum/:topicId/edit' element={<Edit onTopicEditSubmit={onTopicEditSubmit} />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
