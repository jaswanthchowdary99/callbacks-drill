const cards = require('./cards_1.json');

function cardsData (listId, callback){

    const timeout = 2000;
    setTimeout(()=>{
        const cards1 = cards[listId] || [];
        
        callback(null, cards1)
    },timeout);
}


function requireCards( error,cards1){
    if(error){
        console.log('not found');
    }
    else{
        console.log(cards1);
    }
}
// cardsData(Id3,requireCards);

module.exports ={cardsData,requireCards}