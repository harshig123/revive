import { Link } from "gatsby"
import React from "react"

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto p-20 mt-10 bg-lightblack rounded-xl">
      <div className="grid grid-cols-2 xxs:grid-cols-1 lg:grid-cols-2">
        <div>
          <h1 className="text-white text-4xl text-bold">Revive</h1>
          <p className="text-white text-sm mt-5 opacity-50">
            Revive is a nonprofit organization that strives to guide women 
            who want to return to education by providing them mentors and resources. 
            Through Revive, women experience more than just mentorship. 
            They find a sense of community, feel empowered to expand their 
            horizons and develop the needed skills to navigate through life 
            with confidence.
          </p>
          <h1 className="text-white text-lg mt-20 ">
            © copyright Anokhi, Mounika, Harshita{" "}
          </h1>
        </div>
        <div className="place-self-end self-center xxs:hidden lg:block">
          <ul className="text-xl font-poppins font-bold">
            <li>
              <Link to="/">Follow Us On:</Link>
            </li>
            <li>
              <Link to="/">Instagram</Link>
            </li>
            <li>
              <Link to="/">Twitter</Link>
            </li>{" "}
            <li>
              <Link to="/">Facebook</Link>
            </li>
            <li>
              <Link to="/">Linkedin</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
