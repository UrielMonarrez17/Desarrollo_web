var paginaBackend={
    connection :"http://localhost:5000",
    };

    if (process.env.NODE_ENV === "production") {

      paginaBackend = "/api2";

    }
export default paginaBackend;