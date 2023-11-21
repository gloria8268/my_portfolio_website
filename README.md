# Personal Portfolio Website

### install react / react-bootstramp

## Struture

### Header
 * Using <Navbar /> component 
    ** Left Navbar.Brand
    ** Right Toggle & Collapse to have response to different size of screen
      (Nav, Nav.Link, <Button />)
  
### Main
  ### section 1 - Banner
   ** Col-left : description about self; using UseEffect to SetText to show up on the screen.
   ** Col-right: picture, amination by setting CSS

  ### sectiion 2 - Skills
    ** using "react-multi-carousel" to display rolling skills

  ### sectiion 3 - Projects
    using Tab.Container to display Tabs and projects details.
    1. using Nav - Nav.Link setting eventKey to jump between tabs
    ** using Tab.content to includes tab.pane(setting eventKey) to display pitcures of different projects.

  ### sectiion 4 - Get in Touch -->
    using <Form> to get contact detials;
    install npm install express cors nodemailer and setting up server.js 

### Footer

TO FINISH : 
 * npm install animate.css --save
  * npm i react-on-screen