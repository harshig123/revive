import React from "react"
import Layout from "../components/layout"
import Input from "../components/Atoms/input"
import Button from "../components/Atoms/button"
import Fade from "react-reveal/Fade"

const Contact = () => {
  return (
    <Layout>
      <Fade bottom cascade>
        <div className="max-w-7xl mx-auto mt-10 flex text-white xxs:flex-col sm:flex-row">
          <div className="bg-lightblack p-10 rounded-xl w-3/4 m-5">
            <h2 className="text-xs opacity-50">Help Us Help Women</h2>
            <h1 className="text-4xl font-bold font-poppins mt-2 xxs:text-lg sm:text-2xl lg:text-4xl">
              Let's work together
            </h1>
            <p className="text-lg mt-2 opacity-50 w-3/4 xxs:text-xs xxs:w-full sm:text-sm sm:w-3/4">
              Please donate to our foundation
            </p>
            <form className="mt-5">
              <div className="flex xxs:flex-col sm:flex-row">
                <div className="sm:mr-5 xxs:mr-0">
                  <Input placeholder="Card Number"></Input>
                </div>
                <div className="sm:ml-5 xxs:ml-0 xxs:mt-2 sm:mt-0">
                  <Input placeholder="Phone Number"></Input>
                </div>
              </div>

              <div className="flex mt-5 xxs:flex-col sm:flex-row">
                <div className="sm:mr-5 xxs:mr-0">
                  <Input placeholder="CVV"></Input>
                </div>
                <div className="sm:ml-5 xxs:ml-0 xxs:mt-2 sm:mt-0">
                  <Input placeholder="Email Address"></Input>
                </div>
              </div>
            
              
              <div className="flex mt-5 xxs:flex-col sm:flex-row">
                <div className="sm:mr-5 xxs:mr-0">
                  <Input placeholder="Expiration Date"></Input>
                </div>
                <div className="sm:ml-5 xxs:ml-0 xxs:mt-2 sm:mt-0">
                  <Input placeholder="Name"></Input>
                </div>
              </div>
             
              <Button
              
                title="Donate Now"
                colorClass="bg-gradient-to-r from-pink to-purple"
                marginClass="mt-5"
              ></Button>
            </form>
          </div>
          <div className="w-1/4 overflow-hidden rounded-xl m-5 xxs:hidden sm:block">
            <img
              className="object-cover h-full w-full"
              src="https://static01.nyt.com/images/2018/04/08/education/learning/08goodwill-13/08goodwill-13-superJumbo.jpg?quality=75&auto=webp"
            ></img>
          </div>
        </div>
      </Fade>
    </Layout>
  )
}

export default Contact
