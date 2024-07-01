import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card"
function App () {
   const reviews = [
      {
        name: "John Doe",
        designation: "Software Engineer",
        description: "Experienced software developer specializing in web applications.",
        image: "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg", // Assuming images are stored in a directory accessible to your project
      },
      {
        name: "Jane Smith",
        designation: "UX/UI Designer",
        description: "Passionate about creating intuitive and user-friendly interfaces.",
        image: "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?size=626&ext=jpg",
      },
      {
        name: "Michael Johnson",
        designation: "Project Manager",
        description: "Skilled in managing cross-functional teams to deliver projects on time.",
        image: "https://img.freepik.com/premium-photo/memoji-happy-man-white-background-emoji_826801-6836.jpg?size=626&ext=jpg",
      },
      {
        name: "Emily Brown",
        designation: "Marketing Specialist",
        description: "Creative strategist with expertise in digital marketing campaigns.",
        image: "https://img.freepik.com/free-photo/view-3d-man-holding-laptop_23-2150709818.jpg?size=626&ext=jpg",
      },
      {
        name: "David Wilson",
        designation: "Financial Analyst",
        description: "Analytical thinker proficient in financial modeling and forecasting.",
        image: "https://img.freepik.com/premium-photo/memoji-happy-man-white-background-emoji_826801-6839.jpg?size=626&ext=jpg&ga=GA1.1.1953331100.1718301756&semt=sph",
      }
    ]  
    return (
       <>
          <Navbar />
          <Card review = {reviews}/>
       </>
    )
}
export default App
