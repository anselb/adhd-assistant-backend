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
7. generalNotes: a strings that records any other notes you want to add
