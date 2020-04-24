const os = require('os')
const log = require('./logger.js')
setInterval(()=>{
  const { freemem, totalmem } = os
  const total = parseInt(totalmem()/1024/1024)
  const mem = parseInt(freemem()/1024/1024)
  const perc = parseInt((mem/total)*100) 
  const stat = {
    free: `${mem} MB`,
    total: `${total} MB`,
    usage: `${perc}%`
  }
  console.clear()
  console.log('=====STATUS=====')
  console.table(stat)

  log(`${JSON.stringify(stat)}\n`)
},1000)
