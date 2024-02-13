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
            problem3.cardsData('ghnb768',(error,cardsInfo)=>{
                if(error){
                    console.log('not found')
                }
                else{
                    console.log(cardsInfo)
                }
            })
           
        })

    });
}

module.exports ={getAllInformation}; 