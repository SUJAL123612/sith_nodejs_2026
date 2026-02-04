function main(req, res, client) {

  let{id}=req.params;
  
  if (id=="" || id==null){
  
     const response_obj={
      "success":true,
      "data":null,
      "err":"Id required.."
  
     }
     res.status(400).send(response_obj)
     return;
  }
  
  client.query(`select * from users where id=${id}`,(err,data)=>{
      if(err){
          
     const response_obj={
      "success":false,
      "data":null,
      "err":"some thing went wrong",
      "err_id":"17"
  
     }
     res.status(400).send(response_obj)
     return;
      }
      
      client.query(`update users set is_obsolete=2 where id=${id}`,(err,data)=>{
          if(err){
          
              const response_obj={
               "success":false,
               "data":null,
               "err":"some thing went wrong",
               "err_id":"17"
           
              }
              res.status(400).send(response_obj)
              return;
               }
               res.status(200).send("delete sucessfully")
               return;
      })
  })
  
          
  
  }
  
  module.exports = {
      main: main
  }