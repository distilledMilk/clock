# Analog Clock

A working analog clock built with vanilla JavaScript and CSS as part of the JavaScript30 challenge.

## Features

- Real-time clock display that updates every second
- Smooth hand animations with CSS transitions
- Three distinct hands: hour (black, thick), minute (black, medium), second (red, thin)
- 12-hour format with numbered clock face (1-12)
- Responsive design with centered layout

## How it works

The clock uses JavaScript to get the current time and convert it to rotation angles:

- JavaScript gets current time using `Date()` object every second
- Converts time values to degrees (360° circle = 60 seconds/minutes, 12 hours)
- Updates hand rotation using CSS `transform: rotate()` property
- `setInterval()` runs the update function every 1000ms
- CSS handles smooth transitions and positioning

## Files

- `index.html` - Clock structure, hands, and number positioning
- `styles.css` - Clock face styling, hand positioning, and animations
- `javascript.js` - Time calculation and hand rotation logic

## Key calculations

- **Seconds**: `seconds * 6` degrees (60 seconds = 360°)
- **Minutes**: `minutes * 6 + (seconds/10)` degrees (includes smooth movement)
- **Hours**: `hours * 30 + (minutes/2)` degrees (gradual movement between hours)

## Technical details

- Clock hands are positioned using `position: absolute` and centered with CSS transforms
- Numbers are positioned around the circle using CSS custom properties (`--i`)
- Smooth animations achieved with `transition: all 0.05s`
- 12-hour format conversion handled in JavaScript

## Live demo

Open `index.html` in any modern browser to see the clock in action.
