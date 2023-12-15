import React from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const CleanImage = (file1, file2) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between'}} className='attemptDiv' >
      <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
      <div className='ImageWrapper'>
      <TransformWrapper>
        <TransformComponent>
          <img
            src={file1.preview}
            alt={file1.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </TransformComponent>
      </TransformWrapper>
      </div>
      <h6>Input</h6>
      </div> 
      <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
      <div className='ImageWrapper'>
      <TransformWrapper>
        <TransformComponent>
          <img
            src={file2.preview}
            alt={file2.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </TransformComponent>
      </TransformWrapper>
      </div>
      <h6>Output</h6>
      </div> </div>
  );
};

export default CleanImage;
;

