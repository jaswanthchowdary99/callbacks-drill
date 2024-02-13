
const boards = require('./boards_1.json');

    function boardFile(boardId,callback){
        setTimeout(()=> {
            const data = boards.find(board => board.id == boardId)
            callback(data);
        },Math.random() * 2000 + 1000)
       
    }
    
    function finId(board){
        if(board){
            console.log(board);
        }else{
            console.log('not found');
        }
    
    }


    // boardFile(Id1,finId);


module.exports = {boardFile,finId}