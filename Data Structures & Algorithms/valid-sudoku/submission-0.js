class Solution {
    isValidSudoku(board) {
       const boardSet = new Set();

        for(let rowIndex = 0; rowIndex < 9; rowIndex++){
            for(let colIndex = 0; colIndex < 9; colIndex++){
                const cellValue = board[rowIndex][colIndex]

                if(cellValue !== "."){
                    const boxRowIndex = Math.floor(rowIndex / 3);
                    const boxColIndex = Math.floor(colIndex / 3);

                    const rowKey = `row-${rowIndex}-${cellValue}`
                    const colKey = `col-${colIndex}-${cellValue}`
                    const boxKey = `box-${boxRowIndex}-${boxColIndex}-${cellValue}`

                    if(boardSet.has(rowKey) || boardSet.has(colKey) || boardSet.has(boxKey)){
                        return false;
                    }

                    boardSet.add(rowKey);
                    boardSet.add(colKey)
                    boardSet.add(boxKey)
                }
            }
        }
        return true
    }
}
