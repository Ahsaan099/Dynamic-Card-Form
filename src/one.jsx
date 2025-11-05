import axios from 'axios';
import React, { useState } from 'react';
import './one.css'; 

const One = () => {
  const [data, setData] = useState([]);
 const [button,setbutton] = useState(true);
const [mainn,setmainn] = useState(false)
  const user = async () => {
    const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=100");
    setData(response.data);
      setbutton(false)
   setmainn(true);
  };

  return (
    <>
      { mainn && <div className='mainn'>
        {data.map((item, index) => (
          <div className="submain" key={index}>
            <img src={item.download_url} alt="pic" />
            <p>{item.author}</p>
          </div>
        ))}
      </div>}
  { button && <button onClick={user}>Click me</button>}
    </>
  );
};

export default One;
