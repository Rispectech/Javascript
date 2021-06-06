var ObjectID = require('mongodb').ObjectID
module.exports = (app,db)=>{

    app.get('/notes/:id',(req,res)=>{
        const id = req.params.id
        const details = {'_id': new ObjectID(id)}
        db.db().collection('notes').findOne(details,(err,items)=>{
            if(err){
                req.send({'error':'An error has occured'})
            }
            else{
                res.send(items)
            }
        })
    })

    app.delete('/notes/:id',(req,res)=>{
        const id = req.params.id
        const details = {'_id': new ObjectID(id)}
        db.db().collection('notes').deleteOne(details,(err,items)=>{
            if(err){
                req.send({'error':'An error has occured'})
            }
            else{
                res.send('Note : ' + id + ' deleted')
            }
        })
    })

    app.put('/notes/:id',(req,res)=>{
        const id = req.params.id
        const details = {'_id': new ObjectID(id)}
        const note = {$set : {text : req.body.tool,title : req.body.title,desc : req.body.desc}}

        db.db().collection('notes').updateOne(details,note,(err,items)=>{
            if(err){
                req.send({'error':'An error has occured'})
            }
            else{
                res.send(items)
            }
        })
    })

    app.post('/notes',(req,res)=>{
        const note = {text : req.body.tool,title : req.body.title,desc : req.body.desc}
        db.db().collection('notes').insertOne(note,(err,result)=>{
            if(err){
                req.send({'error':'An error has occured'})
            }
            else{
                res.send(result.ops[0])
            }
        })
    })
}