import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';
import TaskForm from './pages/TaskForm';
import TasksPage from './pages/TasksPage'

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<TasksPage />} />
        <Route path='/new' element={<TaskForm />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;