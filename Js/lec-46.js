
      //Temporal dead zone
      //let and const are hoisted but not initialized
      //console.log(num);
      //  //ReferenceError: Cannot access 'num' before initialization


      let num = 10;
      console.log(num); //10

      {
        console.log(num); //10
        
      }

      if(true){
        console.log("called 3 time" , num); //10
      }

      for(let i = 0; i < 5; i++){
        console.log(num); //0 1 2 3 4
      }

      function test(){
        console.log(num); //10
      }
      test();

