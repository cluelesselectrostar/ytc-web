import p1 from "./project_thumbnails/rover.jpg"
import p2 from "./project_thumbnails/cookhack.png"
import p3 from "./project_thumbnails/panxcel.png"
import p4 from "./project_thumbnails/reversal_new_interface.png"
import p5 from "./project_thumbnails/wheels.png"
import p6 from "./project_thumbnails/circuitsim.png"

const projects = [
    {
        "title" : "EE2 Electronics Design Project 2: Mars Rover",
        "body" : "Alongside my 5 other team-mates, we developed a Martian Rover that can autonomously track obstatcles, be powered by a battery management system charged from a PV panel array, and controlled from a remote client.",
        "date": "Dec 2020",
        "image": p1,
        "repo": null,
        "report": null
    },   
    {
        "title" : "cook.io - bonding over cooking",
        "body" : "Developed during IC Hello World Hackathon, with Kenton, Adrian, Stephanie and Harman. Get together with other hungry chefs cooking marvelous dishes. With easy navigation and search, you can always find the right cook-mate to cook with you!",
        "date": "Mar 2021",
        "image": p2,
        "repo": "https://github.com/N00bAdrian/ic-hello-world-2021",
        "report": "https://devpost.com/software/cook-io"
    },
    {
        "title" : "Panxcel",
        "body" : "A playful python-scripted bot that stores your game scores on Discord, now on top.gg (one of the largest and most reputable Discord bot sites)!",
        "date": "Dec 2020",
        "image": p3,
        "repo": "https://github.com/cluelesselectrostar/discord_python_bot",
        "report": "https://github.com/cluelesselectrostar/discord_python_bot"
    },   
    {
        "title" : "Reversal on Python",
        "body" : "Why not have a quick game of reversal/reversi/orthello? I was watching a tutorial on creating a minimax algorithm AI for connect4, and I wondered whether I could do the same with reversal, one of my favourite board games.",
        "date": "Sept 2020",
        "image": p4,
        "repo": "https://github.com/cluelesselectrostar/reversal_python",
        "report": "https://github.com/cluelesselectrostar/reversal_python"
    },
    {
        "title" : "Wheels",
        "body" : "This is an app that fetches ETA information from all bus operators in Hong Kong. This is created on Google's Flutter Platform, which allows simultaneous development for both iOS and Anrdoid, drastically simplifying frontend development.",
        "date": "May 2020",
        "image": p5,
        "repo": "https://github.com/cluelesselectrostar/wheels_draft",
        "report": "https://www.notion.so/Wheels-Rethinking-bus-apps-in-Hong-Kong-593d28d5da2c4f43ab7cbd59df237604"
    },
    {
        "title" : "EE1 Electronics Design Project 1: Circuit Simulator",
        "body" : "Developed with my team-mates Raghav Viswakumar and Chackarat Kitikul, the C++ program serves as a SPICE-like circuit simulator that can evaluate nodal voltages and currents, in both steady-state and transient modes.",
        "date": "May 2020",
        "image": p6,
        "repo": "https://github.com/Ragviswa/Circuit-Simulator",
        "report": "https://github.com/Ragviswa/Circuit-Simulator/blob/master/Circuit%20Simulator%20Report.pdf"
    },
];

export default projects;