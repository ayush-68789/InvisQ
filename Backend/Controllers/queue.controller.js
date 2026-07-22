const Queue = require('../models/Queue') ; 

const createQueue = async(req ,res) => {
    try{
        const { name, branch, averageServiceTime } = req.body;
        const queue = await Queue.create({
            name , 
            branch , 
            averageServiceTime
        })

        res.status(201).json({
            Success : true , 
            message : "Queue Created",
            queue
        })
    }
    catch(err) {
        console.log(err) ;
        res.status(500).json({
            Success : false, 
            message : err.message
        })
    }
}

const getQueue = async(req ,res) => {
    try {
        const Allqueue = await Queue.find({});
        res.status(200).json({
            Success: true,
            message: "Queues Fetched",
            Allqueue,
        });
    } 
    catch (err) 
    {
        console.log(err) ;
        res.status(500).json({
            Success: false,
            message: err.message,
        });
    }
}

module.exports = {createQueue, getQueue } ;