import React, { useEffect, useState } from 'react';
 
export const App: React.FC = () => {
  const [response, setResponse] = useState<Response>();
  useEffect(() => {
    const get = async () => {
      const res = await fetch('/api/users', {
        headers:{
          "accepts":"application/json"
        }
      }
      );
      setResponse(await res.json());
    };
    get();
  }, []);
  console.log(response)
  return (
    <>
      <h1>Hello Typescript-React!</h1>
      <form action="/api/images" method="POST" encType="multipart/form-data">
        <div>
          <label htmlFor="image">画像をアップロード</label>
          <input type="file" id="image" name="image" defaultValue="" required></input>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
    </form>
    </>
  );
}