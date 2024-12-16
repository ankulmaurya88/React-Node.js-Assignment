const generateLink = (formId) => {
    const baseUrl = process.env.BASE_URL || "http://localhost:5000";
    return `${baseUrl}/api/forms/${formId}`;
  };
  
  module.exports = generateLink;
  