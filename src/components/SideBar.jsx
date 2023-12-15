// // import React, { useState } from 'react';
// // import '../assets/right-bar.css'; 
// // import PastAttempts from './PastAttempts'

// // const RightSidebar = ({Attempts}) => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   const toggleSidebar = () => {
// //     setIsOpen(!isOpen);
// //   };

// //   return (
// //     <div className={`right-sidebar ${isOpen ? 'open' : ''}`}>
// //       <span onClick={toggleSidebar} className="trigger-button">
// //         Past Results
// //       </span>
// //       <div className="sidebar-content">
// //         <h3>Previous Attempts</h3>
// //        <div className='sideMain'>
// //        {Attempts.length ? (
// //   <ul>
// //     {Attempts.map(({ file1, file2 }, index) => (
// //       <li key={index}>{PastAttempts(file1, file2)}</li>
// //     ))}
// //   </ul>
// // ) : ''}



// //        </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default RightSidebar;




// import React, { useState } from 'react';
// import '../assets/right-bar.css';
// import PastAttempts from './PastAttempts';

// const RightSidebar = ({ Attempts }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className={`right-sidebar ${isOpen ? 'open' : ''}`}>
//       <span onClick={toggleSidebar} className={`trigger-button ${isOpen ? 'open' : ''}  `}>
//         Past Results
//       </span>
//       <div className="sidebar-content">
//         <h3>Previous Attempts</h3>
//         <div className='sideMain'>
//           {/* Set a fixed height for the container and use overflow-y: auto */}
//           <div className="scrollable-container">
//             {Attempts.length ? (
//               <ul>
//                 {Attempts.map(({ file1, file2}, index) => (
//                   <li className='attemptLi' key={index}>{PastAttempts(file1, file2)}</li>
//                 ))
           
//                 }
//               </ul>
//             ) : ''
//               }
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RightSidebar;



import React, { useState, useEffect, useRef } from 'react';
import '../assets/right-bar.css';
import PastAttempts from './PastAttempts';

const RightSidebar = ({ Attempts }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = (event) => {
    // Check if the clicked element is outside the sidebar
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Attach the event listener when the component mounts
    document.addEventListener('click', closeSidebar);

    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', closeSidebar);
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div ref={sidebarRef} className={`right-sidebar ${isOpen ? 'open' : ''}`}>
      <span onClick={toggleSidebar} className={`trigger-button ${isOpen ? 'open' : ''}`}>
        Past Results
      </span>
      <div className="sidebar-content">
        <h3>Previous Attempts</h3>
        <div className='sideMain'>
          <div className="scrollable-container">
            {Attempts.length ? (
              <ul>
                {Attempts.map(({ file1, file2 }, index) => (
                  <li className='attemptLi' key={index}>{PastAttempts(file1, file2)}</li>
                ))}
              </ul>
            ) : ''}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
