function cinema([arg1,arg2,arg3]){
  let projection = arg1.toLowerCase();
  let rows = Number(arg2);
  let columns = Number(arg3);

  switch(projection){
    case 'premiere': console.log((rows * columns * 12).toFixed(2) + ' leva');
    break;
    case 'normal': console.log((rows * columns * 7.5).toFixed(2) + ' leva');
    break;
    case 'discount': console.log((rows * columns * 5).toFixed(2) + ' leva');
    break;
  }
}

cinema(['Premiere', 10, 12]);
