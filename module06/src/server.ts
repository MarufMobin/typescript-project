import mongoose from "mongoose";
import app from './app';

// const express = require('express')
// const mongoose = require('mongoose');

const port: number = 5000

// Database Connection 
async function main() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
        console.log('Database Connection Successfull');
        
        // When Our mongoose are connected then app are listen
        app.listen(port, () => {
          console.log(`Server is listening on port ${port}`)
        })

    }catch( err ){
        console.log(`Failed to connect database `, err );
    }
}
main()

