# *find your bike*
* * *
*A simple interface that allows users to specify search terms and look for their bike using the bike index api, September 9,2020*

By ***Johnny Duverseau, Emme Buentiempo, AJ Markow***


## Description

*A user inputs their location, color of their bike, and the brand of the bike.  The user also specifies the number of results to be returned.  The page returns a list of potential candidates with a summary and link to each.*


## Setup/Installation Requirements

* 1. Clone git repository to device you want to run the page on.
  2. Get an API Key from bikeindex.org
  3. Set up the environmental variables in a .env file.
  4. Compile using node, and open the index.html file on the device you want to run the program on.*


## Known Bugs

*Known bugs listed at https://www.github.com/alleyesonme21/bike-index/issues*

## Support and contact details

*Send one of us a message on Github if you have any questions about the app.*


## Technologies Used

*Bootstrap, CSS, Git, HTML, Javascript, Node.js*

### License

MIT License

Copyright (c) 2020 Johnny Duverseau, Emme Buentiempo, AJ Markow

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Copyright (c) 2020 ***Johnny Duverseau, Emme Buentiempo, AJ Markow***

## Our Prompt:

Build an app using the Bike Index API. Your app could list all the bikes that have been registered as stolen in a given location in the past week. Or it could display statistics - for instance, you could see which manufacturer is most frequently stolen in a given area.

- form and submit button. Form has: location(zip), color, manufacturer, results to show.
- colors and resultAmount: picklist, zip code & and manufacturer: text input
- validation on location and color, while resultAmount will have a default resting state
- Return with list of results showing: "title", zip code, "date_stolen", color, description, "url"
- Form lingers, retains selections from previous search. Upon submitting again, original results are wiped and replaced with new ones
- UI Structure: AJ
- From form to API:
- From API to Results: