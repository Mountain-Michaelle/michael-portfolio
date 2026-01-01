import React from 'react'
import TypeWriter from 'typewriter-effect';


const Types = () => {
  return (
        <TypeWriter
        options={{
            strings: [
                "Django Developer",
                "Flask Developer",
                "Automation Engineer",
                "NextJs/React Developer",
                "UI/UX Designer",
                "Golang Developer"
            ],

            autoStart: true,
            loop: true,
            deleteSpeed: 20,
        }}
        />
  )
}

export default Types