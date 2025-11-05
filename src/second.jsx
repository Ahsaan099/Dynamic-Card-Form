import axios from 'axios';
import React, { useState } from 'react'
import "./second.css";
 const Second = () => {
  const [name,setname] = useState("");
  const[email,setemail] = useState("");
  const [phone,setphone] = useState("");
  const [opinion,setopinion] = useState("");
  const [card,setcard] = useState(false);
  const [form,setform] = useState(true);




  const send = async () => {
    try {
      const snd = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        name: name,
        email: email,
        phone: phone,
        opinion: opinion,
      });
      console.log("Response:", snd.data);
      alert("Data sent successfully!");
    } catch (error) {
      console.error("Error sending data:", error);
    }
    setcard(true);
    setform(false);
  };
  return (
    <>
   {form && <div className="form">
      <h4 className="name">FullName<br/><br/>
<input type="text"
      className='form-inp'
      value={name}
      onChange={(e)=>setname(e.target.value)}
      placeholder='enter a name'
      />

      </h4>
      
       <h4 className="name">Email<br/><br/>
        <input type="text"
      className='form-inp'
      value={email}
      onChange={(e)=>setemail(e.target.value)}
      placeholder='enter an email'
      />
        </h4>
      

       <h4 className="name">Number<br/><br/>
       <input type="text"
      className='form-inp'
      value={phone}
      onChange={(e)=>setphone(e.target.value)}
      placeholder='Phone number'
      />
       </h4>
      

       <h4 className="name">Your opinion<br/><br/>
       <input type="text"
      className='form-inp'
      value={opinion}
      onChange={(e)=>setopinion(e.target.value)}
      placeholder='Your Opinion'
      />
       </h4>
    </div>}
    <button onClick={send}>Send</button>


   {card && <div className="card">
      <h4 className="crd-title">
        Name<br/><br/>
        <p className="p-card">{name}</p>
      </h4>


      <h4 className="crd-title">
        email<br/><br/>
        <p className="p-card">{email}</p>
      </h4>



      <h4 className="crd-title">
        phone<br/><br/>
        <p className="p-card">{phone}</p>
      </h4>




      <h4 className="crd-title">
        Opinion<br/><br/>
        <p className="p-card">{opinion}</p>
      </h4>
    </div>}
    </>
  )
}
export default Second;