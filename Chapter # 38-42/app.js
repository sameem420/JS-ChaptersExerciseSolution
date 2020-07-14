// Task # 1
function power(base,power)
{
    var p = 1;
    for (var i=0; i<power; i++) {
        p *= base;
    }
  return p;
}

alert(power(5,3));