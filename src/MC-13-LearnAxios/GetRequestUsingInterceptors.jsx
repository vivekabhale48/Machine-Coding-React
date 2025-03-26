import { useEffect, useState } from 'react';
import api from './axios/axiosInterceptors';

export const GetRequestUsingInterceptors = () => {
  const [data, setData] = useState([]);

  async function getData() {
    const data = await api.get('/posts');
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
            <div key={index}>{ele.title};</div>
          ))}
        </div>
      )}
    </div>
  );
};
