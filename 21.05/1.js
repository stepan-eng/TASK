//Используя reduce получить такой результат
function countWords(arr) {
    var result={};

    var  last=arr.reduce(function (previous, item) {
        if (String(previous) in result){
            result[previous]++;
        }
        else {
            result[previous]=1;
        }
        return item;
    });
    if (String(last) in result){
        result[last]++;
    }
    else {
        result[last]=1;
    }
    return result;
}
var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];

var  result=countWords(inputWords);
//
//
//    for (var key in result) {
//
//        alert("Ключ: " + key + " значение: " + result[key]);// Діма, чому result.key=undefined, a result[key]=число,;   ???????????
//    }
console.log(countWords(inputWords));
// =>
// {
//   Apple: 2,
//   Banana: 1,
//   Durian: 3
// }