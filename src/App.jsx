import { useEffect, useState } from "react";


const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    const url = `http://localhost:5000/users`
    fetch(url)
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
     <div className="text-center">
      <form onSubmit={handleSubmit}>
      <input type="text" name="name" className="border border-purple-400" id="" required/>
      <br />
      <input type="email" name="email" className="border border-purple-400 my-3" id=""  required/>
      <br />
     <button className="bg-purple-500 px-3 rounded" type="submit">Submit</button>
      </form>
     </div>

      <section className="text-center">
      <h2 className="text-3xl font-bold text-orange-500">Main content Are Coming here: {users.length}</h2>
      <div>
      {users.map(user => <p key={user.id}>{user.name} {user.email}</p> )}
      </div>
      </section>
    </main>
  );
};

export default App;