const http = require("http");
const userRouter = require("./routers/userRouter");
const HOST = "localhost";
const PORT = 3000;

const server = http.createServer(userRouter);

server.listen(PORT, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
