const problem1 = require('../asynchronousDrill2/callback1')
const problem2 = require('../asynchronousDrill2/callback2')
const problem3 = require('../asynchronousDrill2/callback3')

function getAllInformation(boardId) {
    function boards(boardId) {
        return new Promise((resolve, reject) => {
            problem1.getBoards(boardId, (boardsList) => {
                if (boardsList) {
                    resolve(boardsList);
                } else {
                    reject("boards not found");
                }
            });
        });
    }

    function lists(boardId) {
        return new Promise((resolve, reject) => {
            problem2.getList(boardId, (error, findList) => {
                if (error) {
                    reject(`Error getting list for board ${boardId}: ${error}`);
                } else {
                    resolve(findList);
                }
            });
        });
    }

    function cards(listId) {
        return new Promise((resolve, reject) => {
            problem3.getCards(listId, (error, findCards) => {
                if (error) {
                    reject(`Error getting cards for list ${listId}: ${error}`);
                } else {
                    resolve(findCards);
                }
            });
        });
    }

    boards(boardId)
        .then((boardsList) => {
            console.log('Boards:', boardsList);
            return lists(boardId);
        })
        .then((findList) => {
            console.log('Lists:', findList);
            const promises = findList.map((list) => cards(list.id));
            return Promise.all(promises);
        })
        .then((allCards) => {
            console.log('All Cards:', allCards);
        })
        .catch((error) => {
            console.log('Error:', error);
        });
}

module.exports = { getAllInformation };
