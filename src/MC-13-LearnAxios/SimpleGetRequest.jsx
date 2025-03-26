import { useEffect, useState } from 'react';
import axios from 'axios';

export const SimpleGetRequest = () => {

  const [data, setData] = useState([]);

  async function getData() {
    const data = await axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        id: 1,
      },
      //Now the Autorization is added to every request you send you can check in Network tab.
      headers: {
        Authorization: 'Bearer YOUR_ACCESS_TOKEN'
      }
    });
    setData(data.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data.length > 0 && (
        <div>
          {data.map((ele, index) => (
            <div>{ele.title};</div>
          ))}
        </div>
      )}
    </div>
  )
}