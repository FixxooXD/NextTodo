import mongoose from "mongoose";

export async function connect(){
    try {
    
        mongoose.connect(process.env.DATABASE_URL!);
        const connection = mongoose.connection;

        connection.on("connected", ()=>{
           console.log("DB connected");
        })

        connection.on("error", (err)=> {
            console.log("something went wrong" + err);
            process.exit();
        })
    
    } catch (error:any) {
        console.log("Something went wrong" + error);
        process.exit();
    }
}