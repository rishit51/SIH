// import React, { useCallback, useState } from 'react';
// import { useDropzone } from 'react-dropzone';
// import ImagePreview2 from './components/ImagePreview2.jsx';
// import RightSidebar from './components/SideBar.jsx';
// import useLast10Attempts from './hooks/setAttempts.js';

// function App() {
//  const [input, setInput] = useState([]);
//  const [attempts,addAttempt]=useLast10Attempts()
//  const [output,setOutput]=useState();
//  const [parameters,setParameters]=useState({}) 


//  const onDrop = useCallback(acceptedFiles => {
//     // addAttempt(input,output,parameters)  
//     setInput(acceptedFiles.map(file => Object.assign(file, {
//       preview: URL.createObjectURL(file)
//     })));
    
//  }, []);

//  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});



//  return (
//   <div className='main'>
//     <div className='parameters'>
      
//       <h2>Parameters</h2>
//       <hr></hr>
//       <div>
//         <div className='ParametersPanel'>
// Hi
//         </div>
//         <div className='ParametersPanel'>
// Hi
//         </div>
//       </div>
//       </div><div className='dragPreview'>
//     <div {...getRootProps()} className='selectfield'>
//       <input {...getInputProps()} />
//       {
//         isDragActive ?
//           <p>Drop the files here ...</p> :
//           <p>Drag 'n' drop some files here, or click to select files</p>
//       }
   
//     </div>
//     {input.length ?
//     <aside className='list'>
//         <h4>Output:</h4>
//        {input.map((file) => <center key={file.name}> <ImagePreview2 file={file} /></center>)}
//       </aside> : ''}
// {/*   !!!! For final integration ....     
//        {output.map((file) => <center key={file.name}> <ImagePreview2 file={file} /></center>)}
//       </aside> : ''}  */}
      
//       </div>


//       <RightSidebar Attempts={attempts}/>
//     </div>
//  );
// }

// export default App;

import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import ImagePreview2 from './components/ImagePreview2.jsx';
import RightSidebar from './components/SideBar.jsx';
import useLast10Attempts from './hooks/setAttempts.js';

function App() {
  const [input, setInput] = useState([]);
  const [attempts, addAttempt] = useLast10Attempts();
  const [output, setOutput] = useState([]);
  const [parameters, setParameters] = useState({});
 
  const onDrop = useCallback(acceptedFiles => {
    // addAttempt(input,output,parameters)  
    setInput(acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })));
    addAttempt(acceptedFiles[0],acceptedFiles[0],parameters)
    
 }, []);
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className='main'>
      <div className='parametersPanel'>
        <h2>Parameters</h2>
        <hr style={{width:'100%'}}/>
        <div className='parameterField'>
          <div className='Parameters'>Hi</div>
          <div className='Parameters'>Hi</div>
        </div>
      </div>
      <div className='dragPreview'>
        <div {...getRootProps()} className='selectfield'>
          <input {...getInputProps()} />
          {isDragActive ? <p>Drop the files here ...</p> : <p>Drag 'n' drop some files here, or click to select files</p>}
        </div>
        {input.length > 0 && (
          <aside className='list'>
            <h4>Output:</h4>
            {input.map((file,index) => (
              <center key={index}>
                {' '}
                <ImagePreview2 file={file} />
              </center>
            ))}
          </aside>
        )}
      </div>
      <RightSidebar Attempts={attempts} />
    </div>
  );
}

export default App;
