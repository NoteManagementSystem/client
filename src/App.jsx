import './App.css'

function App() {
 

  return (
    <div className='note-management-container'>
      <h3>Note management system</h3>
      <div className='add-note-field'>
        <h3>Add new note!</h3>
      </div>
      <div className='notes-tanle-field'>
        <h3>Note table field</h3>
        <table className='table'>
          <tr>
            <th>Note Id</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
          <tbody>
            <tr>
              <td>1</td>
              <td>Clean</td>
              <td>Clean until 19:30</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
