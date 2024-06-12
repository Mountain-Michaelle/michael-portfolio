import React from 'react'
import TypeWriter from 'typewriter-effect';


const Types = () => {
  return (
        <TypeWriter
        options={{
            strings: [
                "Django Developer",
                "React Developer",
                "NextJs Developer",
                "Graphic Designer"
            ],

            autoStart: true,
            loop: true,
            deleteSpeed: 20,
        }}
        />
  )
}

export default Types