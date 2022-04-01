const express = require('express')
const request = require ('request')
const router = express.Router()

router.use('/books/info/:id', async(req, res)=>{
    const id = req.params.id
    const url = 'http://10.211.55.3/books/info/'+id
    request({url, json:true}, (error,  {body})=>{
           if(error){
               return res.status(404).send(error)
           }
           return res.status(200).send(body)
        })
})
router.use('/books/search/:topic', (req, res)=>{
    const topic = req.params.topic
    const url = 'http://10.211.55.3/books/search/'+topic
    request({url, json:true}, (error,  {body})=>{
           if(error){
               return res.status(404).send(error)
           }
           return res.status(200).send(body)
        })
})
router.patch('/books/:id', (req, res)=>{
    const id = req.params.id
    const url = 'http://10.211.55.3/books/'+id
    request({url, json:true, method: 'PATCH', body: req.body}, (error,  {body})=>{
            if(error){
               return res.status(404).send(error)
           }
           return res.status(200).send(body)
        })
})
router.use('/books/purchase/:id', (req, res)=>{
    const id = req.params.id
    const url = 'http://10.211.55.4/books/purchase/'+id
    request({url, json:true}, (error, {body})=>{
        if(error){
            return res.send(error)
        }
        console.log(body)
        return res.status(200).send(body)
    })
})

module.exports = router