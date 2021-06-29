import p1 from "./project_thumbnails/rover.jpg"
import p2 from "./project_thumbnails/cookhack.png"
import p3 from "./project_thumbnails/panxcel.png"
import p4 from "./project_thumbnails/reversal_new_interface.png"
import p5 from "./project_thumbnails/wheels.png"
import p6 from "./project_thumbnails/circuitsim.png"

const projects = [
    {
        "title" : "EE2 Electronics Design Project 2: Mars Rover",
        "body" : "Alongside my 5 team-mates, we developed a Martian Rover that autonomously tracks obstacles, manages its battery via a management system, and controlled via a remote client.",
        "date": "Dec 2020",
        "image": p1,
        "repo": null,
        "report": null
    },   
    {
        "title" : "cook.io - bonding over cooking",
        "body" : "Developed during IC Hello World Hackathon, with Kenton, Adrian, Stephanie and Harman. Get together with other hungry chefs cooking marvelous dishes. You can always find the right cook-mate to cook with you!",
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
        "body" : "Why not have a quick game of reversal/reversi/orthello? I was watching a tutorial on creating a minimax algorithm AI for connect4, and wondered the same could be applied to reversal, one of my favourite board games.",
        "date": "Sept 2020",
        "image": p4,
        "repo": "https://github.com/cluelesselectrostar/reversal_python",
        "report": "https://github.com/cluelesselectrostar/reversal_python"
    },
    {
        "title" : "Wheels",
        "body" : "Developed with Google's Flutter platform, this is an app that fetches ETA information from all bus operators in Hong Kong, surprisingly something the government has yet to create.",
        "date": "May 2020",
        "image": p5,
        "repo": "https://github.com/cluelesselectrostar/wheels_draft",
        "report": "https://www.notion.so/Wheels-Rethinking-bus-apps-in-Hong-Kong-593d28d5da2c4f43ab7cbd59df237604"
    },
    {
        "title" : "EE1 Electronics Design Project 1: Circuit Simulator",
        "body" : "Developed with my team-mates Raghav and Tah, the C++ program serves as a command-line circuit simulator that can evaluate nodal steady-state and transient values of SPICE-defined circuits.",
        "date": "May 2020",
        "image": p6,
        "repo": "https://github.com/Ragviswa/Circuit-Simulator",
        "report": "https://github.com/Ragviswa/Circuit-Simulator/blob/master/Circuit%20Simulator%20Report.pdf"
    },
];

export default projects;