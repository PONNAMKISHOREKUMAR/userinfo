import './index.css'
const UserCollection = ({ users, editUser, deleteUser, isDarkMode }) => {
    return (
      <div className={`user-collection ${isDarkMode ? "dark-mode" : ""}`}>
        <h2 className="user-collection-title">User Information </h2>
        <ul className="user-list">
          {users.map((user) => (
            <li key={user.id} className="user-item">
              <div className="user-details">
                {user.firstName} {user.lastName} - {user.email} - {user.department}
              </div>
              <div className="user-actions">
                <button
                  className="action-button edit-button"
                  onClick={() => editUser(user)}
                >
                  Edit
                </button>
                <button
                  className="action-button delete-button"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default UserCollection;
  