import { CSSProperties, PropsWithChildren } from "react"
import { Pos } from "../types"

type Props = Pos & {
  w?: number
  h?: number
  style?: CSSProperties
  rgb?: string
}

const Card = (p: PropsWithChildren<Props>) => {
  const color = p.rgb ?? "0, 200, 220"

  return (
    <div
      style={{
        position: "relative",
        top: p.y,
        left: p.x,
        background: `rgba(${color}, 0.05)`,
        color: `rgb(${color})`,
        borderRadius: 16,
        display: "inline-block",
        height: p.w ?? 100,
        width: p.h ?? 100,
        padding: 16,
        cursor: "default",
        border: `solid 1px rgb(${color})`,
        boxShadow: `rgba(${color}, 0.1) 0px 8px 24px`,
        fontFamily: "'Quicksand', sans-serif",
        overflowY: "auto",
        ...(p.style ?? {}),
      }}
    >
      {p.children}
    </div>
  )
}

export default Card
