Kacper Paterek, Szymon Banach, Mikołaj Łoza \- Data Visualization, group 3

**Project Description: Virtual Wardrobe App**

Our project is a virtual wardrobe app that helps users create outfits. With this app, you can mix and match clothing items to put together great outfits.

A minor feature of our app is the integration of color theory. User will receive tips on colors that match to each other based on color theory, helping them to make visually appealing choices. This makes it easy for users to learn how colors connect, but also explore how color relationships works in practice.

Beyond practical use, our app provides unique opportunities for cultural and social exploration. It can be used to study stereotypes tied to fashion choices across various cultures and social environments, offering insights into how color and clothing influence perceptions. This makes the app an innovative tool for both personal style enhancement and academic research into color theory and societal norms.

Key Features:

* Virtual wardrobe to organize and select outfits.  
* Color theory-based tips for color combinations.  
* A practical way to study cultural and social stereotypes related to clothing.  
* A practical way to study color theory in action.

   
**Technical Description**

 The Virtual Wardrobe app is built using HTML, CSS, and JavaScript, providing a simple but clean, readable interface for exploring clothing combinations and color suggestions based on color theory.

We used chatGPT to help us to create color-suggestions function.

We worked as a team with every step in this project, from CSS to JS we looked for solutions together.

HTML (VW.html):

* Structures the app layout, including sliders for browsing clothing images and containers for color suggestions.  
* Implements data attributes (data-slider) for easy indexing and interaction with JavaScript.

CSS (style.css):

* Provides a clean and modern design with a dark theme for a visually appealing interface.  
* Styles key components such as sliders, buttons, and color suggestions using responsive flexbox layouts.  
* Interactive hover effects are included for buttons and color suggestions for better user experience.

JavaScript (script.js):

* Manages the image sliders for each wardrobe category, allowing users to navigate through clothing items using "prev" and "next" buttons.  
* Dynamically updates the displayed image and its corresponding color suggestions.  
* Generates color suggestion blocks using color codes stored in the “imageSets” array, which reflects harmonious combinations from color theory.  
* Ensures seamless interaction by adding event listeners for button.

Image Slider:

* Multiple sliders with individual controls to display clothing images.  
* Navigation through wardrobe items using "prev" and "next" buttons.

Color Suggestions:

* Displays three matching colors for each clothing item, from pre-defined arrays.  
* Interactive color circles with hover effects provide visual clarity for users.

Timetable:

Week 1 \- Creating an idea of the project, and creating a sketch of user interface.  
Week 2 \- Creating HTML and basic CSS code.  
Week 3 \- Creating feature to changing pictures of clothes by buttons in JavaScript.  
Week 4 \- Adding function to display tips for matching colors under images sections in JavaScript. Making corrections to the CSS code.

