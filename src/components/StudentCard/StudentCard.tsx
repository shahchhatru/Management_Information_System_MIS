import './styles.css'

const StudentCard = () => {
  return (
    <div className='student-container'>
        <div className='profile-container'>
            <img src="/cuteboy.jpg" />
        </div>
        <div className='stu-body'>
            <div className='desc'>
                <h1>Student Name</h1>
                <h2>Student Roll</h2>
            </div>
            <div className='btn-container'>
                <button className='button-77 absent'>Absent</button>
                <button className='button-77 present'>Present</button>
            </div>
        </div>
    </div>
  )
}

export default StudentCard