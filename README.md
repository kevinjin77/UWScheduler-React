# UWScheduler

An application to help Waterloo students find the best possible schedules to fit their needs.  
Check it out here: <a href="https://uw-scheduler.herokuapp.com/" target="_blank">uw-scheduler.herokuapp.com</a>  
Check out a quick demo here: <a href="https://www.youtube.com/watch?v=r91HMp40S3Y" target="_blank">https://www.youtube.com/watch?v=r91HMp40S3Y</a>  

![Landing Page](https://github.com/kevinjin77/kevinjin77.github.io/raw/master/resources/assets/landingPage.png "Landing Page")

# Features
## Course Entry
There are two methods of importing your schedule into UWScheduler.

### Manual Entry
Under the manual entry tab, simply enter the course codes of each course. (Eg. CS241e, MATH239, BIOL130, etc.)
The autocomplete will populate with all of the courses ever offered at Waterloo.

![Manual Entry](https://github.com/kevinjin77/kevinjin77.github.io/raw/master/resources/assets/manualEntry.gif)

### Importing from Quest
To import your courses from Quest, simply follow these steps:
1. [Sign in to Quest](https://quest.pecs.uwaterloo.ca/psp/SS/?cmd=login&languageCd=ENG&) and click Class Schedule.
2. Select all and copy. (List View)
3. Paste into the textbox!
4. Click the "Generate Schedules" button.

![Quest](https://github.com/kevinjin77/kevinjin77.github.io/raw/master/resources/assets/quest.gif)

## Preferences
In the preferences section, you can enter how important each of the following factors is to creating the best schedule for you.
Each factor can be rated from a scale of 0 (uninimportant) to 10 (extremely important).
- **Gap** (Rate this highly if you want as few of the annoying 70 minute gaps in your schedule as possible.)
- **Lunch** (Rate this highly if you want a lengthy period of time for lunch on as many days as possible.)
- **Professor** (Rate this highly if you want the best professors according to their ratings on RateMyProfessors.)
You can also enter if you're OK with 8:30AM classes, or night classes (after 6:00PM).

## Generating Schedules
Once all of your courses and preferences are entered, click the Generate Schedules button!

### What's in a Schedule?
Once courses have been entered, a list of the top schedules will appear underneath the form.
Each schedule contains all of the courses that have been selected for your schedule, as well as information about the location, times, enrollment, and more. Each schedule is given an overall rating and a grade, which is dependant on how it relates to other schedules.

![Schedule](https://github.com/kevinjin77/kevinjin77.github.io/raw/master/resources/assets/schedule.gif)

### Exporting to UWFlow
Finally, each schedule has the option to export it directly to UWFlow.
1. Click on "Copy Schedule to Clipboard"
2. After the modal appears, navigate to [UWFlow](https://uwflow.com/)
3. Sign in using either your Facebook/Email account.
4. Click the "Reimport" Button.
5. Highlight the textbox, and paste!

![UWFlow](https://github.com/kevinjin77/kevinjin77.github.io/raw/master/resources/assets/flow.gif)

### Demo

Please take a look at a quick demo here: <a href="https://www.youtube.com/watch?v=r91HMp40S3Y" target="_blank">https://www.youtube.com/watch?v=r91HMp40S3Y  
You can also find the original web app here: <a href="http://www.uwscheduler.com" target="_blank">http://www.uwscheduler.com/
