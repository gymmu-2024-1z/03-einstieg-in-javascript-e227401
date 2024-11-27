import { linkupExerciseHandler } from "./utils"

/**
 * Wir erstellen hier eine Funktion für die Aufgabe 1. Funktionen sind praktisch
 * um den Code innerhalb, vom rest zu trennen. Dadurch können wir Variablen mit
 * gleichem Namen auch in anderen Funktionen verwenden, ohne das deren Wert
 * überschrieben wird.
 * Funktionen können auch verwendet werden, um an anderer Stelle wieder
 * verwendet zu werden. Wir machen das in diesem Projekt eigentlich nicht, aber
 * wenn Sie des Resultat von einer Funktion nochmals brauchen, können Sie das
 * wie folgt machen:
 *    `const withoutE = aufgabe01("Hier ist ein Text mit einigen e's")`
 * Damit wird der Code in aufgabe01 ausgeführt, der sollte alle e's entfernen,
 * und das Resultate wird in der Variable `withoutE` gespeichert, und kann dann
 * weiter verwendet werden.
 */
export function aufgabe01(args) {
  // Wir speichern hier den Wert von args in der Variable `input` ab. Damit soll für uns klarer werden, womit wir arbeiten.
  const input = args

  // Wir erzeugen hier eine leere Liste, in der wir das Resultat Stück für Stück anhängen.
  const result = []

  // Mit dieser Schlaufe nummerieren wir jedes Zeichen in `input` durch. Das
  // machen wir um jedes Zeichen einzeln anzuschauen.
  for (let i = 0; i < input.length; i++) {
    // Hier speichern wir das Zeichen an der Stelle `i` in der Variable
    // `currentElement`, damit es explizit ist womit wir arbeiten, aber auch
    // damit wir nicht so viele Klammern schreiben müssen.
    const currentElement = input[i]

    if (currentElement === "e") {
      // do nothing
    } else if (currentElement === "E") {
      // auch E ignorieren
    } else {
      result.push(currentElement)
    }

    // Hier wird das aktuelle Zeichen ans Ende der Resultat-Liste angehängt.
  }

  // Hier geben wir das Resultat zurück, und machen einen Text daraus.
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe01]", aufgabe01)

export function aufgabe02(args) {
  const input = args
  const result = [] // Das ist die Resultatliste
  // läut Zeichen für Zeichen über den ganzen Text.
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const upperCase = currentElement.toUpperCase()
    result.push(upperCase)
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe02]", aufgabe02)

export function aufgabe03(args) {
  const input = args

  let count = 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      // Zähle alle 'e's durch
      count = count + 1
    }
  }
  return count
}
linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03)

export function aufgabe05(args) {
  const input = args
  const result = []

  let hasUpperCaseLetter = false
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const upperCaseLetter = currentElement.toUpperCase()
    if (currentElement === ".") {
    } else if (currentElement === " ") {
    } else if (currentElement === upperCaseLetter) {
      hasUpperCaseLetter = true
      //Prüfe den Text auf Grossbuchstaben.
    }
  }
  return hasUpperCaseLetter
}
linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

export function aufgabe06(args) {
  const input = args
  const result = []

  // Erstelle eine Variable, die sagt uns, ob ein Sonderzeichen vorkommt
  let istSonderzeichen = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Wandle in grossbuchstabe um
    const upperCaseLetter = currentElement.toUpperCase()
    // Wandle wieder in Kleinbuchstabe um
    const lowerCaseLetter = upperCaseLetter.toLowerCase()

    // Prüfe ob lowerCaseLetter gleich upperCaseLetter ist
    if (lowerCaseLetter === upperCaseLetter) {
      istSonderzeichen = true
    }
  }

  // Gib zurück ob es ein Sonderzeichen hat
  return istSonderzeichen
}
linkupExerciseHandler("[data-click=aufgabe06]", aufgabe06)

export function aufgabe07(args) {
  const input = args
  const result = []
  // Erstellle eine Variable, die sagt uns, ob ein 'und' vorkommt
  let istUnd = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (
      currentElement === "u" &&
      input[i + 1] === "n" &&
      input[i + 2] === "d"
    ) {
      istUnd = true
    }
  }
  // Gib zurück ob es ein 'und' hat
  return istUnd
}
linkupExerciseHandler("[data-click=aufgabe07]", aufgabe07)

export function aufgabe08(args) {
  const input = args
  const result = []
  // Erstelle eine Variable, die uns alle "e"s anzeigt
  let eCounter = 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      // Schreibe den ganzen text und setze ein buchstaben nach dem anderen und ersetze alle "e"s mit 3
      result.push("3")
    } else {
      result.push(currentElement)
    }
  }

  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)

export function aufgabe09(args) {
  const input = args
  const result = []
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    count = count + 1
  }

  // IstEingabe= 6 Zeichen
  if (count === 6) {
    // Gebe die Eingabe zurueck
    return true
  } else {
    return false
  }
}

linkupExerciseHandler("[data-click=aufgabe09]", aufgabe09)

export function aufgabe12(args) {
  const input = args
  const result = []
  // istPosition= erstes "e"
  let istPosition = -1
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      istPosition = i
      return istPosition
    }
  }
  // Bestimme Position des ersten "e"s im Text
  return istPosition
}
linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)

export function aufgabe13(args) {
  const input = args
  const result = []
  // istPosition= letzten "e"
  let istPosition = -1
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      istPosition = i
    }
  }
  // Bestimme Position des letzen "e"s im Text
  return istPosition
}

linkupExerciseHandler("[data-click=aufgabe13]", aufgabe13)

export function aufgabe14(args) {
  const input = args
  const result = []
  // istPosition= drittes "e"
  let istPosition = -1
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      istPosition = i
    }
  }
  // Bestimme die Position des dritten "e"s im Text
  return istPosition
}
linkupExerciseHandler('[data-click="aufgabe14"]', aufgabe14)

export function aufgabe15(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Wenn du ein leerzeichen findest, dann gib result zurück und breche ab
    if (currentElement === " ") {
      return result.join("")
    }

    // hänge das zeichen an result an
    result.push(currentElement)
  }
  return result.join("")
}
linkupExerciseHandler('[data-click="aufgabe15"]', aufgabe15)

export function aufgabe16(args) {
  const input = args
  const result1 = []
  const result2 = []

  // istDollarzeichen= false
  let istDollarzeichen = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "$") {
      istDollarzeichen = true
    }

    // Wenn dollarzeichen falsch ist, dann hänge currentElement an result1 an
    if (istDollarzeichen === false) {
      result1.push(currentElement)
    }
    // Wenn dollarzeichen richtig ist, dann hange currentElement an result2 an
    if (istDollarzeichen === true) {
      result2.push(currentElement)
    }
  }
  // Gib result1 und result2 zurueck
  return [result1.join(""), result2.join("")]
}

linkupExerciseHandler('[data-click="aufgabe16"]', aufgabe16)

export function aufgabe17(args) {
  const input = args
  const result = []
}
linkupExerciseHandler('[data-click="aufgabe17"]', aufgabe17)

export function aufgabe19(args) {
  const input = args
  const result = []
  // verdopple alle zeichen
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    result.push(currentElement)
    result.push(currentElement)
  }
  return result.join("")
}

linkupExerciseHandler('[data-click="aufgabe19"]', aufgabe19)

export function aufgabe20(args) {
  const input = args
  const result = []

  for (
    let i = 0;
    i < input.length;
    i++ // Finde alle punkte )
  ) {
    const currentElement = input[i]
    if (currentElement === ".") {
      // teste nun, ob ein Leerschlag dahinter ist
      if (input[i + 1] === " ") {
        // ist okay suche weiter
      } else {
        // Gibt false zurueck
        return false
      }
      // Erstelle hinter jeden Punkt ein Leerschlag
      result.push(currentElement)
      result.push(" ")
    }
  } //returne true
  return true
}
linkupExerciseHandler('[data-click="aufgabe20"]', aufgabe20)

export function aufgabe21(args) {
  const input = args
  const result = []
  // Speichere die ganze Eingabe

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    result.push(currentElement)
  }
  // Nimm die ganze Eingabe und kehre sie um
  return result.reverse().join("")
}
linkupExerciseHandler('[data-click="aufgabe21"]', aufgabe21)

export function aufgabe22(args) {
  const input = args
  const result = []

  // istK= false
  let istK = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "k") {
      istK = true
    }
    // Wenn istK false ist, dann gib result1 zurueck
    if (istK === false) {
      // Hänge ein Unterstrich an
      result.push("_")
    }
    // Wenn istK true ist, dann hänge aktuelles Zeichen an
    if (istK === true) {
      result.push(currentElement)
    }
  }
  return result.join("")
}

linkupExerciseHandler('[data-click="aufgabe22"]', aufgabe22)

export function aufgabe23(args) {
  const input = args
  const result = []
  //Speichere das erste Zeichen
  const firstElement = input[0]
  // Hänge das erste Zeichen vor und am schluss der Ausgabe an
  result.push(firstElement)
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Hänge aktuelles Zeichen an
    result.push(currentElement)
  }
  // Hänge das erste Zeichen ganz am Schluss der Ausgabe an
  result.push(firstElement)
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe23]", aufgabe23)

export function aufgabe24(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {}
}

export function aufgabe26(args) {
  const input = args
  const result = []

  const firstElement = input[0]
  const nextElement = input[1]

  // wenn der ascii wert vom nächsten Element kleiner ist, dann vertausche die Elemente

  if (firstElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
    result.push(nextElement)
    result.push(firstElement)
  } else {
    result.push(firstElement)
    result.push(nextElement)
  }
  for (let i = 2; i < input.length; i++) {
    const currentElement = input[i]

    result.push(currentElement)
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe26]", aufgabe26)

export function aufgabe27(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)

    if (ascii >= 48 && ascii <= 57) {
      // Gebe ASCII wert von Zahlen ein, um sie zu erkennen und als true zurueckzugeben
      return true
    } else {
      // Gebe false zurueck
      return false
    }
  }
}
linkupExerciseHandler("[data-click=aufgabe27]", aufgabe27)
