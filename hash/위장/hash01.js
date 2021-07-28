

var clothes = [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]];
var clothes02 = [["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]];

solution(clothes);

function solution(clothes) {
  var answer = clothes.length;
  var map = new Map();
  
  for(var i = 0; i < clothes.length; i++){
    map.set(clothes[i][1],(map.get(clothes[i][1]) || 0) + 1);
  }

  if(1 < map.size){
    var count = 1;

    for(var [a, b] of map){
      count *= b+1;
    }

    answer = count - 1;
  }
  return answer;
}