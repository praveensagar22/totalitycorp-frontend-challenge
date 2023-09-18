import React from "react";

export const Contact = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  };

  const contentStyle = {
    textAlign: "center",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f7f7f7",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const thankYouStyle = {
    fontWeight: "bold",
    color: "#3498db",
    marginTop: "20px",
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <p>Praveen Sagar Bingi</p>
        <p>Email: praveen@shopsavvy.in</p>
        <p>Phone: +91 7993823327</p>
        <p>Vijayawada, India</p>
        <p style={thankYouStyle}>Thank you for reaching out!</p>
      </div>
    </div>
  );
};
