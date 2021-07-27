
var participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
var completion = ["josipa", "filipa", "marina", "nikola"];
var answer = '';

console.log(solution(participant,completion));

function solution(participant, completion) {
  var participant = participant.sort();
  var completion = completion.sort();
  var chkNum = 0;

  for(var i = 0; i < participant.length; i++){
    for(var a = chkNum; a < participant.length; a++){
      if(participant[i] == completion[chkNum]){
        chkNum++;
        break;
      }else{
        answer = participant[i];
      }
    }
  }
  
  return answer;
}