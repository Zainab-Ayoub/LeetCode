class Solution {
public:
    bool isValidSudoku(vector<vector<char>>& board) {
        int N=9;
        std::vector<std::unordered_set<int>> row(N);
        std::vector<std::unordered_set<int>> col(N);
        std::vector<std::unordered_set<int>> box(N);

        for(int r = 0; r < N; r++){
            for(int c = 0; c < N; c++){
                char value = board[r][c];

                if(value == '.'){
                    continue;
                }

                if(row[r].count(value)){
                    return false;
                } 
                row[r].insert(value);

                if(col[c].count(value)){
                    return false;
                } 
                col[c].insert(value);
                
                int index = (r/3) * 3 + (c/3);
                if(box[index].count(value)){
                    return false;
                } 
                box[index].insert(value);
            }
        }
        return true;
    }
};