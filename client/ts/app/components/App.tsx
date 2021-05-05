import React, { useEffect, useState } from 'react';
 
export const App: React.FC = () => {
  const [response, setResponse] = useState<Response>();
  useEffect(() => {
    const get = async () => {
      const res = await fetch('/api', {
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
  console.log(process.env.NODE_ENV)
  return (
    <>
      <h1>Hello Typescript-React!</h1>
    </>
  );
}