import { Route, Routes } from 'react-router-dom'
import ProjectAndTaskPage from './pages/ProjectAndTaskPage/ProjectAndTaskPage'
import AuthPage from './pages/AuthPage/AuthPage'
import PageLayout from './Layouts/PageLayout/PageLayout'
import Dashboard from './pages/Dashboard/Dashboard'
import DiscussionBoard from './pages/DiscussionBoard/DiscussionBoard'
import NewProject from './pages/ProjectAndTaskPage/NewProject'
import HomePage from './pages/HomePage/HomePage'
import TestingPage from './pages/TestingPage'
import ProjectViewPage from './pages/ProjectAndTaskPage/ProjectViewPage'
import TaskList from './pages/ProjectAndTaskPage/TaskList'

function App() {
  
    return (
    <>
    <PageLayout>
      <Routes>
      
        <Route path ='/' element={<HomePage/>}/>
        <Route path ='/auth' element={<AuthPage/>}/>
        <Route path ='/dashboard' element={<Dashboard/>}/>
        <Route path ='/project-and-task' element={<ProjectAndTaskPage/>}/>
        <Route path='/project-view-page' element={<ProjectViewPage/>}/>
        <Route path ='/new-project' element ={<NewProject/>}/>
        <Route path ='/discussion-board' element={<DiscussionBoard/>}/>
        <Route path ='/testingPage' element ={<TestingPage/>}/>
        <Route path='tasklist' element={<TaskList/>}/>
      </Routes>
    </PageLayout>
      
    </>
  )
}

export default App;
