const problem1 = require('../asynchronousDrill2/callback1');
const problem2 = require('../asynchronousDrill2/callback2');
const problem3 = require('../asynchronousDrill2/callback3');

function getAllInformation(){
    const promise1 = new Promise((resolve, reject) => {
        problem1.getBoards('mcu453ed', (findBoard) => {
            if (findBoard) {
                resolve(findBoard);
            } else {
                reject('data not found');
            }
        });
    }).then((result1)=>{
        console.log(result1)
    }).catch((error)=>{
        console.log(error);
    })

    const promise2 = new Promise((resolve, reject) => {
        problem2.getList('mcu453ed', (error, findList1) => {
            if (error) {
                reject('data not found');
            } else {
                resolve(findList1);
            }
        });
    }).then((result2)=>{
        console.log(result2)
    }).catch((error)=>{
        console.log(error);
    })

   
    const promise3 = new Promise((resolve, reject) => {
        const mindListID = 'qwsa221';
        problem3.getCards(mindListID, (error, findCard) => {
            if (error) {
                reject('data not found');
            } else {

                resolve(findCard);
            }
        });
    }).then((result3)=>{
        console.log(result3)
    }).catch((error)=>{
        console.log(error);
    })


    const promise4 = new Promise((resolve, reject) => {
    const spaceListID = 'jwkh245';
        problem3.getCards(spaceListID, (error, findCard1) => {
            if (error) {
                reject('data not found');
            } else {
                resolve(findCard1);
            }
        });
    }).then((result4)=>{
        console.log(result4)
    }).catch((error)=>{
        console.log(error);
    })
}

module.exports = {getAllInformation}