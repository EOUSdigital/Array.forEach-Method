//TODO 📕 Module 06 - Loops, Iteration and High Order Array Methods - Lesson 03.02: Break and Continue


//TODO 🛠️ Step 6: 🛡️ Project 1: User Comment Scanner

//* 🎯 Goal: Loop through user comments and apply moderation rules using break and continue.

//? ✅ Feature Requirements:
//  1. Skip any comment that is empty (use continue)
//  2. Break the loop if a comment contains restricted words like "banned" or "danger"
//  3. Log only the comments that are safe to display

//* 🧠 Pseudocode prompt:
//  Loop through an array of comments.
//  • If the comment is empty, skip it.
//  • If the comment includes "banned" or "danger", stop the loop immediately.
//  • Otherwise, log the comment.

//? Pseudocode

// SET comments TO an array of comment strings

// FOR let c = 0; c < comments.length; c++
//     SET comment TO comments[c]
//     IF comment is empty
//         CONTINUE to next comment

//     IF comment includes "banned" OR "danger"
//         PRINT "Inappropriate content detected: stopping scan."
//         BREAK the loop
//     ELSE
//         PRINT comment

//! Solution

const comments = [
    "Wow, this is stunning!",
    "Great shot!",
    "Money banned",
    "I love your style!",
    "This made me smile.",
    "I agree with you. A dangerous situation."
];

for (let c = 0; c < comments.length; c++) {
    const comment = comments[c];

    if (comment.trim() === "") {
        continue;
    }

    if (comment.includes("banned") || comment.includes("danger")) {
        console.log("Inappropriate content detected: stopping scan.");
        break;
    } else {
        console.log(comment);
    }
}

//  🧠 Real-World Use:
//  This logic is perfect for:
//  • Comment and content moderation systems
//  • Filtering flagged data in live chat
//  • Preprocessing user input before storing or displaying
