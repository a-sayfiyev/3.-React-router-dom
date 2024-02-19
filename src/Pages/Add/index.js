import React, { useState } from "react";


export default function Add() {
  return (
    <>
      <div className="container p-4">
        <h1>Qo'shish</h1>
        <p>Yangi kategoriya/taom qo’shish</p>
        <div className="main-wrapper d-flex flex-column">
          <div className="inner-wrapper d-flex flex-column align-items-start gap-4">
            <button
              style={{ backgroundColor: "#FFEC00", padding: "7px 20px" }}
              className="btn fw-bold"
            >
              Kategoriya
            </button>
            <input
              type="text"
              className="form-control"
              placeholder="Kategoriya nomi"
            />
          </div>
          <button
            style={{
              backgroundColor: "#FFEC00",
              padding: "10px 40px",
              margin: "0 auto",
            }}
            className="btn fw-bold mt-4"
          >
            Qo’shish
          </button>
        </div>
      </div>
    </>
  );
}
