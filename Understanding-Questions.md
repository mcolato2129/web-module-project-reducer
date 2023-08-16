# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* The onClick method is called to whatever it is pointing to
* The onClick function uses the 'dispatch' with the use reducer method to find our created action thet we imported
* Once it is found it goes to the reducer function and looks for the 'case' that we created and runs the logic written inside of it
...

* TotalDisplay shows the total plus 1.
