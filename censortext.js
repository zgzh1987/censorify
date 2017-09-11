var censoredWords=["sad","bad","mad"];
var customCensoredWords=[];
function censor(inStr) {
    for(idx in censoredWords){
        inStr=inStr.replace(censoredWords[idx],"***");
    }
    for(idx in customCensoredWords){
        inStr=inStr.replace(customCensoredWords[idx],"***");}
        return inStr;
}
function addCensoreWord(word) {
    customCensoredWords.push(word);
}
function getCensoreWords() {
    return censoredWords.concat(customCensoredWords);
}
exports.censor=censor;
exports.addCensoreWord=addCensoreWord;
exports.getCensoreWords=getCensoreWords;