const md = `
# Training my mind to mind the trains

I previously wrote a piece about trains in London. But that was merely for London’s underground (mainly). This time I will move on to photos taken during my train-spotting trip in mid-November.
I have to say, I still think London’s railway network looks way too complicated for such a small place, so I’m training my mind to mind the trains……. (you knew this was coming)

![](https://cdn-images-1.medium.com/max/2560/1*afXj1YWhWPDMcVW-uuRv8g.jpeg)

<Caption text="Maquette seat covering for the Overground class 315s running between Upminster and Romford" />

Our day started at Liverpool Street. Looks like a pretty nice place to start with, but not necessarily so when you see pigeons doing their business within the station. Fortunately or unfortunately, I don’t have a photo for that.

![](https://cdn-images-1.medium.com/max/800/1*Plw6_6njGpbh9CaG6fMJWw.jpeg)

<Caption text="Liverpool Street Station Concourse" />

We then caught the next TfL rail train to Shenfield. I was actually kind of looking forward to seeing the class 315s running on TfL rail, but I guess they run quite infrequently. This is the interiors of the class 345 Aventra, exactly the type I previously saw at London Paddington.


![](https://cdn-images-1.medium.com/max/800/1*xksk0fkXyuMongwqtazbjQ.jpeg)

<Caption text="Interiors of the TfL Rail class 345 Aventra">

Its colourful maquette seat covering is quite a delight to look at as well.

![](https://cdn-images-1.medium.com/max/1200/1*R3uYZUbVw0vgF6uw81kvYg.jpeg)

<Caption text="TfL Rail Maquette seat covering">

As expected, this is a photo of the front of the locomotive when we arrived at Romford.

![](https://cdn-images-1.medium.com/max/800/1*APeBhYcWmDHOnGuv9Nuz9Q.png)

<Caption text="Southbound TfL Rail approaching Romford. (class 345 Aventra)">

I think I was pretty bored at the time, so I even took a few picture of the sleepers of the rail. I later did a bit of reading, and turns out “Tarmac” used to be one of the country’s largest suppliers for concrete rail sleepers. On a side note, when I was on my volunteering trip to the Ffestiniog and Welsh Heritage Railway, we were told that the newly replaced sleepers were made from recycled plastics. A lot of work must have went into this kind of product to make sure it wouldn’t expand or contract drastically during extreme weather conditions.
I don’t know what company supplies sleepers for the national rail network right now, but the recycled plastic sleepers that I talked about are definitely not as widespread at the moment.

![](https://cdn-images-1.medium.com/max/800/1*ik7vIh9cTDZ-a6KZWvyQCw.jpeg)

<Caption text="Tarmac concrete rail sleepers">

Meanwhile, we also spotted a stopping southbound Greater Anglia Railway service. Interestingly, there weren’t any northbound Greater Anglia services that stopped at Romford that day.

![](https://cdn-images-1.medium.com/max/800/1*FSYdBncCKJ5fChSPsyY4Wg.jpeg)

<Caption text="Greater Anglia Railway class 321 trains stopping at Romford.">

We were waiting for the London Overground Romford to Upminster service to arrive, and finally here it is! The locomotive is quite “boxy” indeed.
Another interesting thing I observed was the train’s double-leaf sliding doors, rather than the single-leaf sliding doors or sliding plug doors used in today’s trains. Not sure what the advantage of a double-leaf sliding door is; maybe it has better aerodynamics, or maybe it reduces the chance of debris jamming on the door rails. But this design is definitely something from the past.

![](https://cdn-images-1.medium.com/max/800/1*R7u-vn7dd3heh2MZ0rbBpA.jpeg)

<Caption text="London Overground class 315">

The exterior of the train looks quite normal, but the interior definitely shows the age of the train, as if it is something from the 60s. It even has luggage racks, which reminds us that it used to run long-haul suburban services.

![](https://cdn-images-1.medium.com/max/2560/1*aJcs9tiAWJH7g9B4KVqiug.jpeg)

<Caption text="London Overground class 315 Interiors">




#### Additional — Actual Itinerary for the Day

1. Liverpool Street to Romford by TfL Rail (345 Aventra)
2. Romford to Upminster by Overground (315)
3. Upminster to Barking by c2c (357)
4. Barking to Harringay Green Lanes by Overground (710)
5. Walk to Harringay
6. Harringay to Finsbury Park by Great Northern (717 Desiro City)
7. Finsbury Park to East Croydon by Thameslink (700 Desiro City)
8. East Croydon to Mitcham Junction by Tramlink


# Y2 Group 7 EEE/EIE Design Project Repository

I previously wrote a piece about trains in London. But that was merely for London’s underground (mainly). This time I will move on to photos taken during my train-spotting trip in mid-November.
I have to say, I still think London’s railway network looks way too complicated for such a small place, so I’m training my mind to mind the trains……. (you knew this was coming)

<br />

## Table of Contents

- [Y2 Group 7 EEE/EIE Design Project Repository](#y2-group-7-eeeeie-design-project-repository)
  - [TABLE OF CONTENTS](#table-of-contents)
  - [1. Team Members](#1-team-members)
  - [2. Dependencies](#2-dependencies)
    - [2.1. List of non-standard Arduino libraries needed for final rover:](#21-list-of-non-standard-arduino-libraries-needed-for-final-rover)
    - [2.2. Tools needed to configure final rover:](#22-tools-needed-to-configure-final-rover)
  - [3. Arduino IDE Settings](#3-arduino-ide-settings)
    - [3.1. ESP32 Upload Settings:](#31-esp32-upload-settings)
    - [3.2. Arduino Upload Settings:](#32-arduino-upload-settings)
    - [3.3. Known Problems With Uploading Scripts](#33-known-problems-with-uploading-scripts)
  - [4. Rover](#4-rover)
    - [First Time Setup](#first-time-setup)
    - [4.2. Rover Setup](#42-rover-setup)
    - [4.3. Sending Instructions to Rover](#43-sending-instructions-to-rover)

<br />

<br />

## 2. Dependencies

### 2.1. List of non-standard Arduino libraries needed for final rover:
1. [ArduinoJson](https://github.com/bblanchon/ArduinoJson)
2. [ESP32 API](https://github.com/espressif/arduino-esp32) 
3. INA219_WE (Download from Arduino library manager)
4. PubSubClient (Download from Arduino library manager)
5. Arduino MegaAVR Boards (Download from Arduino library manager)

### 2.2. Tools needed to configure final rover:
1. [Arduino IDE 1.8.15](https://www.arduino.cc/en/software)
2. [npm](https://www.npmjs.com/get-npm)
3. [Python 3.X.X](https://www.python.org/downloads/)
4. [Mosquitto MQTT Broker v2.0.10](https://mosquitto.org/download/)
5. [Quartus 16.1](https://fpgasoftware.intel.com/16.1/)
6. NIOS II (comes with Quartus 16.1 installation)

<br />

## 3. Arduino IDE Settings

### 3.1. ESP32 Upload Settings:
- Board Name/Type: ESP32 Dev Module
- Partition: HUGE APP

### 3.2. Arduino Upload Settings:
- Board Name/Type: Arduino Nano Every

### 3.3. Known Problems With Uploading Scripts
- Arduino will not accept sketch uploads if SMPS is not powered
- ESP32 will not upload if UART cables are still plugged in

<br />

## 4. Rover

### First Time Setup
- Follow "How to..." instructions within the Command_Subsystem folder for either local or AWS server
- Follow "Drive_Control_integration.ino" instructions within the Drive_Subsystem folder to setup APIs for the Arduino
- Configure in using the instructions within Control_Subsystem folder

### 4.2. Rover Setup
1. Turn on SMPS power, unplug UART cables
2. Follow "How to start..." instructions within Command_Subsystem folder for either local or AWS server
3. Run 'start_server.sh' within 
4. Upload the .sof file found in using the Quartus Programmer
5. Upload the .elf file found in  using NIOS II
6. Upload the Arduino fileusing the Arduino IDE with the correct settings
7. Unplug the UART cables from the ESP32
8. Upload the ESP32 file found in using the Arduino IDE with the correct settings
9. Plug in the UART cables
10. Wait for LED8 on SMPS to turn on before sending instructions

### 4.3. Sending Instructions to Rover
1. Navigate to the website opened
2. Login using the appropriate credentials found within the Command_Subsystem folder
3. Select Discrete or Coordinate mode from the top menu
4. Send instructions using boxes the provided fields

![alt_text](https://cdn-images-1.medium.com/max/800/1*pRecws-GGSrg-Cgzf_TuUQ.jpeg)

`

export default md;