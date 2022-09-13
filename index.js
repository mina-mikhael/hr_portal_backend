require("dotenv").config();
const server = require("./api/server");

let port = process.env.PORT;

server.listen(port, () => {
  console.log(`server is running on port:`, port);
});
