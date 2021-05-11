import React, { useEffect, useState } from 'react';
import { Counter } from './Counter'
 
export const App: React.FC = () => {
  const [response, setResponse] = useState<{_id: string,data: {type: string, data: SharedArrayBuffer}}[]>();
  const [count, setCount] = useState<{count: number}>();
  useEffect(() => {
    const get = async () => {
      const res = await fetch('/api/images', {
        headers:{
          "accepts":"application/json"
        }
      }
      );
      setResponse(await res.json());
      const countResponse = await fetch('/api/images/count')
      setCount(await countResponse.json())
    };
    get();
  }, []);
  console.log(response)
  const deleteImage = (id) => {
    fetch(`/api/images/${id}`, {
      method: 'DELETE'
    }).then(() => {
      window.location.reload()
    })

  }
  return (
    <>
     <div>
        {count?.count}
     </div>
     <Counter/>
      {
        response?.map((eachImage) => {
          function arrayBufferToBase64( buffer ) {
            var binary = '';
            var bytes = new Uint8Array( buffer );
            var len = bytes.byteLength;
            for (var i = 0; i < len; i++) {
              binary += String.fromCharCode( bytes[ i ]! );
            }
            return window.btoa( binary );
          }
          const src = "data:image/png;base64," + arrayBufferToBase64(eachImage.data.data)
          return (
            <>
              <img src={src} key={eachImage._id}></img>
              <button key={eachImage._id+'button'} onClick={() => {deleteImage(eachImage._id)}}>delete</button>
            </>
          )
        })
      }
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