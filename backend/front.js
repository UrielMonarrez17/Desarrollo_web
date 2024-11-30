var paginaFront = {
    connection: "http://localhost:3000",
  };
  
  if (process.env.NODE_ENV === "production") {
    paginaFront = {
      connection: "https://dinovision.onrender.com",
    };
  }
  
  module.exports = paginaFront;