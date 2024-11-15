// src/utils/uploadHelper.js

export const handleUploadCloudinary = async (e) => {
    const uploadPreset = "tixx1a8u";
  
    console.log('hello imran', uploadPreset, e.target.files[0]);
  
    if (!e || !e.target.files[0]) {
      console.error('No file selected');
      return;
    }
  
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    formData.append('upload_preset', uploadPreset);
  
    try {
      const response = await fetch(`https://api.cloudinary.com/v1_1/degjqq6vo/upload`, {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      console.log('Upload successful TS:', data.url);
  
      
      
  
      return data.url;
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };
  