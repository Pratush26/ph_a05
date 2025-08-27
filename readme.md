### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?  
-> Answer :  
- By using **getElementById**, we get the element that have the targeted id, which obiously exist one in a single HTML webpage document.  
- By using **getElementsByClassName**, we get all the live HTML elements collection that have the targeted class.  
- By using **querySelector**, we get the first element that matches with the targeted selector.  
- By using **querySelectorAll**, we get all the static elements Nodelist that matches with the targeted selector.
---
2. How do you **create and insert a new element into the DOM**?  
-> Answer :  
    1. At first I shall create a HTML element using document.createElement()
    1. Then will will insert data inside it if needed.
    1. After that I shall target the parent element, then push the element inside the parent using .append() 
---
3. What is **Event Bubbling** and how does it work?  
-> Answer :  
**Event Bubbling** is a process that moves up or push the event from the targeted element to the parent element.  
It proagates by this flow -  
child -> parent -> … -> document -> window
---
4. What is **Event Delegation** in JavaScript? Why is it useful?  
-> Answer :  
**Event Delegation** is a way where we add event listener to parent instead of adding to each child and catch the child's event also using that single event listener.  
It reduces the amount of event listener and helpful to reduce the chance for events to bubbling up to parent.  
It is also helpful in another useful case - when we append a child into the parent, we need to add event listener while appending but in this way we can append as many child as we want without adding event listener as the event is being handled from the parent element or the parent is same for handling the event.
---
5. What is the difference between **preventDefault() and stopPropagation()** methods?  
-> Answer :  
- **preventDefault()** is a function that prevent browser's default behavior, such as while form submission it prevents page reload.
- **stopPropagation()** is used to stop event bubbling or stop event to propagate from the current target to further.
---