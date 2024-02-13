const problem1 = require('../asynchronousDrill2/callback1');
const problem2 = require('../asynchronousDrill2/callback2');
const problem3 = require('../asynchronousDrill2/callback3');

function getAllInformation() {
    problem1.boardFile('mcu453ed', (boardFile) => {
        console.log(boardFile);

        problem2.findList('mcu453ed', (error, findList) => {
            if (error) {
                console.log('not found');
            } else {
                console.log(findList);

                let count = 0;

                function cardsList(list) {
                    return function (error, cards) {
                        if (error) {
                            console.log('not found');
                        } else {
                            console.log(cards);
                        }
                        count++;

                        if (count === findList.length) {
                            console.log('all cards for all lists');
                        }
                    };
                }

                findList.forEach((list) => {
                    // Assuming list is an object with an 'id' property
                    problem3.cardsData(list.id, cardsList(list));
                });
            }
        });
    });
}

module.exports = { getAllInformation };
