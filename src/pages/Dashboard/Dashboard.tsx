import { AdminOptionCard } from "../../components";
import "./styles.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="header">
        <h1>Dashboard</h1>
      </div>
      <div className="activity-container">
        <h2>Actions</h2>
        <div className="activity-list">
        <AdminOptionCard
            linkaddr="/register/teacher"
            Iid="1"
            imgPath="/office.svg"
            imgtext="create teacher"
            title="Register Teacher"
          />
          <AdminOptionCard
          linkaddr="/register/student"
          Iid="2"
          imgPath="/student.svg"
          imgtext="create student"
          title="Register student"
          />
        </div>
      </div>
      <div className="event-container">
        <h2>Recent Events</h2>
        <div className="event-list">
    
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
