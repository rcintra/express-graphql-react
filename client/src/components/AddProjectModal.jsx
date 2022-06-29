import { useMutation } from "@apollo/client";
import { useState } from "react";
import { FaList } from "react-icons/fa";
import { GET_PROJECTS } from "../queries/projectQueries";
import { ADD_PROJECT }  from "../mutations/projectMutations";

export default function AddProjectModal() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('new');


  const [addProject] = useMutation(ADD_PROJECT, {
    variables: { name, description, status },
    update(cache, { data: { addProject }}) {
        const { projects } = cache.readQuery({ query: GET_PROJECTS });
        cache.writeQuery({
            query: GET_PROJECTS,
            data: { projects: [...projects, addProject] },
        });
    }  
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (name === '' || description === '' || status === '') {
      return alert('Please fill in all fields');
    }

    addProject(name, description, status);

    setName('');
    setDescription('');
    setStatus('new');
    
  }

  return (
    <>
        <button type="button" className="btn btn-primary"  data-bs-toggle='modal'
            data-bs-target='#addProjectModal'>
            <div className="d-flex align-items-center">
                <FaList className="icon"></FaList>
                <div>New Project</div>
            </div>
        </button>
        <div className="modal fade" id='addProjectModal'
            aria-labelledby='addProjectModalLabel'
            aria-hidden='true'>
            <div className='modal-dialog'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title' id='addProjectModalLabel'>
                            New Project
                        </h5>
                        <button className="btn-close" data-bs-dismiss="modal" arial-label="close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={onSubmit}>
                            <div className='mb-3'>
                                <label className='form-label'>Name</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Description</label>
                                <textarea
                                    className='form-control'
                                    id='description'
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                ></textarea>
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Status</label>
                                <select
                                    id='status'
                                    className='form-select'
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                >
                                    <option value='new'>Not Started</option>
                                    <option value='progress'>In Progress</option>
                                    <option value='completed'>Completed</option>
                                </select>
                            </div>
                            <button
                                type='submit'
                                data-bs-dismiss='modal'
                                className='btn btn-primary'
                                >
                                Submit
                            </button>
                        </form>    
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

