const problem1 = require('../asynchronousDrill2/callback1');
const problem2 = require('../asynchronousDrill2/callback2');
const problem3 = require('../asynchronousDrill2/callback3');


function getAllInformation (){

    problem1.boardFile('mcu453ed',(boardFile) =>{
            console.log(boardFile);
        
        problem2.findList('mcu453ed',(error,findList) => {
            if(error){
                console.log('not found');
            }
            else{
                console.log(findList);
            }
            const mindListID = 'qwsa221';
            const spaceListID = 'jwkh245';
            problem3.cardsData(mindListID,(error,mindCards)=> {
                if(error){
                    console.log('not found')
                }
                else{
                    console.log(mindCards);
                }
                problem3.cardsData(spaceListID,(error,spaceCards)=>{
                    if(error){
                        console.log('not found');
                    }
                    else{
                        console.log(spaceCards);
                    }
                })
            })
        })

    });
}

module.exports ={getAllInformation}; 