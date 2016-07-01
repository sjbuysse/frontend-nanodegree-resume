var bio = {
    "name": "Simon Buysse",
    "role": "Front-end Web Developer",
    "contacts": {
        "mobile": "+61405010232",
        "email": "buysse.simon@gmail.com",
        "github": "sjbuysse",
        "location": "Perth, Australia"
    },
    "welcomeMessage": "Hi! I'm happy to have you as my guest, please have a look at my resume and hopefully I can be of value to your project.",
    "skills": [
        "HTML", "CSS", "Git", "Ruby", "JavaScript", "jQuery", "Bootstrap", "Grunt"
    ],
    "bioPic": "images/selfie-medium.jpg",
    "display": function() {
        var formattedName = HTMLheaderName.replace("%data%", this.name);
        var formattedRole = HTMLheaderRole.replace("%data%", this.role);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
        $("#topContacts").append(formattedMobile);
        $("#footerContacts").append(formattedMobile);
        var formattedEmail = HTMLemail.replace("%data%", this.contacts["email"]);
        $("#topContacts").append(formattedEmail);
        $("#footerContacts").append(formattedEmail);
        var formattedGithub = HTMLgithub.replace("%data%", this.contacts["github"]);
        $("#topContacts").append(formattedGithub);
        $("#footerContacts").append(formattedGithub);
        var formattedLocation = HTMLlocation.replace("%data%", this.contacts["location"]);
        $("#topContacts").append(formattedLocation);
        $("#footerContacts").append(formattedLocation);

        var formattedBioPic = HTMLbioPic.replace("%data%", this.bioPic);
        $("#header").append(formattedBioPic);

        var formattedWelcome = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
        $("#header").append(formattedWelcome);

        if (this.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (i = 0; i < this.skills.length; i++) {
                var formattedSkill = HTMLskills.replace("%data%", this.skills[i]);
                $("#skills").append(formattedSkill);
            }
        }
    }
};

var work = {
    "jobs": [{
        "title": "Teamleader",
        "employer": "The Local Shack",
        "dates": "1st of March 2016 - 26th of June 2016",
        "location": "Perth, West Australia",
        "description": "I was in charge of opening and closing the restaurant, setting the till, inventory management and ordering, and daily debriefing of the staff. I was also responsible for making the roster aiming for optimal revenue/cost ratios. On top of these management duties, I still kept a lot of my barista duties.",
        "url": "http://www.thelocalshack.com.au"
    }, {
        "title": "Barista",
        "employer": "The Local Shack",
        "dates": "1st of January 2016 - 29th of February 2016",
        "location": "Perth, West Australia",
        "description": "I made excellent coffees in a fast paced environment, focusing on speed while maintaining the quality of coffee and aesthetically appealing latte art. I also took orders, waited tables, developed relationships with customers and fellow staff, and cleaned the restaurant at the end of the night.",
        "url": "http://www.thelocalshack.com.au"
    }, {
        "title": "ICT recruiter",
        "employer": "Team4Talent",
        "dates": "15th of December 2015 - 15th of March 2015",
        "location": "Antwerp, Belgium",
        "description": "Worked as part of a dynamic four-person team to expand and develop Team4Talent's client base and reputation.  Participated in weekly strategic planning to evaluate company's market position, goals, and short- and long-term action plan. Communicated extensively with project managers and business owners to identify required employee profiles to ensure satisfactory matches for IT placements. Actively searched for matching candidate profiles using the internet, private databases, and my personal circle of connections. Thoroughly screened each candidate and evaluated their placement potential on both a technical and personal level. Acted as a liaison between IT professionals and companies to negotiate client salaries. Maintained strong professional working relationships with each IT professional placed into a team through phone call check ins, team events, frequent feedback, and positive communication.",
        "url": "http://www.team4talent.be/en/home-1.htm"
    }, {
        "title": "Wave & Inventory Manager",
        "employer": "VF Europe",
        "dates": "3rd of May 2015 - 30th of October 2015",
        "location": "Sint-Niklaas, Belgium",
        "description": "Managed work flow and inventory in a team environment within a fast-paced distribution center. Collaborated with and communicated across multiple internal departments to solve problems and manage system and process issues. Strategically grouped orders by packaging or type and decided when to process shipments to ensure on-time delivery of goods to customers. Generated reports and monitored progress of goods through a network of sensors using Microsoft Excel.  Analyzed reports multiple times per day to inform decisions.",
        "url": "http://www.vfc.com/"
    }],
    "display": function() {
        this.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer).replace("#", job.url);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            $(".work-entry:last").append(formattedEmployer + formattedTitle);
            var formattedDate = HTMLworkDates.replace("%data%", job.dates);
            $(".work-entry:last").append(formattedDate);
            var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
            $(".work-entry:last").append(formattedLocation);
            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(formattedDescription);
        });
    }
};

var education = {
    "schools": [{
        "name": "University of Ghent",
        "location": "Ghent, Belgium",
        "degree": "Master of Science in Business Engineering",
        "majors": ["Operations Management", "Supply Chain Management"],
        "dates": "30/06/2013",
        "url": "http://www.ugent.be"
    }, {
        "name": "NTNU",
        "location": "Trondheim, Normway",
        "degree": "Master of Science in Business Engineering",
        "majors": [],
        "dates": "30/06/2011",
        "url": "https://www.ntnu.edu/"
    }, {
        "name": "University of Ghent",
        "location": "Ghent, Belgium",
        "degree": "Bachelor of Science in Business Engineering",
        "majors": [],
        "dates": "30/06/2011",
        "url": "http://www.ugent.be"
    }],
    "onlineCourses": [{
        "title": "Front-end Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "www.udacity.com"
    }, {
        "title": "JavaScript Basics and AJAX",
        "school": "TeamTreeHouse",
        "dates": "2015",
        "url": "www.teamtreehouse.com"
    }, {
        "title": "HTML Basics",
        "school": "TeamTreeHouse",
        "dates": "2015",
        "url": "www.teamtreehouse.com"
    }, {
        "title": "CSS Basics",
        "school": "TeamTreeHouse",
        "dates": "2015",
        "url": "www.teamtreehouse.com"
    }],
    "display": function() {
        this.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
            formattedSchoolName = formattedSchoolName.replace("#", school.url);
            formattedSchoolName = formattedSchoolName + HTMLschoolDegree.replace("%data%", school.degree);
            $(".education-entry:last").append(formattedSchoolName);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
            $(".education-entry:last").append(formattedSchoolDates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            $(".education-entry:last").append(formattedSchoolLocation);
            school.majors.forEach(function(major) {
                var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", major);
                $(".education-entry:last").append(formattedSchoolMajor);
            });
        });
        if (this.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            $("#education").append(HTMLschoolStart);
            this.onlineCourses.forEach(function(course) {
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title);
                formattedOnlineTitle = formattedOnlineTitle + HTMLonlineSchool.replace("%data%", course.school);
                $(".education-entry:last").append(formattedOnlineTitle);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);
                $(".education-entry:last").append(formattedOnlineDates);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", course.url);
                $(".education-entry:last").append(formattedOnlineURL);
            });
        }
    }
};

var projects = {
    "projects": [{
        "title": "Travelblog",
        "dates": "May 2015 - September 2015",
        "description": "A travelblog running on RoR, where users can make a login and add stories that get automatically formatted in a beautiful layout.",
        "images": ["images/blog0.jpg", "images/blog1.jpg", "images/blog2.jpg"],
        "url": "https://github.com/sjbuysse/Blog"
    }],
    "display": function() {
        this.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title).replace("#", project.url);
            $(".project-entry:last").append(formattedProjectTitle);
            var formattedProjectDate = HTMLprojectDates.replace("%data%", project.dates);
            $(".project-entry:last").append(formattedProjectDate);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
            $(".project-entry:last").append(formattedProjectDescription);
            project.images.forEach(function(image) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedProjectImage);
            });
        });
    }
};

$("#mapDiv").append(googleMap);

bio.display();
education.display();
projects.display();
work.display();
