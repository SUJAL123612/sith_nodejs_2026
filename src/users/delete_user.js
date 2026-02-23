function main(req, res, client, appEnv) {
  console.log("Delete_user",appEnv);

  let{id}=req.params;
  
  if (id=="" || id==null){
  
    //  const response_obj={
    //   "success":true,
    //   "data":null,
    //   "err":"Id required.."
  
    //  }
    //  res.status(400).send(response_obj)
    appEnv.responseGenerator.sendResponse(res, true, 400, null, { msg: "Id required.." }, appEnv.getCurrentLine());
     return;
  }
  
  client.query(`select * from users where id=${id}`,(err,data)=>{
      if(err){
          
    //  const response_obj={
    //   "success":false,
    //   "data":null,
    //   "err":"some thing went wrong",
    //   "err_id":"17"
  
    //  }
    //  res.status(400).send(response_obj)
    appEnv.responseGenerator.sendResponse(res, true, 400, null, { msg: "something went wrong" }, appEnv.getCurrentLine());
     return;
      }
      
      client.query(`update users set is_obsolete=2 where id=${id}`,(err,data)=>{
          if(err){
          
            //   const response_obj={
            //    "success":false,
            //    "data":null,
            //    "err":"some thing went wrong",
            //    "err_id":"17"
           
            //   }
            //   res.status(400).send(response_obj)
            appEnv.responseGenerator.sendResponse(res, true, 400, null, { msg: "something went wrong" }, appEnv.getCurrentLine());
              return;
               }
              //  res.status(200).send("delete sucessfully")
              appEnv.responseGenerator.sendResponse(res, false, 200, { msg: "Data Deleted Successfully" }, null, null);
               return;
      })
  })
  
          
  
  }
  
  module.exports = {
      main: main
  }