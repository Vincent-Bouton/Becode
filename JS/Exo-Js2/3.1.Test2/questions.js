const CreationTableauLangages =  () => ["Html","CSS","Java","PHP"]

const CreationTableauNombres =  () => {
  const array = []
  for (let i = 0; i <= 5; i++){
    array.push(i)
  }
  return array
}

const RemplacementElement =  langages => {
  langages.splice(2,1,"Javascript")
  return langages
}
const AjoutElementLangages =  (langages) => {
  langages.push('Ruby')
  langages.push('Python')
  return langages
}

const AjoutElementNombres =  (nombres) => {
  nombres.unshift(-2,-1)
  return nombres
}

const SuppressionPremierElement =  (langages) => {
  langages.shift()
  return langages
}

const SuppressionDernierElement =  (langages) => {
  langages.pop()
  return langages
}

const ConversionChaineTableau =  (reseaux_sociaux_chaine) => {
  const array = reseaux_sociaux_chaine.split(',')
  return array
}

const ConversionTableauChaine =  (langages) => {
  const array = langages.join()
  return array
}

const TriTableau =  (reseaux_sociaux) => {
  reseaux_sociaux.sort()
  return reseaux_sociaux
}

const InversionTableau =  (reseaux_sociaux) =>{
  reseaux_sociaux.reverse()
  return reseaux_sociaux
}
