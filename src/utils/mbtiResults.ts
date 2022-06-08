const mbtiStats = {
  EI: 0,
  SN: 0,
  TF: 0,
  JP: 0,
}

export const mbti: string[] = []

export const InitMbti = () => {
  mbtiStats.EI = 0
  mbtiStats.SN = 0
  mbtiStats.TF = 0
  mbtiStats.JP = 0

  mbti.splice(0, 3)
}

export const MbtiFigure = (type: string) => {
  switch (type) {
    case 'EI':
      mbtiStats.EI += 1
      break
    case 'SN':
      mbtiStats.SN += 1
      break
    case 'TF':
      mbtiStats.TF += 1
      break
    case 'JP':
      mbtiStats.JP += 1
      break
  }
  return mbtiStats
}

export const MbtiResults = () => {
  mbtiStats.EI < 2 ? mbti.push('I') : mbti.push('E')
  mbtiStats.SN < 2 ? mbti.push('N') : mbti.push('S')
  mbtiStats.TF < 2 ? mbti.push('F') : mbti.push('T')
  mbtiStats.JP < 2 ? mbti.push('P') : mbti.push('J')
}
