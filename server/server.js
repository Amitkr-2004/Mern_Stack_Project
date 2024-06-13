require("dotenv").config();
const express=require("express");
const app=express();
const form=require("./router/contact_router.js")
const authroute=require("./router/auth_router.js")
const connectDb=require("./utils/db.js")
const ErrorMiddleware = require("../server/middlewares/error_middleware.js")
const ServiceRoute=require("./router/service_router.js")
const AdminRoute=require("./router/admin_router.js")
const cors=require("cors")

const corsOption = {
    origin:"http://localhost:5173",
    methods:"POST,GET,PUT,PATCH,DELETE",
    credentials:true,
}

app.use(cors(corsOption))

app.use(express.json())


app.use("/api/auth/",authroute);
app.use("/api/form/",form)
app.use("/api/data/",ServiceRoute)
app.use("/api/admin/",AdminRoute)

app.use(ErrorMiddleware)    //Middleware providing to the server to understand a middleware is used for handling error
const PORT=5000;  

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
  });
});
