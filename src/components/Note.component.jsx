import React from "react"
import "./note.style.css"

export const Note = (props) => {
  let noteTitle = ''
  let noteContent = ''

  return (
    <div className="note">
      <h2>{noteTitle = "This is the note title"}</h2>
      <p>{noteContent = "This is the note content"}</p>
    </div>
  )
}