import React from 'react'
import AddProjectModal from '../components/AddProjectModal';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <>
        <div className="d-flex gap-3 mb-4">
            { 
              <AddProjectModal />
            }
        </div>        
        <Projects />
        <hr />
    </>
  )
}
