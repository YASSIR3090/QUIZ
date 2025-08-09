
const quizForm = document.getElementById('myQuiz');


quizForm.addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    
    const q1 = quizForm.q1.value;
    const q2 = quizForm.q2.value;
    const q3 = quizForm.q3.value;
    const q4 = quizForm.q4.value;
    
    
    const sahihi = {
        q1: "a", 
        q2: "b", 
        q3: "a", 
        q4: "a"  
    };
    
    
    let alama = 0;
    if (q1 === sahihi.q1) alama++;
    if (q2 === sahihi.q2) alama++;
    if (q3 === sahihi.q3) alama++;
    if (q4 === sahihi.q4) alama++;
    
    
    console.log("----- MATOKEO YA QUIZ -----");
    console.log("1. Ulichagua:", q1, "| Sahihi: OSIM (a)");
    console.log("2. Ulichagua:", q2, "| Sahihi: Herufi na nambari (b)");
    console.log("3. Ulichagua:", q3, "| Sahihi: 24DIT050 (a)");
    console.log("4. Ulichagua:", q4, "| Sahihi: student.suza.ac.tz (a)"); 
    console.log("JUMLA:", alama, "kati ya 4");
    console.log("--------------------------");
    

    alert("subiria kwa muda majibu yako ");
    
    
    quizForm.reset();
});