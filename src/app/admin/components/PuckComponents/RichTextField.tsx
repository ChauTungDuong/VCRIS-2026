import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const RichTextField = ({ value, onChange, name }: any) => {
  return (
    <div className="puck-rich-text-field" style={{ background: "#fff", color: "#000", minHeight: "150px" }}>
      <ReactQuill 
        theme="snow" 
        value={value || ""} 
        onChange={onChange} 
        style={{ minHeight: "150px" }}
      />
    </div>
  );
};
