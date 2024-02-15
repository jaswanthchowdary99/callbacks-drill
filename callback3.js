const cards = require('./cards_1.json');


function getCards(listId){
    function cardsData (listId){
        return new Promise((resolve,reject)=>{
           setTimeout(()=>{
               const cards1 = cards[listId] || [];
               if(cards1){
                   resolve(cards1);
               }
               else{
                   reject('data not found');
               } 
           },Math.random()* 2000 + 1000);
        })
       }
       
       
       cardsData(listId).then((result) =>{
           console.log(result);
       }).catch((error)=>{
           console.log(error)
       })
       
}

module.exports = {getCards};
