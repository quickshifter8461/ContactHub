import React, { useState, useEffect } from "react";

const SavedContacts = () => {
  const [savedContacts, setSavedContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    setSavedContacts(contacts);
  }, []);

  const handleDelete = (index) => {
    const updatedContacts = savedContacts.filter((_, i) => i !== index);
    setSavedContacts(updatedContacts);
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredContacts = savedContacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Saved Contacts</h2>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      {filteredContacts.length === 0 ? (
        <p>No contacts match your search.</p>
      ) : (
        <ul className="list-group">
          {filteredContacts.map((contact, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center p-3"
            >
              <div className="d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  fill="green"
                  class="bi bi-person-circle me-3"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                  />
                </svg>
                <div className="ms-3">
                  <p className="fs-5">
                    <strong>Name: </strong> {contact.name}
                  </p>
                  <p className="fs-5">
                    <strong>Email: </strong> {contact.email}
                  </p>
                  <p className="fs-5">
                    <strong>Mobile: </strong> {contact.mobile}
                  </p>
                </div>
              </div>
              <button
                className="btn btn-danger btn-md me-3"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SavedContacts;
