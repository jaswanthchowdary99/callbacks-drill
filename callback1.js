
const boards = require('./boards_1.json');


function getBoards(boardId){
    function boardFile(boardId){
        return new Promise((resolve,reject)=>{
            setTimeout(()=> {
                const data = boards.find(board => board.id == boardId)
                if(data){
                    resolve(data);
                }
                else{
                    reject('data not found');
                }
            },Math.random() * 2000 + 1000)
           
        })
       
    }
    
    boardFile(boardId).then((result)=>{
        console.log(result);
    }).catch((error)=>{
        console.log(error);
    })
}

    module.exports = {getBoards}





