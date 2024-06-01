// import React, { useState, useEffect } from "react";
// import "../../styles/AddTransactionButton.css"; // Import CSS file for styling
// import axios from "axios";

// function AddTransactionButton({
//   type,
//   onClose,
//   customer,
//   token,
//   loadtransection,
//   transactionToEdit,
//   setedit,
// }) {
//   const [transactionDetail, setTransactionDetail] = useState({
//     amount: "",
//     reference: "",
//     description: "",
//     type: type,
//     date: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setTransactionDetail((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async () => {
//     try {
//       console.log(customer._id, token);
//       if (transactionToEdit) {
//         await axios.post(
//           "/api/v1/transections/edit-transection",
//           {
//             payload: transactionDetail,
//           },
//           transactionDetail,
//           {
//             headers: {
//               customerid: customer._id,
//             },
//           }
//         );
//         setedit(null);
//       } else {
//         await axios.post(
//           "/api/v1/transections/customer/transection",
//           transactionDetail,
//           {
//             headers: {
//               token: token,
//               customerid: customer._id,
//             },
//           }
//         );
//       }
//       console.log("Transaction submitted:", transactionDetail);
//       loadtransection();
//       onClose();
//     } catch (error) {
//       console.error("Error submitting transaction:", error);
//     }
//   };

//   useEffect(() => {
//     if (transactionToEdit) {
//       // If there is a transaction to edit, set its details in the state
//       setTransactionDetail({
//         amount: transactionToEdit.amount,
//         reference: transactionToEdit.reference,
//         description: transactionToEdit.description,
//         type: transactionToEdit.type,
//         date: transactionToEdit.date,
//       });
//     }
//   }, [transactionToEdit]);

//   const handleClose = () => {
//     // Close the form
//     onClose();
//   };

//   return (
//     <div className="add-transaction-container">
//       <div className="transaction-form">
//         <input
//           className="transaction-input"
//           type="text"
//           name="amount"
//           placeholder="Amount"
//           value={transactionDetail.amount}
//           onChange={handleInputChange}
//         />
//         <input
//           className="transaction-input"
//           type="text"
//           name="reference"
//           placeholder="Reference"
//           value={transactionDetail.reference}
//           onChange={handleInputChange}
//         />
//         <input
//           className="transaction-input"
//           type="text"
//           name="description"
//           placeholder="Description"
//           value={transactionDetail.description}
//           onChange={handleInputChange}
//         />
//         <input
//           className="transaction-input"
//           type="date"
//           name="date"
//           placeholder="Date"
//           value={transactionDetail.date}
//           onChange={handleInputChange}
//         />
//         <button className="submit-button" onClick={handleSubmit}>
//           Submit
//         </button>
//         <button className="close-button" onClick={handleClose}>
//           Close
//         </button>
//       </div>
//     </div>
//   );
// }

// export default AddTransactionButton;

import React, { useState, useEffect } from "react";
import "../../styles/AddTransactionButton.css"; // Import CSS file for styling
import axios from "axios";

function AddTransactionButton({
  type,
  onClose,
  customer,
  token,
  loadtransection,
  transactionToEdit,
}) {
  const [transactionDetail, setTransactionDetail] = useState({
    amount: "",
    refrence: "",
    description: "",
    type: type,
    date: "",
  });

  useEffect(() => {
    if (transactionToEdit) {
      const formattedDate = new Date(transactionToEdit.date)
        .toISOString()
        .split("T")[0];
      // Parse the date string and format it as "yyyy-MM-dd"
      setTransactionDetail({
        ...transactionToEdit,
        date: formattedDate, // Set the formatted date
      });
    }
  }, [transactionToEdit]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTransactionDetail((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      console.log(customer._id, token);
      if (transactionToEdit) {
        // If editing a transaction
        await axios.post(
          `/api/v1/transections/edit-transection`,
          {
            transacationId: transactionToEdit._id, // Send the transaction ID for editing
            payload: transactionDetail, // Send the updated transaction details as payload
          },
          {
            headers: {
              customerid: customer._id,
            },
          }
        );
      } else {
        // If adding a new transaction
        await axios.post(
          "/api/v1/transections/customer/transection",
          transactionDetail,
          {
            headers: {
              token: token,
              customerid: customer._id,
            },
          }
        );
      }
      console.log("Transaction submitted:", transactionDetail);
      loadtransection();
      onClose();
    } catch (error) {
      console.error("Error submitting transaction:", error);
    }
  };

  const handleClose = () => {
    // Close the form
    onClose();
  };

  return (
    <div className="add-transaction-container">
      <div className="transaction-form">
        <input
          className="transaction-input"
          type="text"
          name="amount"
          placeholder="Amount"
          value={transactionDetail.amount}
          onChange={handleInputChange}
        />
        <input
          className="transaction-input"
          type="text"
          name="refrence"
          placeholder="refrence"
          value={transactionDetail.refrence}
          onChange={handleInputChange}
        />
        <input
          className="transaction-input"
          type="text"
          name="description"
          placeholder="Description"
          value={transactionDetail.description}
          onChange={handleInputChange}
        />
        <input
          className="transaction-input"
          type="date"
          name="date"
          placeholder="Date"
          value={transactionDetail.date}
          onChange={handleInputChange}
        />
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
        <button className="close-button" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default AddTransactionButton;
