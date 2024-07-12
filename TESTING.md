# Testing

> [!NOTE]  
> Return back to the [README.md](README.md) file.

## Compatibility 

The compatibility of both pages of the website have been tested on different browsers including Google Chrome, Microsoft Edge and Mozilla Firefox. 

<details>
<summary> Click here to see Compatibility with Google Chrome </summary>

![Chrome Compatibility](documentation/testing/compatibility/chrome-compatibility.png)

</details>

<details>
<summary> Click here to see Compatibility with Mozilla Firefox </summary>

![Mozilla Firefox Compatibility](documentation/testing/compatibility/firefox-compatibility.png)

</details>

<details>
<summary> Click here to see Compatibility with Microsoft Edge </summary>

![Microsoft Edge](documentation/testing/compatibility/edge-compatibility.png)
</details>

It is evident that the website is compatible with multiple browsers.

## Responsiveness

### index.html 

As can be seen below, index.html responds well when tested on different device sizes. Given the precision needed to manage the many animation spritesheets and multiple keyframes, much of it through Javascript, the animation display areas do not adjust to responsiveness as this would have required an inordinate amount of work given the scope and scale of the project. However, as the spritesheet and keyframe animation for the opening game loop was simple, I was able to add in some responsive design for this element. 

![index.html responsiveness](documentation/testing/responsiveness/responsiveness.gif)

### 404.html

This is a very simple page which can be seen below to respond proportionately to different widths.  

![404.html responsiveness](documentation/testing/responsiveness/responsiveness-error-page.gif)

## Manual Testing

Below, I provide the results of having manually tested each of the website's features.

|Page Feature|Action(s)|Expected result|Tested|Passed/Failed|
|-------|-------|------|------|-------------|
Logo |Checking to see if it's there |Go to index.html, it's on the opening land menu |Yes|Pass| 
Intro animation loop |Checking to see if it's there |Go to index.html, see if the loop works |Yes|Pass|      |
Logo |Checking to see if it's there |Go to index.html, it's on the opening land menu |Yes|Pass|
|Navigation Bar / Menu Options |Look at menu options |It's present on the main menu|Yes|Pass|        
|Start Button |Click it   |Starts intro animation and starts game |Yes   |Pass  |            
|How to Play Button |Click it   |Brings up How to Play pop up box |Yes   |Pass  |            
|Services menu option |Click it   |Clicking Services sends to services.html |Yes   |Pass  |           
|Start Button |Click it   |Starts intro animation and starts game |Yes   |Pass  |            
Return button under How to Play box |Click it   |Gets rid of pop up box and returns main menu layout |Yes   |Pass  |            
|Social Media Icon Link |Click it|Opens a new tab linking to social media page   |Yes   |Pass  |           
|404.html | Intentionally go to incorrectly spelt address i.e. https://cthlbrennan.github.io/exorcist-priest-game/index.htm, with the "l" missing at the end| This intentional mistake will lead user to 404.html  |Yes   |Pass         | 
|404.html | Go to address which I know doesn't exist in file directory i.e. https://cthlbrennan.github.io/exorcist-priest-game/whoops.html| This intentional mistake will lead user to 404.html  |Yes   |Pass         | 
|Return to Main Menu button on 404.html |Click it|Return to index.html main menu landing page|Yes   |Pass  | 
Intro cinematic display |Check if this plays upon clicking start button on main menu |It plays |Yes|Pass|
Enemy animation display |Play through the game and see if animations load in and out of this page throughout the three typing rounds due to Players winning/pressing the continue button when prompted |Animations load in and out as expected |Yes|Pass|
Prayer Display Area |Play game | This feature appears and disappears as expected, the characters within the area turn green or red depending on player input, with different randomly selected prayers on different playthroughs |Yes|Pass|
Player Input Area |Play game | This feature appears and disappears as expected, it allows for player input which interfaces with prayer display area as set out above |Yes|Pass|
Continue/Next button |Play game | This feature allows for transition from intro cinematic sequence, to successive typing rounds, to outro cinematic sequence |Yes|Pass|
Dialogue Boxes |Play game | Narration from player character appears and disappears as expected |Yes|Pass|
Timer |Play game | Timer counts down from 10 for each round, timer resets to 10 after each round |Yes|Pass|
Lose state |Play game | If timer during typing round gets to zero before player input area is correctly filled, the 'You lose ! Try Again' box appears with a 'Retry' button that leads back to main menu/landing page |Yes|Pass|
Retry button for lose state |Play game | Clicking the 'Retry' button will lead back to main menu/landing page |Yes|Pass|
Outro cinematic sequence |Play game | After finishing third round, the outro sequence plays as expected |Yes|Pass|
Return to Main Menu button at end of outro cinematic sequence |Play game | This button shows up at the end of the closing sequence, clicking it leads back to main menu |Yes|Pass|
|Favicon |Look at it  |It's on the browser tab for every page of the website  |Yes   |Pass         |         
|Footer |Increase and decrease screen width  |Elements in footer grow and shrink proportionately  |Yes   |Pass         |        | 


I am confident that the features of my website work correctly. 

## Code Validation

### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

| File | Screenshot | 
| --- | --- |
| 404.html | ![screenshot](documentation/validation/html-validation/error-page-html-validation.png) |
| index.html | ![screenshot](documentation/validation/html-validation/index-page-html-validation.png) |


### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate my CSS file.

As can be seen below, my CSS file was validated with no errors.

| File | Screenshot |
| --- | --- |
| style.css | ![screenshot](documentation/validation/css-validation/css-validation.png) | |

### JavaScript

I have used the recommended [JShint Validator](https://jshint.com) to validate all my JS file.

| File | Screenshot|
| --- | --- |
 script.js | ![screenshot](documentation/validation/javascript-validation/javascript-validation.png)


## Lighthouse Audit

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues.

| Page | Mobile | Desktop | Notes |
| --- | --- | --- | --- |
| Home | ![screenshot](documentation/lighthouse/mobile/index-lighthouse.png) | ![screenshot](documentation/lighthouse/desktop/index-lighthouse-desktop.png) | Minor warnings for performance on mobile and desktop |
| Services | ![screenshot](documentation/lighthouse/mobile/services-lighthouse.png) | ![screenshot](documentation/lighthouse/desktop/services-lighthouse-desktop.png) | A minor warning for performance on mobile, good performance on desktop |
| Contact Us | ![screenshot](documentation/lighthouse/mobile/contact-lighthouse.png) | ![screenshot](documentation/lighthouse/desktop/contact-lightouse-desktop.png) | Good performance on mobile and desktop |
| Submission | ![screenshot](documentation/lighthouse/mobile/submission-lighthouse.png) | ![screenshot](documentation/lighthouse/desktop/submission-lighthouse-desktop.png) | Good performance on mobile and desktop |
| Easter Egg | ![screenshot](documentation/lighthouse/mobile/easteregg-lighthouse.png) | ![screenshot](documentation/lighthouse/desktop/easteregg-lighthouse-desktop.png) | A minor warning for performance on mobile, good performance on desktop |
| 404 | ![screenshot](documentation/lighthouse/mobile/error-lighthouse.png) | ![screenshot](documentation/lighthouse/desktop/error-lighthouse-desktop.png) | A minor warning for performance on mobile, good performance on desktop|

## User Story Testing

| User Story | Screenshot |
| --- | --- |
| As a new site user, I would like to know the purpose of the website, so that I can discern whether or not it is relevant to me. | ![screenshot](documentation/features/hero-image-index.png) |
| As a new site user, I would like the website to be easily navigible, so that I can easily find the information that I may need. | ![screenshot](documentation/features/navbar.png) |
| As a new site user, I would like to easily return to the home page by clicking the logo in the header, so that I can easily orient myself within the website. | ![screenshot](documentation/features/baby-jay-productions-logo.png) |
| As a new site user, I would like the website to have good SEO scores and semantic elements so that I can easily find it through a search engine.| ![screenshot](documentation/lighthouse/desktop/index-lighthouse-desktop.png) |
| As a new site user, I would like to be assured that the interactive elements of the website work, so that I may have a positive experience that wouldn't result in frustration. | ![screenshot](documentation/validation/html-validation/index-validation.png) ![screenshot](documentation/validation/css-validation/css-validation.png)|
| As a returning site user, I would like to know where I can find further information on the business, such as their social media presence. | ![screenshot](documentation/features/social-media-links.png) |
| As a returning site user, I would like to know how to contact the business directly for commercial queries. | ![screenshot](documentation/features/contact-form.png) |
| As a frequent site user, I would like the website to be responsive to different screen widths, so that I can easily view it on a variety of devices. | ![screenshot](documentation/testing/responsiveness/index-responsiveness.gif)|

## Bugs

### 1 - Menu Options Misaligned with Logo
![screenshot](documentation/bugs/bug-1-before.png)

To fix this, I reviewed the Code Institute's tutorials on flexbox. I realised that I had not properly understood the justify-content property, and thought that I had to apply "display:flex" to elements that were to be flexed, not just the container in which things would be flexed. Shortly after, the navbar looked like this:

![screenshot](documentation/bugs/bug-1-after.png)

While this wasn't yet the final version of the navbar, it represented a better example of flexbox and I slowly became more comfortable with using flexbox afterwards. 

### 2 - Horizontal Overflow

Horizontal overflow is something which I myself find annoying when I come across it online. 

![screenshot](documentation/bugs/bug-2-before.png)

After examining the max-width properties within rules applied to the body element below, the overflow was removed. 

![screenshot](documentation/bugs/bug-2-after.png)

### 3 - Anchor Element not Justified

The call-to-action button (unstyled here in an earlier version) was aligned to the left-hand side of the screen. 

![screenshot](documentation/bugs/bug-3-before.png)

I eventually realised that I had targeted this anchor element incorrectly. After refactoring my code, the anchor element became centered. 

![screenshot](documentation/bugs/bug-3-fix.png)

![screenshot](documentation/bugs/bug-3-after.png)

### 4 - Gap under Header

At tablet width, there was a conspicuous gap between the header and the main section.  

![screenshot](documentation/bugs/bug-4-before.png)

Through adjusting the margin-top property of the main element, I managed to remove this gap. 

![screenshot](documentation/bugs/bug-4-after.png)

### 5 - Uneven Appearance of Elements within Flex Container

Although I had correctly arranged the three testimonial boxes into a flex container, they did not have a uniform appearance. 

![screenshot](documentation/bugs/bug-5-before.png)

With some research I came upon the align-items:stretch property. 

![screenshot](documentation/bugs/bug-5-fix.png)

This fixed the problem completely. 

![screenshot](documentation/bugs/bug-5-after.png)

### 6 - Flex Container Not Working

I spent an hour and a half on this bug. 

![screenshot](documentation/bugs/bug-6-before.png)


I looked at each individual element in detail, before I realised that there was an empty div in the middle of the flex container which introduced a 7th, empty services-box element and completely disrupted the orderly flow of these six elements. 

![screenshot](documentation/bugs/bug-6-issue.png)

Once this div was removed, the six boxes cooperated reliably with one another. 

![screenshot](documentation/bugs/bug-6-after.png)

### 7 - Testimonial Boxes aligning to the left

The testimonial boxes were not centered. It can be seen below that while the Testimonials Text was centred within the viewport, the testimonial box directly under it relating to Lou McGill was to the left. 

![screenshot](documentation/bugs/bug-7-before.png)

By limiting the width of each viewport to 25vw, this issue was resolved.

![screenshot](documentation/bugs/bug-7-fix.png)

![screenshot](documentation/bugs/bug-7-after.png)

### 8 - Horizontal Overflow on Contact Page

Due to an error in the relationship between the contact form on the right and the text on the left, the contact page for laptop and desktop was skewed in such a way that introduced horizontal overflow.

![screenshot](documentation/bugs/bug-8-before.png)

By placing these elements, which were flex containers themselves, into another flex container which had a flex-direction:row property and a max-width of 60vw, this bug was resolved.

![screenshot](documentation/bugs/bug-8-fix.png)

![screenshot](documentation/bugs/bug-8-after.png)

### 9 - Broken File Path for Easter Egg Icon

Late in development, the icon for the Baby Jay Easter Egg page was missing.

![screenshot](documentation/bugs/bug-9-before.png)

I realised that this was because I had changed the file name in the assets folder, removing capital letters and spaces. However, I had forgotten to reflect these changes in the html code. 

![screenshot](documentation/bugs/bug-9-issue.png)

Once this was rectified, the logo returned.

![screenshot](documentation/bugs/bug-9-fix.png)



![screenshot](documentation/bugs/bug-9-after.png)

## Unfixed Bugs

During my time working on this project, I have noticed that there are three problems raised within Gitpod. 

![screenshot](documentation/unfixed-bug/unfixed-bug.png)

Having done some research on Stack Overflow, Google, Phind, etc, I believe that this bug may relate to the recent Gitpod migration process that Code Institute has carried out. In any case, it does not seem to have any bearing on the operation of my website, so I have left this bug unaddressed for now. 

> [!NOTE]  
> There are no remaining bugs that I am aware of.