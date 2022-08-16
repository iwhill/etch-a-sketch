# etch-a-sketch

This script allows the user to draw on a digital canvas simply by hovering their mouse over it.

The thickness of the 'brush' is, by default, 1/16 the height and 
1/16 the width of the canvas. The user can click the 'Grid Size' button and will be prompted to enter a number n. This will change the thickness of the brush to 1/n the height and 1/n the width of the canvas. If a number is entered in the prompt and the user selects 'OK', the canvas is reset and the new brush thickness will be applied when the user starts drawing. If user cancels the prompt, thickness will not be updated, canvas will not be reset, and user will be able to continue drawing.

The user can only enter numerical values between 1 and 100, inclusive. User will be prompted again if the number they entered does not fall within this range. They will also be prompted again if an invalid value is entered, such as a string. Any fractions will be rounded to the nearest integer.