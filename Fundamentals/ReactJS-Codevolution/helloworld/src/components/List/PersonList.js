import React from "react";

function Person({ person }) {
    return (
        <div>
            <h3>
                I'm {person.name}, {person.age} years old. I know {person.skill}
            </h3>
        </div>
    );
}

function PersonList() {
    const persons = [
        {
            id: 0,
            name: "Prabhu",
            age: 21,
            skill: "React JS",
        },
        {
            id: 1,
            name: "Ammu",
            age: 18,
            skill: "Physics",
        },
        {
            id: 2,
            name: "John",
            age: 22,
            skill: "Embedded C",
        },
        {
            id: 3,
            name: "Jai Surya",
            age: 21,
            skill: "PHP",
        },
    ];

    const nameList = persons.map((person) => <Person key={person.id} person={person}></Person>);
    return <div>{nameList}</div>;
}

export default PersonList;
