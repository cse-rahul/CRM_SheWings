// import React from 'react';
// import { Row, Col, Tabs, Tab, Nav } from 'react-bootstrap';

// const BasicTabsPills = () => {
//   return (
//     <React.Fragment>
//       <Row>
//         <Col>
//           <h5>Basic Tabs</h5>
//           <hr />
//           <Tabs defaultActiveKey="home">
//             <Tab eventKey="home" title="HOME">
//               <p>
//                 Raw denim you probably haven&apos;t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master
//                 cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
//                 synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip
//                 quis cardigan american apparel, butcher voluptate nisi qui.
//               </p>
//             </Tab>
//             <Tab eventKey="profile" title="PROFILE">
//               <p>
//                 Food truck fixie locavore, accusamus mcsweeney&apos;s marfa nulla single-origin coffee squid. Exercitation +1 labore velit,
//                 blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth
//                 letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda
//                 labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan
//                 fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel.
//                 Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.
//               </p>
//             </Tab>
//             <Tab eventKey="contact" title="CONTACT">
//               <p>
//                 Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney&apos;s organic lomo retro fanny pack lo-fi
//                 farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia
//                 banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi
//                 whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven&apos;t
//                 heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.
//               </p>
//             </Tab>
//           </Tabs>

//           <h5 className="mt-4">Basic Pills</h5>
//           <hr />
//           <Tabs variant="pills" defaultActiveKey="home" className="mb-3">
//             <Tab eventKey="home" title="HOME">
//               <p>
//                 Raw denim you probably haven&apos;t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master
//                 cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
//                 synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip
//                 quis cardigan american apparel, butcher voluptate nisi qui.
//               </p>
//             </Tab>
//             <Tab eventKey="profile" title="PROFILE">
//               <p>
//                 Food truck fixie locavore, accusamus mcsweeney&apos;s marfa nulla single-origin coffee squid. Exercitation +1 labore velit,
//                 blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth
//                 letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda
//                 labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan
//                 fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel.
//                 Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.
//               </p>
//             </Tab>
//             <Tab eventKey="contact" title="CONTACT">
//               <p>
//                 Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney&apos;s organic lomo retro fanny pack lo-fi
//                 farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia
//                 banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi
//                 whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven&apos;t
//                 heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.
//               </p>
//             </Tab>
//           </Tabs>

//           <h5 className="mt-4">Vertical Pills</h5>
//           <hr />
//           <Tab.Container defaultActiveKey="home">
//             <Row>
//               <Col sm={3}>
//                 <Nav variant="pills" className="flex-column">
//                   <Nav.Item>
//                     <Nav.Link eventKey="home">HOME</Nav.Link>
//                   </Nav.Item>
//                   <Nav.Item>
//                     <Nav.Link eventKey="profile">PROFILE</Nav.Link>
//                   </Nav.Item>
//                   <Nav.Item>
//                     <Nav.Link eventKey="contact">CONTACT</Nav.Link>
//                   </Nav.Item>
//                   <Nav.Item>
//                     <Nav.Link eventKey="settings">SETTINGS</Nav.Link>
//                   </Nav.Item>
//                 </Nav>
//               </Col>
//               <Col sm={9}>
//                 <Tab.Content>
//                   <Tab.Pane eventKey="home">
//                     <p>
//                       Raw denim you probably haven&apos;t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth
//                       master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh
//                       dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum
//                       iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.
//                     </p>
//                   </Tab.Pane>
//                   <Tab.Pane eventKey="profile">
//                     <p>
//                       Food truck fixie locavore, accusamus mcsweeney&apos;s marfa nulla single-origin coffee squid. Exercitation +1 labore
//                       velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo
//                       booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud
//                       organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente
//                       labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa
//                       terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed
//                       echo park.
//                     </p>
//                   </Tab.Pane>
//                   <Tab.Pane eventKey="contact">
//                     <p>
//                       Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney&apos;s organic lomo retro fanny pack
//                       lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles
//                       etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork.
//                       Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester
//                       cred you probably haven&apos;t heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth
//                       chambray yr.
//                     </p>
//                   </Tab.Pane>
//                   <Tab.Pane eventKey="settings">
//                     <p>
//                       Eu dolore ea ullamco dolore Lorem id cupidatat excepteur reprehenderit consectetur elit id dolor proident in cupidatat
//                       officia. Voluptate excepteur commodo labore nisi cillum duis aliqua do. Aliqua amet qui mollit consectetur nulla
//                       mollit velit aliqua veniam nisi id do Lorem deserunt amet. Culpa ullamco sit adipisicing labore officia magna elit
//                       nisi in aute tempor commodo eiusmod.
//                     </p>
//                   </Tab.Pane>
//                 </Tab.Content>
//               </Col>
//             </Row>
//           </Tab.Container>
//         </Col>
//       </Row>
//     </React.Fragment>
//   );
// };

// export default BasicTabsPills;
import React, { useState } from 'react';
import "./clientAdd.css";

// Component for the form and adding/deleting the entries
function UserForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    address: '',
    phone: '',
    website: '',
    skypeId: '',
    facebookProfile: '',
    linkedinProfile: '',
    twitterProfile: '',
    shortNote: '',
    photo: null,
  });
  
  const [usersList, setUsersList] = useState([]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file input changes
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      photo: e.target.files[0], // store the file
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the new entry to the list
    setUsersList([...usersList, formData]);

    // Clear the form data
    setFormData({
      email: '',
      password: '',
      address: '',
      phone: '',
      website: '',
      skypeId: '',
      facebookProfile: '',
      linkedinProfile: '',
      twitterProfile: '',
      shortNote: '',
      photo: null,
    });
  };

  // Handle delete of an entry
  const handleDelete = (index) => {
    const updatedList = usersList.filter((_, i) => i !== index);
    setUsersList(updatedList);
  };

  return (
    <div className="container">
      <h1>Profile Form</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
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
          name="skypeId"
          placeholder="Skype ID"
          value={formData.skypeId}
          onChange={handleChange}
        />
        <input
          type="url"
          name="facebookProfile"
          placeholder="Facebook Profile Link"
          value={formData.facebookProfile}
          onChange={handleChange}
        />
        <input
          type="url"
          name="linkedinProfile"
          placeholder="LinkedIn Profile Link"
          value={formData.linkedinProfile}
          onChange={handleChange}
        />
        <input
          type="url"
          name="twitterProfile"
          placeholder="Twitter Profile Link"
          value={formData.twitterProfile}
          onChange={handleChange}
        />
        <textarea
          name="shortNote"
          placeholder="Short Note"
          value={formData.shortNote}
          onChange={handleChange}
        />
        <input
          type="file"
          name="photo"
          accept="image/*"
          onChange={handleFileChange}
        />
        <button type="submit">Add Profile</button>
      </form>

      <div className="user-list">
        <h2>Added Profiles</h2>
        {usersList.map((user, index) => (
          <div key={index} className="user-item">
            {user.photo && <img src={URL.createObjectURL(user.photo)} alt="Profile" className="profile-pic" />}
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <p>Short Note: {user.shortNote}</p>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserForm;
