function main(req, res, client, appEnv) {
  console.log("Get_Event_Emitters",appEnv);
  const EventEmitter = require("events");
  const eventEmitter = new EventEmitter();

  eventEmitter.on("sanket", () => {
    console.log("event is triggered 1");
  });
  eventEmitter.on("sanket", () => {
    console.log("event is triggered 2");
  });

  eventEmitter.emit("sanket");

//   eventEmitter.on('Hello', (name, sirname) => {
//         console.log(`Welcome ${name} ${sirname}.`);
//     });
//     eventEmitter.emit('Hello', 'Sujal', 'Chalke');

// eventEmitter.setMaxListeners(20);

// for(i=1; i<=20; i++)
// {
//     eventEmitter.on('Hello', (name, age) => {
//         console.log(`Welcome ${name}, Your age is ${age}.`);
//     });
// }
// console.log(eventEmitter.getMaxListeners());//default value is 10
// eventEmitter.emit('sanket');
// eventEmitter.emit('Hello',req.query.name,req.query.age);

// eventEmitter.once('demo', () => {
//     console.log('event.once is triggered');
// });
// eventEmitter.emit('demo');


// eventEmitter.on("calculate",(a,b)=>
//     {
//         console.log(a-b);
//     });

//     eventEmitter.on("calculate",(a,b)=>
//     {
//         console.log(a+b);
//     });

//     eventEmitter.emit("calculate",5,2);

const x = ()=>
    {
        console.log("on");
    };
    eventEmitter.on("onOFF",x);
    eventEmitter.on("onOFF",x);
    eventEmitter.on("onOFF",x);
    eventEmitter.emit("onOFF");//it will happen, because eventEmitter is on.
    eventEmitter.removeAllListeners("onOFF",x);//make it off all on event
    eventEmitter.off("onOFF",x);//eventEmitter is off
    eventEmitter.emit('onOFF');//it will not happen, because eventEmitter is off above line.--

  // res.send("Hello");
  appEnv.responseGenerator.sendResponse(res, false, 200, {msg : "Hello" }, null, null);
}

module.exports = {
  main: main,
};
