# ADHD Assistant Backend

An API to help you manage your medications and treatments

## API Models

### Medications
Parameters that can be changed for medications:

1. name: a **required** string that is the name of the medication
2. status: your status with regards to the medication, it **must be** one of these options: 'Currently Trying', 'Have Tried', or 'Have Not Tried'
3. sideEffects: a string that records side effects you've experienced
4. referenceDocument: a **required** string that is a url to an official reference document
5. timesTaken: a number that records the number of times you've taken a medication
6. intakeNotes: a string that records info such as when to take a medication or if you should take it after a meal
7. generalNotes: a string that records any other notes you want to add

### Therapies
Parameters that can be changed for behavioral therapies:

1. name: a **required** string that is the name of the behavioral therapy
2. status: your status with regards to the therapy, it **must be** one of these options: 'Currently Trying', 'Have Tried', or 'Have Not Tried'
3. referenceDocument: a string that is a url to an official reference document
4. timesDone: a number that records the number of times you've tried the behavioral therapy
5. whenToDoNotes: a string that records info regarding when to do the therapy such as when to do it relative to the time of day or time relative to when you take your medication
6. generalNotes: a string that records any other notes you want to add
