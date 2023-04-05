import React from 'react'
import Button from '../components/Button'
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

const ButtonPage = () => {

  return (
    <div>
      {/* <div><Button primary>Hello 1</Button></div>
     <div><Button secondary>Hello 2</Button></div>
     <div><Button success>Hello 3</Button></div>
     <div><Button warning>Hello 4</Button></div>
     <div><Button danger>Hello 5</Button></div>
     <div><Button primary rounded>Hello 1</Button></div>
     <div><Button primary outline>Hello 1</Button></div> */}
      <div><Button secondary outline rounded>
        <GoBell />
        Click me!!</Button></div>

      <div><Button danger outline rounded>
        <GoCloudDownload />
        Buy Now!!</Button></div>

      <div><Button warning>
        <GoDatabase />
        See Deal!!</Button></div>
    </div>
  )
}

export default ButtonPage
