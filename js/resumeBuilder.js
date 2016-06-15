var bio = {
    "name": "Simon Buysse", 
    "role": "Front-end Web Developer",
    "contacts": {
        "mobile": "+61405010232",
        "email": "buysse.simon@gmail.com",
        "github": "sjbuysse",
        "location": "Perth, Australia"
    },
    "welcomeMsg": "Hi! I'm happy to have you as my guest, please have a look at my resume and hopefully I can be of value to your project.",
    "skills": [ 
        "HTML", "CSS", "Git", "Ruby", "JavaScript", "jQuery", "Bootstrap", "Grunt" 
    ], 
    "bioPic": "images/selfie-medium.jpg"
};

var work = {
    "jobs": [
        {
            "title": "Teamleader",
            "employer": "The Local Shack",
            "dates": "1st of March 2016 - 26th of June 2016",
            "location": "Perth, West Australia",
            "description": "I was in charge of opening and closing the restaurant, doing the banking, inventory management and ordering. I was also responsible for staffing properly while maintaining profitable revenue/cost ratios. On top of these management duties, I still kept a lot of my barista duties."
        },{
            "title": "Barista",
            "employer": "The Local Shack",
            "dates": "1st of January 2016 - 29th of February 2016",
            "location": "Perth, West Australia",
            "description": "I made excellent coffees in a fast paced environment, I took orders, waited tables, developed relationships with customers and fellow staff, and cleaned the restaurant at the end of the night."
        },{
            "title": "ICT recruiter",
            "employer": "Team4Talent",
            "dates":  "15th of December 2015 - 15th of March 2015",
            "location": "Antwerp, Belgium",
            "description": "Worked as part of a dynamic four-person team to expand and develop Team4Talent's client base and reputation.  Participated in weekly strategic planning to evaluate company's market position, goals, and short- and long-term action plan. Communicated extensively with project managers and business owners to identify required employee profiles to ensure satisfactory matches for IT placements. Actively searched for matching candidate profiles using the internet, private databases, and my personal circle of connections. Thoroughly screened each candidate and evaluated their placement potential on both a technical and personal level. Acted as a liaison between IT professionals and companies to negotiate client salaries. Maintained strong professional working relationships with each IT professional placed into a team through phone call check ins, team events, frequent feedback, and positive communication."
        },{
            "title": "Wave & Inventory Manager",
            "employer": "VF Europe",
            "dates": "3rd of May 2015 - 30th of October 2015",
            "location": "Sint-Niklaas, Belgium",
            "description": "Managed work flow and inventory in a team environment within a fast-paced distribution center. Collaborated with and communicated across multiple internal departments to solve problems and manage system and process issues. Strategically grouped orders by packaging or type and decided when to process shipments to ensure on-time delivery of goods to customers. Generated reports and monitored progress of goods through a network of sensors using Microsoft Excel.  Analyzed reports multiple times per day to inform decisions."
        }
    ]
};

var education = {
    "schools": [
        {
            "name": "University of Ghent",
            "location": "Ghent",
            "degree": "Business Engineering",
            "major": "Operations Management",
            "dates": "2008-2013",
        }, {
            "name": "Broederschool",
            "location": "Sint-Niklaas",
            "degree": "Economie Wiskunde",
            "major": "Math and Economy",
            "dates": "2006-2008",
        }
    ],
    "displaySchools": function(){
        this.schools.forEach( function(school){
            $("#education").append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
            $(".education-entry:last").append(formattedSchoolName);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            $(".education-entry:last").append(formattedSchoolDegree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
            $(".education-entry:last").append(formattedSchoolDates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            $(".education-entry:last").append(formattedSchoolLocation);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.major);
            $(".education-entry:last").append(formattedSchoolMajor);
        });
    },
    "onlineCourses": [
        {
            "title": "Front-end Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "2016",
            "url": "www.udacity.com"
        },{
            "title": "JavaScript Basics and AJAX",
            "school": "TeamTreeHouse",
            "dates": "2015",
            "url": "www.teamtreehouse.com"
        },{
            "title": "HTML Basics",
            "school": "TeamTreeHouse",
            "dates": "2015",
            "url": "www.teamtreehouse.com"
        },{
            "title": "CSS Basics",
            "school": "TeamTreeHouse",
            "dates": "2015",
            "url": "www.teamtreehouse.com"
        }
    ],
    "displayOnlineCourses": function(){
        if(this.onlineCourses.length > 0 ){
            $("#education").append(HTMLonlineClasses);
            $("#education").append(HTMLschoolStart);
            this.onlineCourses.forEach(function(course){
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title); 
                console.log(formattedOnlineTitle);
                $(".education-entry:last").append(formattedOnlineTitle);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school); 
                $(".education-entry:last").append(formattedOnlineSchool);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates); 
                $(".education-entry:last").append(formattedOnlineDates);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", course.url); 
                $(".education-entry:last").append(formattedOnlineURL);
            });

        }
    }
};

education.displaySchools();
education.displayOnlineCourses();

var projects = {
    "projects" : [
        {
            "title": "Travelblog",
            "dates": "May 2015 - September 2015",
            "description": "A travelblog running on RoR, where users can make a login and add stories that get automatically formatted in a beautiful layout.",
            "images": []
        }
    ],
    "display": function(){
        this.projects.forEach( function(project){
            $("#projects").append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
            $(".project-entry:last").append(formattedProjectTitle);
            var formattedProjectDate = HTMLprojectDates.replace("%data%", project.dates);
            $(".project-entry:last").append(formattedProjectDate);
            var formattedProjectDescription =  HTMLprojectDescription.replace("%data%", project.description);
            $(".project-entry:last").append(formattedProjectDescription);
            project.images.forEach( function(image){
                var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedProjectImage);
            });
        });
    }
};
projects.display();

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts["github"]);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts["location"]);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBioPic);

var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
$("#header").append(formattedWelcome);
if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for(i=0; i < bio.skills.length; i++){
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
} 

var displayWork = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        $(".work-entry:last").append(formattedEmployer + formattedTitle);
        var formattedDate = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDate);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedDescription);
    });
};

displayWork();



//$("#main").append(internationalizeButton);

//var inName = function(fullName) {
   //var firstName = fullName.trim().split(" ")[0] ;
   //var lastName = fullName.split(" ")[1] ;
   //firstName = firstName.slice(0,1).toUpperCase() + firstName.slice(1).toLowerCase();
   //lastName = lastName.toUpperCase();
   //return firstName + " " + lastName;
//};

//var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.currentJob);
//var formattedSchoolName = HTMLschoolName.replace("%data%", education.name);

//$("#education").append(HTMLschoolStart);
//$(".education-entry").append(formattedSchoolName);
//

