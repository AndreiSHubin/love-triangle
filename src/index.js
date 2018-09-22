/**
 * @returns number of love triangles
 * @param preferences - an array of integers. Indices of people, whom they love
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
 var i;
 var counter = 0;
 for ( i = 0; i < preferences.length; i++){
  a = preferences[i]-1;
  b = preferences[a]-1;
  c = preferences[b]-1;
  if (c == i && a >= 0 && b >=0 && c >=0 &&
    a != b &&
    b != c &&
    c != a){
 
    counter++
  }
 
 }
return counter/3;
};  