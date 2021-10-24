const getRandomNum = (min, max) => {
  return Math.round(Math.random() * (max - min) + min)
}

const arrayNum = (numElements, sizeString) => {
  let array = []
  let randomNum = getRandomNum(2, sizeString-5)
  
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
  const topDoor = getRandomNum(2, sizeString-3)
  const lanterns = arrayNum(2, sizeString-3)
  const slicer = getRandomNum(6, sizeString-3)

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

  if(styleObj === 'style2') {
    for(let i = 0; i <= sizeString-2; i++) {
      if(i === 0) {
        arrayObj.push('a')        
      }

      if(i === slicer) {
        arrayObj.push('*')
      }

      arrayObj.push(' ')
      
      if(i === sizeString-2) {
        arrayObj.push('b')
      }
    } 
  }

  let objects = arrayObj.toString().replace(/[^a-z ( ) } * $ %  ^ ]/g, '')
  return objects
}

export const createMap = (screenWidth, screenHeight) => {
  let top = 'top-style1'
  let styleLevel = 'style1'
  let bottom = 'bottom-style1'

  let map = []
  let numContentsInArray = (screenWidth * 18) / screenHeight
  let numElementsInArray = ((screenHeight * 32) / screenWidth) - 2
  
  numContentsInArray -= 2
  numElementsInArray -= 2

  let slicers = arrayNum(2, numElementsInArray)

  for(let i = 1; i <= numElementsInArray-3; i++) {
    if(i === 1) {
      map.push(createObjInMap(numContentsInArray, top))
    }

    if(i !== 1 || i !== numElementsInArray) {
      if(i === slicers[0]) {
        map.push(createObjInMap(numContentsInArray, 'style2'))
      }

      if(i === slicers[1]) {
        map.push(createObjInMap(numContentsInArray, 'style2'))
      }

      if(i === slicers[2]) {
        map.push(createObjInMap(numContentsInArray, 'style2'))
      }

      map.push(createObjInMap(numContentsInArray, styleLevel))
    }

    if(i === numElementsInArray-3) {
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

console.log(createMap(1536, 864))
// console.log(arrayTeste)