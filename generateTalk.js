const task = {
  engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

}


const phrase = ['很簡單', '很容易', '很快', '很正常']

function generateTalk(target) {
  let talkArray = []
  let personRandomIndex = 0
  let talk = ''
  let personName = ''
  const phraseRandomIndex = Math.floor(Math.random() * phrase.length)
  if (!target) {
    talk = '請選擇想講幹話的人'
    return talk
  }
  if (target === 'engineer') {
    talkArray = task.engineer
    personName = '工程師'
    personRandomIndex = Math.floor(Math.random() * talkArray.length)
  }
  if (target === 'designer') {
    talkArray = task.designer
    personName = '設計師'
    personRandomIndex = Math.floor(Math.random() * talkArray.length)
  }
  if (target === 'entrepreneur') {
    talkArray = task.entrepreneur
    personName = '創業家'
    personRandomIndex = Math.floor(Math.random() * talkArray.length)
  }
  console.log(personRandomIndex)
  talk = `${personName}，${talkArray[personRandomIndex]}`
  talk += `${phrase[phraseRandomIndex]}!, 不是嗎？`
  return talk
}
module.exports = generateTalk
