import { useState } from "react"
import Draggable from "react-draggable"
import Card from "./components/Card"

const App: React.FC = (props) => {
  return (
    <div>
      <Card x={50} y={100} w={200} h={200}>
        <h2>Quicksand</h2>
        <span>
          Quicksand font lorem ipsum pretty cool am i right, adada dada dada
          fufufufu
        </span>
      </Card>
      <Card
        x={100}
        y={300}
        w={200}
        h={200}
        style={{ fontFamily: "Chivo" }}
        rgb="255, 0, 166"
      >
        <h2>Chivo</h2>
        <span>
          Chivo font lorem ipsum pretty cool am i right, adada dada dada
          fufufufu
        </span>
      </Card>
    </div>
  )
}

export default App
