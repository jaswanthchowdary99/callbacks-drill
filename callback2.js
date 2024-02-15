const lists = require('./lists_1.json');

function getList(boardId){
  function findList(boardId){
    return new Promise((resolve,reject) =>{
      setTimeout(()=>{
        const lists1 = lists[boardId] || [];
        if(lists1){
          resolve(lists1);
        }
        else{
          reject('board not found')
        }
     },Math.random()* 2000 + 1000)
    })
  }

  

  findList(boardId).then((result) =>{
      console.log(result);
  }).catch((error)=>{
      console.log(error)
  })
  
}
    
module.exports = {getList}