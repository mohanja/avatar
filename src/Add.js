import { useState } from "react";

export function Add({ users, setUsers }) {


  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [couser, setCouser] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const imgFilehandler = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };
  return (
    <div>
      <div className="add-user">
        <button>
          Upload image
          <input accept="image/*" multiple type="file" onChange={imgFilehandler} />
        </button>

        <input type="text" placeholder="Name" onChange={(event) => setName(event.target.value)} />

        <input type="text" placeholder="Course" onChange={(event) => setCouser(event.target.value)} />
        <input type="text" placeholder="Email" onChange={(event) => setEmail(event.target.value)} />
        <input type="text" placeholder="Number" onChange={(event) => setNumber(event.target.value)} />
        <button onClick={() => {
          const newUsers = {
            image: image,
            name: name,
            couser: couser,
            email: email,
            number: number
          };

          setUsers([...users, newUsers]);
        }}>add user</button>
      </div>
    </div>
  );
}


