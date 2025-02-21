


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./App.css";

// const App = () => {
//   const [questions, setQuestions] = useState([]);
//   const [newQuestion, setNewQuestion] = useState("");
//   const [newCode, setNewCode] = useState("");
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [editedQuestion, setEditedQuestion] = useState("");
//   const [editedCode, setEditedCode] = useState("");
//   const [expandedIndex, setExpandedIndex] = useState(null);

//   useEffect(() => {
//     fetchQuestions();
//   }, []);

//   const fetchQuestions = async () => {
//     const response = await axios.get("https://sideback.vercel.app/questions");
//     setQuestions(response.data);
//   };

//   const handleUpload = async () => {
//     if (!newQuestion || !newCode) return;
//     await axios.post("https://sideback.vercel.app/questions", {
//       question: newQuestion,
//       code: newCode,
//     });
//     setNewQuestion("");
//     setNewCode("");
//     fetchQuestions();
//   };

//   const handleCopy = (code) => {
//     navigator.clipboard.writeText(code);
//     alert("Code copied!");
//   };

//   const handleEdit = (index) => {
//     setEditingIndex(index);
//     setEditedQuestion(questions[index].question);
//     setEditedCode(questions[index].code);
//   };

//   const handleSaveEdit = async (id) => {
//     await axios.put(`https://sideback.vercel.app/questions/${id}`, {
//       question: editedQuestion,
//       code: editedCode,
//     });
//     setEditingIndex(null);
//     fetchQuestions();
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this question?")) {
//       await axios.delete(`https://sideback.vercel.app/questions/${id}`);
//       fetchQuestions();
//     }
//   };

//   const toggleExpand = (index) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };

//   return (
//     <div className="container">
//       <h1>KMIT Code Vault</h1>

//       <div className="upload-section">
//         <textarea
//           className="large-input"
//           placeholder="Enter Question"
//           value={newQuestion}
//           onChange={(e) => setNewQuestion(e.target.value)}
//         />
//         <textarea
//           className="large-input code-input"
//           placeholder="Enter Code"
//           value={newCode}
//           onChange={(e) => setNewCode(e.target.value)}
//         />
//         <button onClick={handleUpload}>Upload</button>
//       </div>

//       <div className="questions-list">
//         {questions.map((q, index) => (
//           <div key={index} className="question-box">
//             <h3 onClick={() => toggleExpand(index)} className="clickable-question">
//               {q.question}
//             </h3>
//             {expandedIndex === index && (
//               <>
//                 {editingIndex === index ? (
//                   <>
//                     <textarea
//                       className="large-input"
//                       value={editedQuestion}
//                       onChange={(e) => setEditedQuestion(e.target.value)}
//                     />
//                     <textarea
//                       className="large-input code-input"
//                       value={editedCode}
//                       onChange={(e) => setEditedCode(e.target.value)}
//                     />
//                     <button onClick={() => handleSaveEdit(q._id)}>Save</button>
//                   </>
//                 ) : (
//                   <>
//                     <pre className="code-display">{q.code}</pre>
//                     <button onClick={() => handleCopy(q.code)}>Copy Code</button>
//                     <button onClick={() => handleEdit(index)}>Edit</button>
//                     <button onClick={() => handleDelete(q._id)} className="delete-btn">Delete</button>
//                   </>
//                 )}
//               </>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;



// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./App.css";

// const App = () => {
//   const [questions, setQuestions] = useState([]);
//   const [newQuestion, setNewQuestion] = useState("");
//   const [newCode, setNewCode] = useState("");
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [editedQuestion, setEditedQuestion] = useState("");
//   const [editedCode, setEditedCode] = useState("");
//   const [expandedIndex, setExpandedIndex] = useState(null);

//   useEffect(() => {
//     fetchQuestions();
//   }, []);

//   const fetchQuestions = async () => {
//     const response = await axios.get("https://sideback.vercel.app/questions");
//     setQuestions(response.data);
//   };

//   const handleUpload = async () => {
//     if (!newQuestion || !newCode) return;

//     const timestamp = new Date().toISOString(); // Current date-time in ISO format

//     await axios.post("https://sideback.vercel.app/questions", {
//       question: newQuestion,
//       code: newCode,
//       timestamp,
//     });
//     setNewQuestion("");
//     setNewCode("");
//     fetchQuestions();
//   };

//   const handleCopy = (code) => {
//     navigator.clipboard.writeText(code);
//     alert("Code copied!");
//   };

//   const handleEdit = (index) => {
//     setEditingIndex(index);
//     setEditedQuestion(questions[index].question);
//     setEditedCode(questions[index].code);
//   };

//   const handleSaveEdit = async (id) => {
//     await axios.put(`https://sideback.vercel.app/questions/${id}`, {
//       question: editedQuestion,
//       code: editedCode,
//     });
//     setEditingIndex(null);
//     fetchQuestions();
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this question?")) {
//       await axios.delete(`https://sideback.vercel.app/questions/${id}`);
//       fetchQuestions();
//     }
//   };

//   const toggleExpand = (index) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };

//   // Format Date and Time
//   const formatDate = (isoString) => {
//     const date = new Date(isoString);
//     return date.toLocaleString(); // Converts to readable format (e.g., "7/5/2024, 3:45 PM")
//   };

//   return (
//     <div className="container">
//       <h1>KMIT Code Vault</h1>

//       <div className="upload-section">
//         <textarea
//           className="large-input"
//           placeholder="Enter Question"
//           value={newQuestion}
//           onChange={(e) => setNewQuestion(e.target.value)}
//         />
//         <textarea
//           className="large-input code-input"
//           placeholder="Enter Code"
//           value={newCode}
//           onChange={(e) => setNewCode(e.target.value)}
//         />
//         <button onClick={handleUpload}>Upload</button>
//       </div>

//       <div className="questions-list">
//         {questions.map((q, index) => (
//           <div key={index} className="question-box">
//             <h3 onClick={() => toggleExpand(index)} className="clickable-question">
//               {q.question}
//             </h3>
//             <p className="timestamp">Uploaded on: {formatDate(q.timestamp)}</p>

//             {expandedIndex === index && (
//               <>
//                 {editingIndex === index ? (
//                   <>
//                     <textarea
//                       className="large-input"
//                       value={editedQuestion}
//                       onChange={(e) => setEditedQuestion(e.target.value)}
//                     />
//                     <textarea
//                       className="large-input code-input"
//                       value={editedCode}
//                       onChange={(e) => setEditedCode(e.target.value)}
//                     />
//                     <button onClick={() => handleSaveEdit(q._id)}>Save</button>
//                   </>
//                 ) : (
//                   <>
//                     <pre className="code-display">{q.code}</pre>
//                     <button onClick={() => handleCopy(q.code)}>Copy Code</button>
//                     <button onClick={() => handleEdit(index)}>Edit</button>
//                     <button onClick={() => handleDelete(q._id)} className="delete-btn">
//                       Delete
//                     </button>
//                   </>
//                 )}
//               </>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./App.css";

// const App = () => {
//   const [questions, setQuestions] = useState([]);
//   const [newQuestion, setNewQuestion] = useState("");
//   const [newCode, setNewCode] = useState("");
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [editedQuestion, setEditedQuestion] = useState("");
//   const [editedCode, setEditedCode] = useState("");
//   const [expandedIndex, setExpandedIndex] = useState(null);

//   useEffect(() => {
//     fetchQuestions();
//   }, []);

//   const fetchQuestions = async () => {
//     const response = await axios.get("https://sideback.vercel.app/questions");
//     setQuestions(response.data);
//   };

//   // const handleUpload = async () => {
//   //   if (!newQuestion || !newCode) return;
//   //   await axios.post("https://sideback.vercel.app/questions", {
//   //     question: newQuestion,
//   //     code: newCode,
//   //     timestamp: new Date().toLocaleString(), // Store timestamp
//   //   });
//   //   setNewQuestion("");
//   //   setNewCode("");
//   //   fetchQuestions();
//   // };
//   const handleUpload = async () => {
//     if (!newQuestion || !newCode) return;
  
//     const formattedTimestamp = new Date().toLocaleString("en-US", {
//       year: "numeric",
//       month: "2-digit",
//       day: "2-digit",
//       hour: "2-digit",
//       minute: "2-digit",
//       second: "2-digit",
//       hour12: true,
//     });
  
//     await axios.post("https://sideback.vercel.app/questions", {
//       question: newQuestion,
//       code: newCode,
//       timestamp: formattedTimestamp, // Ensure timestamp is sent
//     });
  
//     setNewQuestion("");
//     setNewCode("");
//     fetchQuestions();
//   };
  


//   const handleCopy = (code) => {
//     navigator.clipboard.writeText(code);
//     toast.success("✅ Code copied!", { position: "top-right", autoClose: 2000 });
//   };

//   const handleEdit = (index) => {
//     setEditingIndex(index);
//     setEditedQuestion(questions[index].question);
//     setEditedCode(questions[index].code);
//   };

//   const handleSaveEdit = async (id) => {
//     await axios.put(`https://sideback.vercel.app/questions/${id}`, {
//       question: editedQuestion,
//       code: editedCode,
//     });
//     setEditingIndex(null);
//     fetchQuestions();
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this question?")) {
//       await axios.delete(`https://sideback.vercel.app/questions/${id}`);
//       fetchQuestions();
//     }
//   };

//   const toggleExpand = (index) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };

//   return (
//     <div className="container">
//       <ToastContainer />
//       <h1>KMIT Code Vault</h1>

//       <div className="upload-section">
//         <textarea
//           className="large-input"
//           placeholder="Enter Question"
//           value={newQuestion}
//           onChange={(e) => setNewQuestion(e.target.value)}
//         />
//         <textarea
//           className="large-input code-input"
//           placeholder="Enter Code"
//           value={newCode}
//           onChange={(e) => setNewCode(e.target.value)}
//         />
//         <button onClick={handleUpload}>Upload</button>
//       </div>

//       <div className="questions-list">
//   {questions.map((q, index) => (
//     <div key={index} className="question-box">
//       <p className="timestamp">
//   {q.timestamp ? `📅 ${q.timestamp}` : "No timestamp available"}
// </p>

//       <div className="question-header">
//         <h3 onClick={() => toggleExpand(index)} className="clickable-question">
//           {q.question}
//         </h3>
//       </div>

//       {/* Timestamp placed clearly below the question */}
//       <p className="timestamp">{q.timestamp}</p>

//       {expandedIndex === index && (
//         <>
//           {editingIndex === index ? (
//             <>
//               <textarea
//                 className="large-input"
//                 value={editedQuestion}
//                 onChange={(e) => setEditedQuestion(e.target.value)}
//               />
//               <textarea
//                 className="large-input code-input"
//                 value={editedCode}
//                 onChange={(e) => setEditedCode(e.target.value)}
//               />
//               <button onClick={() => handleSaveEdit(q._id)}>Save</button>
//             </>
//           ) : (
//             <>
//               <pre className="code-display">{q.code}</pre>
//               <button onClick={() => handleCopy(q.code)}>Copy Code</button>
//               <button onClick={() => handleEdit(index)}>Edit</button>
//               <button onClick={() => handleDelete(q._id)} className="delete-btn">Delete</button>
//             </>
//           )}
//         </>
//       )}
//     </div>
//   ))}
// </div>



//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteConfirmationModal from './DeleteConfirmationModal'; // Import the modal
import "./App.css";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [newCode, setNewCode] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedQuestion, setEditedQuestion] = useState("");
  const [editedCode, setEditedCode] = useState("");
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [questionIdToDelete, setQuestionIdToDelete] = useState(null);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get("https://sideback.vercel.app/questions");
      setQuestions(response.data);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const handleUpload = async () => {
    if (!newQuestion || !newCode) return;

    try {
      await axios.post("https://sideback.vercel.app/questions", {
        question: newQuestion.trim(),
        code: newCode.trim()
      });

      setNewQuestion("");
      setNewCode("");
      fetchQuestions();
    } catch (error) {
      console.error("Error uploading question:", error);
    }
  };

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    toast.success("✅ Code copied!", { position: "top-right", autoClose: 2000 });
  };
  // const [editingIndex, setEditingIndex] = useState(null);
  // const [editedQuestion, setEditedQuestion] = useState("");
  // const [editedCode, setEditedCode] = useState("");
  
  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedQuestion(questions[index].question);
    setEditedCode(questions[index].code);
  };
  
  const handleSaveEdit = async (id) => {
    try {
      await axios.put(`https://sideback.vercel.app/questions/${id}`, {
        question: editedQuestion.trim(),
        code: editedCode.trim(),
      });
  
      setEditingIndex(null);
      fetchQuestions();
    } catch (error) {
      console.error("Error updating question:", error);
    }
  };
  
  // const handleEdit = (index) => {
  //   setEditingIndex(index);
  //   setEditedQuestion(questions[index].question);
  //   setEditedCode(questions[index].code);
  // };

  // const handleSaveEdit = async (id) => {
  //   try {
  //     await axios.put(`https://sideback.vercel.app/questions/${id}`, {
  //       question: editedQuestion.trim(),
  //       code: editedCode.trim(),
  //     });

  //     setEditingIndex(null);
  //     fetchQuestions();
  //   } catch (error) {
  //     console.error("Error updating question:", error);
  //   }
  // };

  const handleDelete = (id) => {
    setQuestionIdToDelete(id);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await axios.delete(`https://sideback.vercel.app/questions/${questionIdToDelete}`);
      fetchQuestions();
      toast.success("✅ Question deleted!", { position: "top-right", autoClose: 2000 });
    } catch (error) {
      console.error("Error deleting question:", error);
    } finally {
      setIsModalOpen(false);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="container">
      <ToastContainer />
      <h1>KMIT Code Vault</h1>

      {/* Upload Section */}
      <div className="upload-section">
        <textarea
          className="large-input"
          placeholder="Enter Question"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        />
        <textarea
          className="large-input code-input"
          placeholder="Enter Code"
          value={newCode}
          onChange={(e) => setNewCode(e.target.value)}
        />
        <button onClick={handleUpload}>Upload</button>
      </div>

      {/* Questions List */}
      <div className="questions-list">
        {questions.map((q, index) => {
          let formattedTimestamp = "Invalid Timestamp";
          if (q.timestamp) {
            const timestamp = new Date(q.timestamp);
            if (!isNaN(timestamp.getTime())) {
              formattedTimestamp = timestamp.toLocaleString();
            }
          }

          return (
            <div key={q._id} className="question-box">
              {/* Question Header */}
              <div className="question-header">
                <h3 onClick={() => toggleExpand(index)} className="clickable-question">
                  {q.question.split("\n")[0]} {/* Display first line as title */}
                </h3>
              </div>

              {/* Expanded Question View */}
              {expandedIndex === index && (
                <>
                  {editingIndex === index ? (
                    <>
                      <textarea
                        className="large-input"
                        value={editedQuestion}
                        onChange={(e) => setEditedQuestion(e.target.value)}
                      />
                      <textarea
                        className="large-input code-input"
                        value={editedCode}
                        onChange={(e) => setEditedCode(e.target.value)}
                      />
                      <button onClick={() => handleSaveEdit(q._id)}>Save</button>
                    </>
                  ) : (
                    <>
                      <pre className="formatted-question">{q.question}</pre>
                      <pre className="code-display">{q.code}</pre>
                      <button onClick={() => handleCopy(q.code)}>Copy Code</button>
                      <button onClick={() => handleEdit(index)}>Edit</button>
                      <button onClick={() => handleDelete(q._id)} className="delete-btn">
                        Delete
                      </button>
                    </>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Delete Confirmation Modal */}
      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onDelete={handleConfirmDelete}
      />
    </div>
  );
};

export default App;
