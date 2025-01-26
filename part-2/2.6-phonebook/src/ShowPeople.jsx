import React from "react"

const ShowPeople = ({ persons, filterName }) => {
    return (
        <ul>
        {persons.map((person) => 
          person.name.includes(filterName)
            ? 
              <li key={person.id}>{person.name} {person.number}</li>
            : null
        )}
      </ul>
    )
}

export default ShowPeople