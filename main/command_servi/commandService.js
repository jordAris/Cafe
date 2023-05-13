/* class commandService {
    findAll(status){
        let command = [];

        if ( status == "validate"){
            command = this.commandService.getCommand(status);
        } 
        if (status == "served") {
                command = this.commandService.getCommand(status);
        } 
        return command;
    }
} */
const mongoose = require('mongoose');
const uri = "mongodb+srv://jakafane20:Kimjin841@cafe.o6t8s0v.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const database = (module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try {
        mongoose.connect(uri, connectionParams);
        console.log("Database connected");
    } catch(error) {
        console.log("error");
        console.log("Database connection failed");
    }

});

database(); 

    

