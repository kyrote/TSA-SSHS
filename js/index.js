// [When, Name, Type, Team Size[], TpC, [People -> [Person, Team], ...]]

data = [
    [
        "AM",
        "Biotechnology Design",
        "Timeslot",
        [2, 6],
        2,
        [["Drake Turner", "Dominic Lee"]],
    ],
    [
        "AM",
        "Digital Video Production",
        "Timeslot",
        [1, 6],
        3,
        [["Tobias Bissett", "Sarah Randolph"]],
    ],
    [
        "AM",
        "Drone Challenge (UAV)",
        "Timeslot",
        [2, 6],
        1,
        [["Danny Sanchez", "Ryan Salazar", "Grant Hes", "Peyton Price"]],
    ],
    [
        "AM",
        "Flight Endurance",
        "Timeslot",
        [1],
        0,
        [["Hayden Kriegel"], ["Payton Lesso"]],
    ],
    [
        "AM",
        "Geospatial Technology",
        "Timeslot",
        [2, 3],
        3,
        [
            ["Logan Bradbury", "Christopher Locascio", "Francisco Suarez"],
            ["Dominic Lee", "Gabriel Stevens", "Jackson Maples"],
        ],
    ],
    [
        "AM",
        "Manufacturing Prototype",
        "Timeslot",
        [2, 6],
        3,
        [
            [
                "Logan Bradbury",
                "Christopher Locascio",
                "Justin Phu",
                "Jaiden Salas",
            ],
            ["Dominic Lee", "Grant Hes", "Hayden Kriegel", "Harley Merchant"],
        ],
    ],
    [
        "AM",
        "Webmaster",
        "Timeslot",
        [2, 6],
        3,
        [
            [
                "Christopher Locascio",
                "Justin Phu",
                "Kiranmoy Chowdhury",
                "Dominic Lee",
                "Ezra Schultz",
            ],
        ],
    ],
    [
        "AM",
        "Coding",
        "Block",
        [2],
        0,
        [
            ["Ezra Schultz", "Justin Phu"],
            ["Evan Armstrong", "Kaleb Mills"],
            ["Skylar Omo", "Ezekiel Schultz"],
        ],
    ],
    [
        "AM",
        "Dragster Design",
        "Block",
        [1],
        0,
        [["Timothy Goldman"], ["Trevor Sawyer"]],
    ],
    [
        "AM",
        "Technology Problem Solving",
        "Block",
        [2],
        4,
        [["Jossabette Nolasco", "Ily Norris"]],
    ],
    [
        "PM",
        "Debating Technological Issues",
        "Timeslot",
        [2],
        2,
        [["Jossabette Nolasco", "Ily Norris"]],
    ],
    [
        "PM",
        "Engineering Design",
        "Timeslot",
        [3, 6],
        0,
        [["Grant Hes", "Luqman C", "Tobias Bisset"]],
    ],
    [
        "PM",
        "Fashion and Design Technology",
        "Timeslot",
        [2, 4],
        4,
        [
            [
                "Arrabella Morrison",
                "Harley Merchant",
                "Riley Harris",
                "Adellea Kenelley",
            ],
        ],
    ],
    [
        "PM",
        "Music Production",
        "Timeslot",
        [1, 6],
        3,
        [
            [
                "Skylar Omo",
                "Timothy Goldman",
                "Tysen Lamb",
                "Agustin Gramajo",
                "Trevor Sawyer",
            ],
        ],
    ],
    ["PM", "Transportation Modeling", "Timeslot", [1], 2, [["Sarah Randolph"]]],
    [
        "PM",
        "Virtual Reality Simulation (VR)",
        "Timeslot",
        [1, 6],
        2,
        [
            [
                "Brayden Pelt",
                "Laken Mulder",
                "Tobias Bissett",
                "Grant Hes",
                "Peyton Price",
            ],
        ],
    ],
    [
        "PM",
        "Technology Bowl",
        "Block",
        [3],
        0,
        [
            ["Logan Bradbury", "Christopher Locascio", "Justin Phu"],
            ["Drake Turner", "Evan Armstrong", "Kaleb Mills"],
        ],
    ],
    [
        "All-Day",
        "Architectural Design",
        "Timeslot",
        [1, 6],
        3,
        [
            ["Grant Hes", "Michael Fox", "Silas Brewer"],
            ["Brayden Pelt", "Landon Langley"],
        ],
    ],
    [
        "All-Day",
        "Board Game Design",
        "Timeslot",
        [2, 6],
        2,
        [
            ["Matthew Cote", "Michael Fox", "Zachary Cox"],
            ["McKenna Baum", "Adelea Kennelley"],
        ],
    ],
    [
        "All-Day",
        "Children's Stories",
        "Timeslot",
        [1, 6],
        3,
        [["McKenna Baum", "Adelea Kennelley"]],
    ],
    [
        "All-Day",
        "Forensic Science",
        "Timeslot",
        [2],
        0,
        [
            ["Keelyn Seagraves", "Arrabella Morrison"],
            ["Melanie Herrera", "Harley Merchant"],
        ],
    ],
    [
        "All-Day",
        "Photographic Technology",
        "Timeslot",
        [1],
        4,
        [["Osihiriz Salazar"], ["Sarah Randolph"]],
    ],
    ["All-Day", "Prepared Presentation", "Timeslot", [1], 3, [["Omar Batres"]]],
    [
        "All-Day",
        "Video Game Design",
        "Timeslot",
        [1],
        3,
        [["Ezekiel Schultz", "Laken Mulder", "Skylar Omo", "Justin Phu"]],
    ],
    [
        "Virtual",
        "On Demand Video",
        "Conference",
        [2, 6],
        4,
        [
            [
                "Kiranmoy Chowdhury",
                "Sarah Randolph",
                "Michael Fox",
                "Kaleb Mills",
            ],
        ],
    ],
    [
        "Virtual",
        "STEM Mass Media",
        "Conference",
        [2, 3],
        5,
        [["Arrabella Morrison", "Payton Lesso"]],
    ],
];

console.log($(":root").css("--mobile") == 1 ? "yes" : "no");

color_map = {
    AM: "#ee2624",
    PM: "#005daa",
    "All-Day": "#4d4d4f",
    Virtual: "#4d4d4f",
};

$(".competitions > #count").html(`(${data.length})`);

for (i in data) {
    $("#competition-section").append(
        `<div class="competition" id="c${i}" style="--comp-c:${
            color_map[data[i][0]]
        }" data-active=0><span id="when">&ensp;■&ensp;${
            data[i][0]
        }</span><span id="name">${data[i][1]}</span><span id="type">${
            data[i][2]
        }</span></div>`
    );
}

function search() {
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    i = data.length;
    $(".competition").each(function () {
        if ($("> #name", this).html().toUpperCase().indexOf(filter) > -1) {
            this.style.display = "";
        } else {
            this.style.display = "none";
            i--;
        }
    });
    $(".competitions > #count").html(`(${i})`);
}

$(".competition").click(function () {
    pad = 6.5;
    mult = $(window).height() / $(window).width() >= 1 ? 3 : 1;
    if ($(this).attr("data-active") == "0") {
        t = data[parseInt(this.id.substring(1))];
        $(this).append(
            "<div class='team'><div id='team-info'><br />Team Size: <b>" +
                (t[3].length == 2 ? t[3][0] + "-" + t[3][1] : t[3][0]) +
                "</b><br />Teams Per Chapter: <b>" +
                (t[4] ? t[4] : "Unlimited") +
                "</b></div></div>"
        );
        for (i in t[5]) {
            $(this).append(`<div class="team" id="team${i}"></div>`);
            $(`> #team${i}`, this).append(
                "<br /><div><b>Team " + (parseInt(i) + 1 + "</b>")
            );
            for (p in t[5][i]) {
                $(`> #team${i}`, this).append(t[5][i][p] + "<br /></div>");
            }
            if (parseInt(p) + 1 != (t[3].length == 2 ? t[3][1] : t[3][0])) {
                $(`> #team${i}`, this).append(
                    "<a style='opacity: 0.6; font-size: " +
                        0.75 * (mult != 1 ? 2 : 1) +
                        "vw; transition: font-weight 0.25s'>(Request to join?)</a>" +
                        "<br /></div>"
                );
                pad = 7.5;
            }
        }
        $(this).css(
            "height",
            `${pad * (mult != 1 ? 3 / 1.8 : 1) + t[5][0].length * 1.2 * mult}vw`
        ); // cheap wack fix
        $(this).attr("data-active", "1");
    } else {
        $("> .team", this).remove();
        $(this).css(
            "height",
            `${$(window).height() / $(window).width() >= 1 ? 5 : 2}vw`
        );
        $(this).attr("data-active", "0");
    }
});

window.onresize = function () {
    $(".competition").each(function () {
        $(this).css(
            "height",
            `${$(window).height() / $(window).width() >= 1 ? 5 : 2}vw`
        );
    });
};
