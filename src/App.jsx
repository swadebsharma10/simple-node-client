import { useEffect, useState } from "react";
import User from "./components/User";


const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(()=>{

    fetch(`http://localhost:5000/users`)
    .then(res => res.json())
    .then(data => setUsers(data))
    
  }, []);


  const handleSubmit =event =>{
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user ={name, email}
    fetch('http://localhost:5000/users',{
      method:'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data =>{
      const newUsers = [...users, data];
      setUsers(newUsers);
    });

    event.target.reset();
  }

  return (
    <main className="max-w-4xl mx-auto mt-5">
     <div className="text-center my-5">
      <form onSubmit={handleSubmit}>
      <input type="text" name="name" className="border border-purple-400" id="" required/>
      <br />
      <input type="email" name="email" className="border border-purple-400 my-3" id=""  required/>
      <br />
     <button className="bg-purple-500 px-3 rounded" type="submit">Submit</button>
      </form>
     </div>

     <hr />

      <section>
      <h2 className="text-2xl font-bold text-orange-500 text-center">Users: {users.length}</h2>
      <div className="p-5">
      {users.map((user, idx) => <User
        key={user._id}
        user={user}
        idx={idx}
        ></User>)}
      </div>
      </section>
    </main>
  );
};

export default App;