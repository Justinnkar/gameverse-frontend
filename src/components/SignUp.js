import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Col, Label, Input, Button, Row } from "reactstrap"
import "../styles/SignUp.css"
import { motion } from "framer-motion"

const SignUp = ({ signup }) => {

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    const userInfo = {
      user: { email: data.email, password: data.password },
    }
    signup(userInfo)
    navigate("/")
    e.target.reset()
  }

  return (
    <div className="signup-page">

      <div className="signup-form">
        
        <div className="signup-text">
          User SignUp
        </div>

        <Form onSubmit={handleSubmit}>
          <Row className="row-cols-lg-auto g-3 align-items-center">
            <Col>
              <Label
                  className="visually-hidden"
                  for="exampleEmail"
                >
                  Email
                </Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="user e-mail"
                type="email"
              />
            </Col>

            <Col>

              <Label
                className="visually-hidden"
                for="Password"
              >
                Password
              </Label>

              <Input
                id="examplePassword"
                name="password"
                placeholder="user password"
                type="password"
              />
            </Col>

            <Col>
              <Button
                type="submit"
              >
                Submit
              </Button>
            </Col>

          </Row>

        </Form>

      </div>

      <div>
        <motion.h3 className="animate-text1"
          animate={{ 
          x: [200 , 30, 0],
          y: [400, 350, 300],
          opacity: 2, 
          scale: 1 
          }}
          transition={{
            duration: 10,
            delay: 0,
            ease: [0.5, 0.71, 1, 1.01],
          }}
          initial={{ opacity: 1, scale: 0.5 }}
          whileHover={{ scale: 2 }}
        >
          Join the fine GameVerse with me!!
        </motion.h3>
      </div>

    </div>

  )

}

export default SignUp