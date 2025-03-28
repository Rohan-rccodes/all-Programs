
        // function scope
        
        function greet(){
            var name = 'earth';
            console.log("hello duniya", name);
        }
        greet();
         

        // block scope
        // var global scope
        // but let and const block scope

        {
            let space = 'mars';
            var  world3 = 'jupitor';
            console.log("hello duniya", space);
        }
        console.log(world3);
