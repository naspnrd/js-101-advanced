// navigator.geolocation.getCurrentPosition(
//   (position) => console.log(position), // success callback
//   (error) => console.log(error) // error callback
// );

// i would be running long running task taking 10 seconds to exdecute

// Event loop
// Event loop is just a guardian who keeps a good communication with callstack and
// queue. It keeps checking the queue and callstack. If callstack is empty, it will
// take the first callback from the queue(FIFO) and push it to callstack and executed.
