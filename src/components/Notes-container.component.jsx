import React from "react"
import { Note } from "./Note.component"
import "./Notes-container.style.css"

export const NotesContainer = (props) => {
  return (
    <div className="notes-container">
      <Note />
      <Note />
      <Note />
      <Note />
    </div>
  )
}