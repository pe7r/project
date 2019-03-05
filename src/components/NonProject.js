import React from 'react'

function SomeFunction() {
  const date = new Date()
  const seconds = date.getSeconds()
  let timeOfDay
  const styles = {
    fontSize: 30
  }
  
  if (seconds < 350) {
    timeOfDay = "trying"
    styles.color = "#04756F"
  } else if (seconds >= 350 && seconds < 650) {
    timeOfDay = "to"
    styles.color = "#2E0927"
  } else {
    timeOfDay = "forgeeeet"
    styles.color = "#D90000"
  }
  
  return (
    <h1 style={styles}>Good {timeOfDay}!</h1>
  )
}

export default SomeFunction;