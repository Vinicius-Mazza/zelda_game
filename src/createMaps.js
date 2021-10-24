const getRandomNum = (min, max) => {
  return Math.round(Math.random() * (max - min) + min)
}

const arrayNum = (numElements, sizeString) => {
  let array = []
  let randomNum = getRandomNum(2, sizeString-2)
  
  for(let i = 0; i <= numElements; i++) {
    if(array[i] !== randomNum) {
      array.push(randomNum)
    }
    randomNum = getRandomNum(5, sizeString-5)
  }
  return array
}

const createObjInMap = (sizeString, styleObj) => {
  let arrayObj = []
  let topDoor = getRandomNum(2, sizeString-3)
  let lanterns = arrayNum(2, sizeString)

  if(styleObj === 'top-style1') {
    for(let i = 1; i <= sizeString-2; i++) {
      if(i === 1) {
        arrayObj.push('y')
      }

      if(i === topDoor) {
        arrayObj.push('^')
      }

      if(i === lanterns[0]) {
        arrayObj.push(')')
      }

      if(i === lanterns[1]) {
        arrayObj.push(')')
      }

      if(i === lanterns[2]) {
        arrayObj.push(')')
      }

      arrayObj.push('c')
      
      if(i === sizeString-4)
      arrayObj.push('w')
    }
  }

  if(styleObj === 'bottom-style1') {
    for(let i = 1; i <= sizeString; i++) {
      if(i === 1) {
        arrayObj.push('x')
      }

      if(i === lanterns[0]) {
        arrayObj.push(')')
      }

      if(i === lanterns[1]) {
        arrayObj.push(')')
      }

      if(i === lanterns[2]) {
        arrayObj.push(')')
      }

      arrayObj.push('d')
      
      if(i === sizeString-3)
      arrayObj.push('z')
    }
  }

  if(styleObj === 'style1') {
    for(let i = 0; i < sizeString; i++) {
      if(i === 0) {
        arrayObj.push('a')        
      }

      arrayObj.push(' ')
      
      if(i === sizeString-1) {
        arrayObj.push('b')
      }
    } 
  }

  let objects = arrayObj.toString().replace(/[^a-z ( ) } * $ %  ^ ]/g, '')
  return objects
}

export const createMap = (screenWidth, screenHeight, top, styleLevel, bottom) => {
  let map = []
  let numContentsInArray = (screenWidth * 18) / screenHeight
  let numElementsInArray = ((screenHeight * 32) / screenWidth) - 2
  numContentsInArray -= 2
  numElementsInArray -= 2

  for(let i = 1; i <= numElementsInArray; i++) {
    if(i === 1) {
      map.push(createObjInMap(numContentsInArray, top))
    }

    if(i !== 1 || i !== numElementsInArray) {
      map.push(createObjInMap(numContentsInArray, styleLevel))      
    }

    if(i === numElementsInArray) {
      map.push(createObjInMap(numContentsInArray, bottom))
    }
  }

  return map
}

  // let arrayTeste = 
  //   [
  //     'ycc)cccccccccccccccccccc^ccccccw',
  //     'a                              b',
  //     'a      *                       b',
  //     'a    (                         b',
  //     '%                              b',
  //     'a    (                         b',
  //     'a   *                          b',
  //     'a                              b',
  //     'a                              b',
  //     'a                              b',
  //     'a                              b',
  //     'a                              b',
  //     'a                              b',
  //     'a                              b',
  //     'a                              b',
  //     'xdd)dd)ddddddddddddddddddddddddz'
  //   ]

// console.log(createMap(1536, 864, 'top-style1', 'style1', 'bottom-style1'))
// console.log(arrayTeste)