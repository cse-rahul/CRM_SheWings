// import React from 'react';
// import { Row, Col } from 'react-bootstrap';

// import Card from '../../components/Card/MainCard';

// const SamplePage = () => {
//   return (
//     <React.Fragment>
//       <Row>
//         <Col>
//           <Card title="Hello Card" isOption>
//             <p>
//               &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
//               aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
//               irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
//               non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&quot;
//             </p>
//           </Card>
//         </Col>
//       </Row>
//     </React.Fragment>
//   );
// };

// export default SamplePage;
import React, { useRef, useState } from "react";
import "./attendance.css";


const Attendance = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [image, setImage] = useState(null);

  // Start the webcam
  const startCamera = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch((err) => console.error("Error accessing the camera", err));
  };

  // Capture the image
  const captureSelfie = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const dataURL = canvas.toDataURL("image/png");
    setImage(dataURL);
  };

  // Submit the image to the API
  const submitAttendance = async () => {
    if (!image) return alert("Please capture a selfie first.");

    try {
      const response = await fetch("http://localhost:5000/api/attendance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          employeeId: "12345", // Example employee ID
          image: image, // Send the base64 image
        }),
      });

      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error("Error submitting attendance:", error);
    }
  };

  return (
    <div className="attendance-container">
      <h1>Mark Your Attendance</h1>
      <video ref={videoRef} width="320" height="240" autoPlay />
      <canvas ref={canvasRef} width="320" height="240" style={{ display: "none" }} />
      <button onClick={startCamera}>Start Camera</button>
      <button onClick={captureSelfie}>Capture Selfie</button>
      {image && <img src={image} alt="Captured" />}
      <button onClick={submitAttendance}>Submit Attendance</button>
    </div>
  );
};

export default Attendance;

