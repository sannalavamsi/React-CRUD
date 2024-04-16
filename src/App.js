// import './App.css';
// import React, {useState, useEffect} from 'react';
// import { EmployeeData } from './EmployeeData';

// function App() {
//   const [data, setData] = useState([]);
//   const [firstName, setFirstName] = useState('')
//   const [lastName, setLastName] = useState('')
//   const [age, setAge] = useState(0)
//   const [id, setId] = useState(0)
//   const [isupdate, setIsUpdate] = useState(false)

//   useEffect(() => {setData(EmployeeData)},[])

//   const handleEdit = (id) => {
//     const dt = data.filter(item => item.id === id);
//     if (id !== undefined){
//       setIsUpdate(true)
//       setId(id);
//       setFirstName(dt[0].firstName);
//       setLastName(dt[0].lastName);
//       setAge(dt[0].age);
//     }
//   }

//   const handleDelete = (id) => {
//     if (id >0){
//       if (window.confirm("Are you sure to delete this item?")){
//         const dt = data.filter(item => item.id !== id);
//         setData(dt);
//       }   
//     }
//   }

//   const handleSave = (e) => {
//     let error = '';
//     if (firstName === ''){
//       error += 'First name is required,  ';
//     }
//     if (lastName === ''){
//       error += 'Last name is required,  ';
//     }
//     if (age <= 0){
//       error += 'Age is required,  ';
//     }
//     if (error === ''){
     
//     e.preventDefault();
//     const dt = [...data]
//     const newobject = {
//         id:EmployeeData.length + 1,
//         firstName : firstName,
//         lastName : lastName,
//         age : age
//     }
//     dt.push(newobject);
//     setData(dt)
//     }
//     else{
//       alert(error)
//     }
//   }
  
//   const handleUpdate = () => {
//     const index = data.map((item)=>{
//       return item.id 
//     }).indexOf(id);

//     const dt = [...data];
//     dt[index].firstName = firstName;
//     dt[index].lastName = lastName;
//     dt[index].age = age;
//     setData(dt);
//     handleClear();
//   }

//   const handleClear = () => {
//     setId(0);
//       setFirstName('');
//       setLastName('');
//       setAge('');
//       setIsUpdate(false);
//   }

//   return (
//     <div className='App'>

//       <div style={{display:'flex', justifyContent: 'center', marginTop:'10px', marginBottom:'10px'}}>
//         <div>
//           <label>First Name:
//             <input type='text' placeholder='Enter First Name' onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
//           </label>
//         </div>
//         <div>
//           <label>Last Name:
//             <input type='text' placeholder='Enter Last Name' onChange={(e) => setLastName(e.target.value)} value={lastName}/>
//           </label>
//         </div>
//         <div>
//           <label>Age:
//             <input type='text' placeholder='Enter Age' onChange={(e) => setAge(e.target.value)} value={age}/>
//           </label>
//         </div>
//         {
//           !isupdate ? 
//           <button className='btn btn-primary' onClick={(e) => handleSave(e)}>Save</button>
//           :
//           <button className='btn btn-primary' onClick={() => handleUpdate()}>Update</button>
//         }
//         <button className='btn btn-danger' onClick={() => handleClear()}>Clear</button>
//       </div>

//       <table className='table table-hover'>
//         <thead>
//           <tr>
//               <td>Sr.No</td>
//               <td>Id</td>
//               <td>First Name</td>
//               <td>Last Name</td>
//               <td>Age</td>
//               <td>Actions</td>
//           </tr>
//         </thead>
//         <tbody>
//           {
//             data.map((item, index) => {
//               return (
//                 <tr key={index}>
//                   <td>{index+1}</td>
//                   <td>{item.id}</td>
//                   <td>{item.firstName}</td>
//                   <td>{item.lastName}</td>
//                   <td>{item.age}</td>
//                   <td>
//                     <button className='btn btn-primary' onClick={() => handleEdit(item.id)}>Edit</button>
//                     <button className='btn btn-danger' onClick={() => handleDelete(item.id)}>Delete</button>
//                   </td>
//                 </tr>
//               )
//             })
//           }
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;

// version -- 2 ---------

// import './App.css';
// import React, {useState, useEffect} from 'react';
// import { EmployeeData } from './EmployeeData';

// function App() {
//   const [data, setData] = useState([]);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [age, setAge] = useState('');
//   const [id, setId] = useState(0);
//   const [isUpdate, setIsUpdate] = useState(false);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   useEffect(() => {
//     setData(EmployeeData);
//   }, []);

//   const handleEdit = (id) => {
//     const dt = data.find(item => item.id === id);
//     if (dt) {
//       setIsUpdate(true);
//       setId(id);
//       setFirstName(dt.firstName);
//       setLastName(dt.lastName);
//       setAge(dt.age);
//       setIsPopupOpen(true); // Open the pop-up window for editing
//     }
//   }

//   const handleDelete = (id) => {
//     if (id > 0 && window.confirm("Are you sure to delete this item?")) {
//       const dt = data.filter(item => item.id !== id);
//       setData(dt);
//     }
//   }

//   const handleSave = () => {
//     if (firstName.trim() === '' || lastName.trim() === '' || age.trim() === '') {
//       alert('All fields are required');
//       return;
//     }

//     const newObject = {
//       id: data.length + 1,
//       firstName: firstName,
//       lastName: lastName,
//       age: age
//     };
//     setData([...data, newObject]);
//     setIsPopupOpen(false);
//     handleClear();
//   }

//   const handleUpdate = () => {
//     const index = data.findIndex(item => item.id === id);
//     if (index !== -1) {
//       const updatedData = [...data];
//       updatedData[index] = {
//         ...updatedData[index],
//         firstName: firstName,
//         lastName: lastName,
//         age: age
//       };
//       setData(updatedData);
//       setIsPopupOpen(false);
//       handleClear();
//     }
//   }

//   const handleClear = () => {
//     setId(0);
//     setFirstName('');
//     setLastName('');
//     setAge('');
//     setIsUpdate(false);
//   }

//   return (
//     <div className='App'>
//       <button className='btn btn-primary' onClick={() => setIsPopupOpen(true)}>Add Record</button>

//       {isPopupOpen && (
//         <div className="popup">
//           <div className="popup-inner">
//             <h2>{isUpdate ? 'Edit Record' : 'Add Record'}</h2>
//             <label>First Name:
//               <input type='text' placeholder='Enter First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
//             </label>
//             <label>Last Name:
//               <input type='text' placeholder='Enter Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
//             </label>
//             <label>Age:
//               <input type='number' placeholder='Enter Age' value={age} onChange={(e) => setAge(e.target.value)} />
//             </label>
//             <button className='btn btn-primary' onClick={isUpdate ? handleUpdate : handleSave}>{isUpdate ? 'Update' : 'Save'}</button>
//             <button className='btn btn-danger' onClick={() => { setIsPopupOpen(false); handleClear(); }}>Cancel</button>
//           </div>
//         </div>
//       )}

//       <table className='table table-hover'>
//         <thead>
//           <tr>
//             <th>Sr.No</th>
//             <th>Id</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Age</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => (
//             <tr key={index}>
//               <td>{index + 1}</td>
//               <td>{item.id}</td>
//               <td>{item.firstName}</td>
//               <td>{item.lastName}</td>
//               <td>{item.age}</td>
//               <td>
//                 <button className='btn btn-primary' onClick={() => handleEdit(item.id)}>Edit</button>
//                 <button className='btn btn-danger' onClick={() => handleDelete(item.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;


// version -- 3
// import React, { useState } from 'react';

// function App() {
//   const [data, setData] = useState([]);
//   const [formData, setFormData] = useState({
//     id: null,
//     firstName: '',
//     lastName: '',
//     age: ''
//   });
//   const [isEditing, setIsEditing] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!isEditing) {
//       setData([...data, { ...formData, id: Date.now() }]);
//     } else {
//       setData(data.map(item => (item.id === formData.id ? formData : item)));
//       setIsEditing(false);
//     }
//     setFormData({ id: null, firstName: '', lastName: '', age: '' });
//   };

//   const handleEdit = (id) => {
//     const itemToEdit = data.find(item => item.id === id);
//     setFormData({ ...itemToEdit });
//     setIsEditing(true);
//   };

//   const handleDelete = (id) => {
//     setData(data.filter(item => item.id !== id));
//   };

//   return (
//     <div className='App'>
//       <h1>React CRUD Application</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type='text'
//           name='firstName'
//           placeholder='First Name'
//           value={formData.firstName}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type='text'
//           name='lastName'
//           placeholder='Last Name'
//           value={formData.lastName}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type='number'
//           name='age'
//           placeholder='Age'
//           value={formData.age}
//           onChange={handleChange}
//           required
//         />
//         <button type='submit'>{isEditing ? 'Update' : 'Add'}</button>
//       </form>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Age</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map(item => (
//             <tr key={item.id}>
//               <td>{item.id}</td>
//               <td>{item.firstName}</td>
//               <td>{item.lastName}</td>
//               <td>{item.age}</td>
//               <td>
//                 <button onClick={() => handleEdit(item.id)}>Edit</button>
//                 <button onClick={() => handleDelete(item.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;

// preventDefault() -----------
import React, { useState } from 'react';

function MyForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Here you can handle the form submission logic
    console.log('Form submitted:', formData);

    // Optionally, you can clear the form fields after submission
    setFormData({ username: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
