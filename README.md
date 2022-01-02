# noms-website

The image "screencapture-noms-website-home-html.png" on this repository shows how the website is displayed on a laptop screen.

This repository is ready to be linked to GitHub Pages, which allow for free hosting, even with personal domain (meaning, not the default "yousitename.github.io").

See details in here:
- https://docs.github.com/en/pages
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

---

**Current limitations:**
1. Not adapted for mobile
2. Current ig feed format is not automated:
    - This means three things: 
        a) current maximum number of IG posts shown is 9 (displayed as 3 by 3). By default only 3 are shown, 
        and each time that "Load More" button is clicked 3 more appear.
        b) in order to show the last posts the links to the ig posts should be changed in lines: 129, 135, 141, 148, 154, 160, 167, 173, 179 of the file "home.html",
        specifically where it says data-instgrm-permalink="" -> in between those quotes is where the instagram post link should be added.
        c) one of the benefits of this display is that one can choose which 3 posts to show first, and which 9 posts show in total, and in which order.
3. Current form submission calls a "mailto" action which might not be the greatest for user experience.
    
