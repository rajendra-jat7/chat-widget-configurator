import React from "react";

const FileUploader = ({ label, name, setConfig }) => {
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setConfig((prev) => ({ ...prev, [name]: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <label className="block font-medium mb-1">{label}:</label>
      <input type="file" onChange={handleFileUpload} className="w-full px-4 py-2 border rounded-lg focus:outline-none bg-white" />
    </div>
  );
};

export default FileUploader;
