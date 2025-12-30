#!/usr/bin/env node

// ENV Variable Dramatizer - Because silent failures are boring
// Turns missing environment variables into dramatic, impossible-to-ignore theater

const requiredVars = process.argv.slice(2);

if (requiredVars.length === 0) {
    console.log('\n🎭 ENV DRAMATIZER 🎭');
    console.log('Usage: node env-dramatizer.js VAR1 VAR2 VAR3');
    console.log('Example: node env-dramatizer.js DATABASE_URL API_KEY SECRET');
    process.exit(0);
}

console.log('\n🎭 ENVIRONMENT VARIABLE DRAMATIZATION IN PROGRESS 🎭\n');
console.log('*curtain rises*\n');

let allPresent = true;
const missingVars = [];

requiredVars.forEach((varName, index) => {
    const value = process.env[varName];
    
    if (!value) {
        allPresent = false;
        missingVars.push(varName);
        
        // Dramatic reveal of missing variable
        console.log(`🎬 SCENE ${index + 1}: The Case of the Missing ${varName}`);
        console.log(`   🚨 ${varName.toUpperCase()} IS NOWHERE TO BE FOUND!`);
        console.log(`   💔 Your app will suffer a tragic, Shakespearean demise.`);
        console.log(`   🔍 Did you check your .env file? Or perhaps... the void?\n`);
    } else {
        // Satisfying confirmation
        console.log(`✅ ${varName}: Present and accounted for!`);
        console.log(`   (Value: ${value.substring(0, 20)}${value.length > 20 ? '...' : ''})`);
        console.log(`   🎉 No drama here! Moving on...\n`);
    }
});

console.log('*curtain falls*\n');

if (!allPresent) {
    console.log('🎭 FINAL VERDICT 🎭');
    console.log(`Missing variables: ${missingVars.join(', ')}`);
    console.log('\n🚨 ABORTING: The show cannot go on without its stars!');
    console.log('💡 Fix: Set these variables and try again, you magnificent developer.');
    process.exit(1);
} else {
    console.log('🎭 FINAL VERDICT 🎭');
    console.log('🌟 ALL VARIABLES PRESENT!');
    console.log('\n🎉 The application may proceed to its boring, uneventful execution.');
    console.log('(No drama today. How disappointing.)');
}
