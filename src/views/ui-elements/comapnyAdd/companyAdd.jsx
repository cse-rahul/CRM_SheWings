import React, { useState } from 'react';
import "./companyAdd.css";

// Component for adding/editing companies
function CompanyForm() {
  const [formData, setFormData] = useState({
    name: '',
    logo: null,
    associatedPerson: '',
    website: '',
    contact: '',
  });
  
  const [companies, setCompanies] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // Track which item to edit

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file input for company logo
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      logo: e.target.files[0], // store the logo file
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex === null) {
      // Add new company
      setCompanies([...companies, formData]);
    } else {
      // Update existing company
      const updatedCompanies = companies.map((company, index) =>
        index === editIndex ? formData : company
      );
      setCompanies(updatedCompanies);
      setEditIndex(null); // Reset edit mode
    }

    // Clear the form
    setFormData({
      name: '',
      logo: null,
      associatedPerson: '',
      website: '',
      contact: '',
    });
  };

  // Handle delete of a company entry
  const handleDelete = (index) => {
    const updatedCompanies = companies.filter((_, i) => i !== index);
    setCompanies(updatedCompanies);
  };

  // Handle edit of a company entry
  const handleEdit = (index) => {
    setFormData(companies[index]);
    setEditIndex(index); // Set the index to edit
  };

  return (
    <div className="container">
      <h1>Company Form</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          placeholder="Company Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="file"
          name="logo"
          accept="image/*"
          onChange={handleFileChange}
        />
        <input
          type="text"
          name="associatedPerson"
          placeholder="Associated Person"
          value={formData.associatedPerson}
          onChange={handleChange}
        />
        <input
          type="url"
          name="website"
          placeholder="Website"
          value={formData.website}
          onChange={handleChange}
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact"
          value={formData.contact}
          onChange={handleChange}
        />
        <button type="submit">{editIndex === null ? 'Add Company' : 'Update Company'}</button>
      </form>

      <div className="company-list">
        <h2>Added Companies</h2>
        {companies.map((company, index) => (
          <div key={index} className="company-item">
            {company.logo && <img src={URL.createObjectURL(company.logo)} alt="Company Logo" className="logo" />}
            <p><strong>Name:</strong> {company.name}</p>
            <p><strong>Associated Person:</strong> {company.associatedPerson}</p>
            <p><strong>Website:</strong> <a href={company.website} target="_blank" rel="noopener noreferrer">{company.website}</a></p>
            <p><strong>Contact:</strong> {company.contact}</p>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompanyForm;
