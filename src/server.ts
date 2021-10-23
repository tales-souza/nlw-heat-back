import {  serverHttp } from "./app";

const port = 4000;
serverHttp.listen(4000, () => console.log(`Server on port ${port}`));

