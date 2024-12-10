# Etch-a-sketch

This project is a dynamic Etch-a-Sketch web app where users can interact with a grid of div elements, changing their colors as they hover over them, similar to a traditional Etch-a-Sketch. The grid size can be adjusted by the user with a button, allowing them to generate a new grid of their desired size, while maintaining the same total area.

See the live version here: https://theografiska.github.io/etchASketch/.

![screenshot of the canvas](screenshot.png)

## Dynamic Grid Creation
* JavaScript Grid Generation: The grid is created dynamically using JavaScript. I used a loop to generate 16x16 div elements, each acting as a square in the grid. The div elements are added to a container element within the HTML file.
* Flexbox Layout: The grid is styled with Flexbox to arrange the divs into a neat, responsive grid. This ensures that the squares are aligned properly without using CSS Grid, which is outside the scope of the current project.
2. Hover Effect
* Color Change on Hover: Each grid square changes color when the mouse hovers over it, simulating a drawing effect. This is accomplished by adding an event listener to each square that changes its background color on hover.
3. Dynamic Grid Resizing
* Grid Size Input: A button at the top allows the user to input a new grid size, which dynamically generates a new grid. The user is prompted to enter a number for the grid size (up to 100), and the grid is resized accordingly. This ensures the total area of the grid remains constant, preventing the page from becoming unresponsive due to too many squares.
* JavaScript Implementation: After receiving the input, the current grid is removed, and a new grid is generated using the updated size.

## Technologies Used
* HTML5: For basic structure and markup of the page.
* CSS3: For Flexbox-based layout and responsive styling of the grid squares.
* JavaScript: To dynamically generate the grid, handle the hover effect, and manage grid resizing.

## License
This project is licensed under the MIT License - feel free to use, modify, and distribute as needed.