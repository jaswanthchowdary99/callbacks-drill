const problem1 = require('../asynchronousDrill2/callback1');
const problem2 = require('../asynchronousDrill2/callback2');
const problem3 = require('../asynchronousDrill2/callback3');


function getAllInformation (){
            const promise1 = new Promise((resolve,reject)=>{
                problem1.getBoards('mcu453ed',(findBoard)=>{
                    if(findBoard){     
                        resolve(findBoard);
                    }
                    else{
                        reject('data not found');
                    }
                })
            })

            const promise2 = new Promise((resolve,reject)=>{
                problem2.getList('mcu453ed',(error,findList1)=>{
                    if(error){
                        reject('data not found');
                    }
                    else{
                        resolve(findList1);
                    }
                })
            })
            const promise3 = new Promise((resolve,reject) =>{
                problem3.getCards('ghnb768',(error,findCard)=>{
                    if(error){
                         reject('data not found');
                    }
                    else{
                        resolve(findCard)
                    }
                })
            })
            return Promise.all([promise1,promise2,promise3]).then(([getBoards,getList,getCards])=>{
                console.log(getBoards);
                console.log(getList);
                console.log(getCards);
     }).catch((error)=>{
         console.log(error);
     })
        }


module.exports = {getAllInformation};