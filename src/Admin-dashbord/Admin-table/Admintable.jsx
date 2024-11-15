import React, { useState, useEffect } from "react";


const Admintable = ({ filteredUsers }) => {



  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };




  const calculateExpireDate = (isoDate) => {
    const date = new Date(isoDate);
    date.setMonth(date.getMonth() + 1); // Add one month
    return formatDate(date.toISOString());
  };




  return (
    <div className="Admin-table-container">
      <table>
        <thead>
          <tr>
            <th>I'D</th>
            <th>Name</th>
            <th>Email</th>
            <th>Join Date</th>
            <th>Expire Date</th>
          </tr>
        </thead>
        <tbody>
          {/* {Usersdata.map((row, index) => (
            <tr key={index}>
              <td>{row.id}</td>
              <td>{row.username}</td>
              <td>{row.email}</td>
              <td>{formatDate(row.createdAt)}</td>
              <td>{calculateExpireDate(row.createdAt)}</td>
            </tr>
          ))}
           */}

          {filteredUsers.length > 0 ? (
            filteredUsers.map((row, index) => (
              <tr key={index}>
                <td>{row.id}</td>
                <td>{row.username}</td>
                <td>{row.email}</td>
                <td>{formatDate(row.createdAt)}</td>
                <td>{calculateExpireDate(row.createdAt)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No matching users found</td>
            </tr>
          )}


        </tbody>
      </table>
    </div>
  );
};

export default Admintable;
