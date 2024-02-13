const lists = require('./lists_1.json');


    function findList(boardId,callback){
        const timeout = 2000;
  setTimeout(()=>{
     
           const lists1 = lists[boardId] || [];

           callback(null,lists1)
        },timeout)
    }

    
    function findListInfo (error,lists1){
        if(error){
            console.log('list not found');
        }
        else{
            console.log(lists1);
        }
    }

    // findList(Id2,findListInfo);

    module.exports= {findList,findListInfo}