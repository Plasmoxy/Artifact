import { PropsWithChildren } from "react"
import { Pos } from "../types"

type Props = {
  pos: Pos
}

const Card = (props: PropsWithChildren<Props>) => {
  return (
    <div
      style={{
        position: "relative",
        top: props.pos.y,
        left: props.pos.x,
        background: "white",
        color: "black",
        borderRadius: 16,
        display: "inline-block",
        height: 100,
        width: 100,
        padding: 16,
        userSelect: "none",
        cursor: "default",
      }}
    >
      {props.children}
    </div>
  )
}

export default Card
