let pixles = 10;
while (pixles < 100) {
  console.log('%c    ', ' border-left: '+pixles+'px solid red; border-right: '+(100-pixles)+'px solid green;')
  pixles += 10
}
