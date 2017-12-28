function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; // the maximum is exclusive and the minimum is inclusive
}

var categories = {
    "category1": {
        "description": "The initial steps of verifying the request up to checking the existence of the resource included.",
        "questions" : [
            {
                "text": "What does the received error code 503 represent when sending a HTTP request to a web server?",
                "option1": "Internal Server Error",
                "option2": "Service Unavailable",
                "option3": "Bad Gateway",
                "option4": "Gateway Timeout",
                "correct_answer": "2",
                "clue":	"Tip: It is a client-side error code."
            },
            {
                "text": "What does the received error code 414 represent when sending a HTTP request to a web server?",
                "option1": "Method Not Allowed",
                "option2": "Forbidden",
                "option3": "Request-URI Too Long",
                "option4": "Internal Server Error",
                "correct_answer": "3",
                "clue":	"Tip: It is a client-side error code."
            },
            {
                "text": "What does the received error code 400 represent when sending a HTTP request to a web server?",
                "option1": "Unauthorized",
                "option2": "Request Timeout",
                "option3": "Request-URI Too Long",
                "option4": "Malformed URI",
                "correct_answer": "4",
                "clue":	"Tip: It is a client-side error code."
            },
            {
                "text": "Which HTTP method can be used to find out which request methods a server supports?",
                "option1": "CURL",
                "option2": "OPTIONS",
                "option3": "GET",
                "option4": "POST",
                "correct_answer": "2",
                "clue":	"Tip: The client can specify a specific URL for this method, or an asterisk (*) to refer to the entire server."
            },
            {
                "text": "Which code will you receive after determining the requirements for a resource using OPTIONS HTTP method?",
                "option1": "300 Multiple Choices",
                "option2": "201 Created",
                "option3": "200 Ok",
                "option4": "304 Not Modified",
                "correct_answer": "3",
                "clue":	"Tip: It is a success code."
            },
            {
                "text": "Which are all the available HTTP request methods?",
                "option1": "POST, GET",
                "option2": "DELETE, GET, PUT, HEAD, POST, OPTIONS",
                "option3": "POST, GET, PUT, HEAD, DELETE, OPTIONS, CONNECT, PATCH",
                "option4": "DELETE, GET, PUT, CONNECT, PATCH, PULL, HEAD, POST, OPTIONS",
                "correct_answer": "3",
                "clue":	"Tip: Ups.. we ran out of clues."
            },
            {
                "text": "What does the received error code 401 represent when sending a HTTP request to a web server?",
                "option1": "Request-URI Too Long",
                "option2": "Malformed URI",
                "option3": "Unauthorized",
                "option4": "Bad Request",
                "correct_answer": "3",
                "clue":	"Tip: It is a server-side error code."
            },
            {
                "text": "What does the received error code 403 represent when sending a HTTP request to a web server?",
                "option1": "Forbidden Request",
                "option2": "Request-URI Too Long",
                "option3": "Bad Request",
                "option4": "Unauthorized",
                "correct_answer": "1",
                "clue":	"Tip: It is a client-side error code."
            },
            {
                "text": "After the request method has been established, the server ...",
                "option1": "verifies the existence of the resource",
                "option2": "performs the action corresponding to the request method",
                "option3": "checks if the client is authorized",
                "option4": "verifies if the resource matches an ETag from the If-Match header field",
                "correct_answer": "1",
                "clue":	"Tip: Ups.. we ran out of clues."
            },
            {
                "text": "Which error code will you receive if the If-Match header field can't check if the modification of a resource that the user wants to upload will not override another change that has been done since the original resource was fetched?",
                "option1": "410 Gone",
                "option2": "417 Expectation Failed",
                "option3": "416 Range Not Satisfiable",
                "option4": "412 Precondition Failed",
                "correct_answer": "4",
                "clue":	"Tip: It is a client-side error code."
            }
        ]
    },


    "category2": {
        "description": "The resource doesn't exist on the server; the request methods PUT and POST.",
        "questions": [
            {
                "text": "In the context of the PUT request method, the server verifies first if ...",
                "option1": "the resource can be created on the server",
                "option2": "the resource already exists",
                "option3": "the resource was moved",
                "option4": "the content of the resource is supported",
                "correct_answer": "4",
                "clue":	"Tip: The server will take a pre-processing step."
            },
            {
                "text": "What happens if the resource was successfully created, but the server can't store it?",
                "option1": "the server will redirect the client, returning the code 303",
                "option2": "the server will delete a resource that hasn't been accessed for a long time to make room for the new resource",
                "option3": "the client will receive 500 Internal Server Error",
                "option4": "the server will allocate a memory space for the new resource",
                "correct_answer": "1",
                "clue":	"Tip: The server will try to make room for the new resource."
            },
            {
                "text": "Before verifying whether the client wants to post a resource, the server verifies if ...",
                "option1": "the resource previously existed",
                "option2": "the resource was permanently moved",
                "option3": "the resource was temporarily moved",
                "option4": "all of the above",
                "correct_answer": "4",
                "clue":	"Tip: Ups.. we ran out of clues."
            },
            {
                "text": "In the context of the POST request method, the server verifies the next conditions and in the following order:",
                "option1": "content is supported, the resource was created, the resource has a URI, server permits post to missing resource",
                "option2": "server permits post to missing resource, content is supported, the resource has a URI, the resource was created",
                "option3": "server permits post to missing resource, content is supported, the resource was created, the resource has a URI",
                "option4": "server permits post to missing resource, the resource has a URI, content is supported, the resource was created",
                "correct_answer": "3",
                "clue":	"Tip: The resource must have a URI before being created."
            },
            {
                "text": "Which is the sufficient condition for the resource to be posted if it doesn't have a URI?",
                "option1": "the resource has supported content",
                "option2": "the response includes an entity",
                "option3": "the resource has a specific length",
                "option4": "none of the above",
                "correct_answer": "2",
                "clue":	"Tip: The resource must have a URI in order to be posted."
            },
            {
                "text": "What does the received error code 301 represent when sending a HTTP request to a web server?",
                "option1": "Multiple Choices",
                "option2": "Moved Permanently",
                "option3": "See Other",
                "option4": "Not Modified",
                "correct_answer": "2",
                "clue":	"Tip: It is a redirect code."
            },
            {
                "text": "What does the received error code 410 represent when sending a HTTP request to a web server?",
                "option1": "Gone",
                "option2": "Not Implemented",
                "option3": "Conflict",
                "option4": "Service Unavailable",
                "correct_answer": "1",
                "clue":	"Tip: It is a server-side error code."
            },
            {
                "text": "What does the received error code 501 represent when sending a HTTP request to a web server?",
                "option1": "Bad Request",
                "option2": "Internal Server Error",
                "option3": "Not Implemented",
                "option4": "Bad Gateway",
                "correct_answer": "3",
                "clue":	"Tip: It is a client-side error code."
            }
        ]
    },


    "category3": {
        "description": "The resource exists on the server; verifying some attributes in the header: If-Match, If-None-Match, when the resource was last modified, ETags",
        "questions": [
            {
                "text": "What does the received error code 304 represent when sending a HTTP request to a web server?",
                "option1": "Not Modified",
                "option2": "Temporary Redirect",
                "option3": "No Content",
                "option4": "Permanent Redirect",
                "correct_answer": "1",
                "clue": "Tip: It is a redirect code."
            },
            {
                "text": "What does the received error code 412 represent when sending a HTTP request to a web server?",
                "option1": "Length Required",
                "option2": "Precondition Required",
                "option3": "Range Not Satisfiable",
                "option4": "Precondition Failed",
                "correct_answer": "4",
                "clue": "Tip: It is a client-side error code."
            },
            {
                "text": "What happens if none of the ETags match in the context of If-Match header field?",
                "option1": "the server checks if '*' is given and if there is a current entity",
                "option2": "the server returns a 412 Precondition Failed error code",
                "option3": "the server behaves as if the If-Match header field did not exist",
                "option4": "none of the above",
                "correct_answer": "2",
                "clue": "Tip: Ups.. we ran out of clues."
            },
            {
                "text": "When is the If-Match header field most useful?",
                "option1": "when we want to have efficient updates of cached information with a minimum amount of transaction overhead",
                "option2": "when we want to avoid a GET request without the If-Match header on that resource",
                "option3": "when the client wants to prevent PUT/POST from modifying a resource that has changed since the client last retrieved it",
                "option4": "all of the above",
                "correct_answer": "3",
                "clue": "Tip: Think about how this header field influences request methods."
            },
            {
                "text": "Which of the following conditions will lead to error code 412 Precondition Failed?",
                "option1": "Last-Modified > If-Unmodified-Since",
                "option2": "If-Unmodified-Since doesn't exist",
                "option3": "Last-Modified < If-Unmodified-Since",
                "option4": "If-Unmodified-Since isn't a valid date",
                "correct_answer": "1",
                "clue": "Tip: Some of the conditions may be pre-conditions for others."
            },
            {
                "text": "If the resource hasn't been modified, which of the following conditions are sufficient for GET/HEAD not to return 412 Precondition Failed?",
                "option1": "If-None-Match exists, If-None-Match:* doesn't exist, there aren't any ETags that match",
                "option2": "If-None-Match exists, If-None-Match:* doesn't exist, there is an ETag that matches",
                "option3": "If-None-Match doesn't exist, If-Non-Match:* exists",
                "option4": "If-None-Match doesn't exist",
                "correct_answer": "2",
                "clue": "Tip: Ups.. we ran out of clues."
            },
            {
                "text": "When is the If-None-Match header field most useful?",
                "option1": "when we want to avoid a GET request without the If-None-Match header on that resource",
                "option2": "when we want to avoid the 412 Precondition Failed error code",
                "option3": "when we want to have efficient updates of cached information with a minimum amount of transaction overhead",
                "option4": "when we want to prevent PUT from inadvertently modifying an existing resource when the client believes that the resource does not exist",
                "correct_answer": "4",
                "clue": "Tip: Think about how this header field influences request methods."
            },
            {
                "text": "Which of the following conditions will lead to redirect code 304 Not Modified?",
                "option1": "If-Modified-Since > Now and Last-Modified < If-Modified-Since",
                "option2": "If-Modified-Since < Now and Last-Modified > If-Modified-Since",
                "option3": "If-Modified-Since > Now and Last-Modified < If-Modified-Since",
                "option4": "If-Modified-Since < Now and Last-Modified < If-Modified-Since",
                "correct_answer": "4",
                "clue": "Tip: The answer can be deduced logically, without knowing the diagram."
            }
        ]
    },

    "category4": {
        "description": "The resource exists on the server; the request methods PUT and POST.",
        "questions": [
            {
                "text": "What error code will be generated if the request entity isn't large enough?",
                "option1": "413 Request Entity Too Large",
                "option2": "413 Request Entity Not Large Enough",
                "option3": "there won't be generated any error code because there isn't a lower edge",
                "option4": "414 URI Too Long",
                "correct_answer": "3",
                "clue": "Tip: It is a client-side error code."
            },
            {
                "text": "What error code will be generated if the media type isn't supported?",
                "option1": "417 Expectation Failed",
                "option2": "415 Unsupported Media Type",
                "option3": "501 Not Implemented",
                "option4": "503 Service Unavailable",
                "correct_answer": "2",
                "clue": "Tip: It is a server-side error code."
            },
            {
                "text": "What error code will be generated if the resource can't be updated or data can't be appended to it?",
                "option1": "500 Internal Server Error",
                "option2": "501 Not Implemented",
                "option3": "503 Service Unavailable",
                "option4": "426 Upgrade Required",
                "correct_answer": "1",
                "clue": "Tip: Ups.. we ran out of clues."
            },
            {
                "text": "Which of the following are valid media types?",
                "option1": "all of the below",
                "option2": "text/html, audio/mpeg, application/json",
                "option3": "image/gif, video/h264, application/javascript",
                "option4": "multipart/mixed, text/plain, application/msword",
                "correct_answer": "1",
                "clue": "Tip: Ups.. we ran out of clues."
            },
            {
                "text": "Which is the sufficient condition so data can be appended to the resource if it doesn't have a URI?",
                "option1": "none of the below",
                "option2": "the data is in the supported media types",
                "option3": "the data has a specific length",
                "option4": "the response includes an entity",
                "correct_answer": "4",
                "clue":	"Tip: The resource must have a URI to be posted."
            },
            {
                "text": "Which of the following represents a difference between PUT and POST?",
                "option1": "PUT can't create a new resource, while POST can",
                "option2": "PUT is not a safe request method, while POST is",
                "option3": "POST is an idempotent method, while PUT isn't",
                "option4": "PUT updates a resource, while POST appends entities (data, actions) to the resource",
                "correct_answer": "4",
                "clue": "Tip: POST is more often used than PUT."
            },
            {
                "text": "What other two checks does PUT in addition to POST before updating the resource?",
                "option1": "checks whether the request entity is too large and whether the content is known",
                "option2": "checks whether the content is known and whether the resource can be updated on the server",
                "option3": "checks whether the content is known and whether there are any conflicts",
                "option4": "checks whether the media type is supported and whether there are any conflicts",
                "correct_answer": "3",
                "clue": "Tip: Ups.. we ran out of clues."
            },
            {
                "text": "Which of the following conditions can lead to 204 No Content?",
                "option1": "the client is redirected",
                "option2": "the resource couldn't be updated",
                "option3": "the resource was updated successfully",
                "option4": "the response includes an entity",
                "correct_answer": "3",
                "clue": "Tip: The HTTP 204 No Content success status response code indicates that the request has succeeded, but that the client doesn't need to go away from its current page."
            }
        ]
    },

    "category5": {
        "description": "The resource exists on the server; the request methods DELETE, GET and HEAD.",
        "questions": [
            {
                "text": "Which of the following represents a difference between GET and HEAD?",
                "option1": "GET provides a resource representation, while HEAD provides meta-data regarding the resource",
                "option2": "GET is safe, while HEAD is not safe",
                "option3": "HEAD is idempotent, while GET is not idempotent",
                "option4": "HEAD provides a resource representation, while GET provides meta-data regarding the resource",
                "correct_answer": "1",
                "clue": "Tip: GET is more often used than HEAD."
            },
            {
                "text": "Which of the following statements about DELETE is false?",
                "option1": "DELETE isn't a safe request method",
                "option2": "DELETE deletes the representation of a resource from de server",
                "option3": "DELETE checks if the delete is enacted",
                "option4": "DELETE isn't an idempotent request method",
                "correct_answer": "4",
                "clue": "Tip: Ups.. we ran out of clues."
            },
            {
                "text": "For a resource to be deleted, the following conditions needs to be fulfilled and in the next order:",
                "option1": "the delete is enacted and the resource can be deleted",
                "option2": "the resource can be deleted and the delete is enacted",
                "option3": "the delete is enacted and the response includes an entity",
                "option4": "the resource can be deleted and the response includes an entity",
                "correct_answer": "1",
                "clue": "Tip: If the delete isn't enacted, it leads to 202 Accepted success code."
            },
            {
                "text": "What redirect code will you receive if there are multiple representations for the resource?",
                "option1": "406 Not Acceptable",
                "option2": "300 Multiple Choices",
                "option3": "202 Accepted",
                "option4": "303 Multiple Choices",
                "correct_answer": "2",
                "clue": "Tip: Ups.. we ran out of clues."
            },
            {
                "text": "What error code will you receive if there exists the Accept-Language header field but there isn't an acceptable language available?",
                "option1": "202 Accepted",
                "option2": "you won't receive an error code",
                "option3": "406 Not Acceptable",
                "option4": "500 Internal Server Error",
                "correct_answer": "3",
                "clue": "Tip: It is a server-side error code."
            },
            {
                "text": "Which is the first step the server does in the context of GET/HEAD request method?",
                "option1": "verifies if there is an acceptable media type available",
                "option2": "verifies whether there are more than one representation for the resource",
                "option3": "verifies if the Accept header field exists",
                "option4": "verifies if the resource can be retrieved",
                "correct_answer": "3",
                "clue": "Tip: The server verifies the header fields existence before the existence of some acceptable values for the specified field."
            },
            {
                "text": "Before verifying whether the resource has many representations, the server verifies the existence of the following header fields and in the next order:",
                "option1": "Accept, Accept-Charset, Accept-Language, Accept-Encoding",
                "option2": "Accept, Accept-Language, Accept-Charset, Accept-Encoding",
                "option3": "Accept, Accept-Encoding, Accept-Charset, Accept-Language",
                "option4": "Accept, Accept-Encoding, Accept-Language, Accept-Charset",
                "correct_answer": "2",
                "clue": "Tip: Accept is the first verified field."
            }
        ]
    }
}

var asked_questions = [];
category = "category1"
var nr_of_questions = categories[category].questions.length;
rand = getRandomInt(0, nr_of_questions)
asked_questions.push(rand)

//console.log(rand)
//console.log(used_questions)

document.getElementById("question_text").innerHTML = categories[category].questions[rand].text;
document.getElementById("option1").innerHTML = categories[category].questions[rand].option1;
document.getElementById("option2").innerHTML = categories[category].questions[rand].option2;
document.getElementById("option3").innerHTML = categories[category].questions[rand].option3;
document.getElementById("option4").innerHTML = categories[category].questions[rand].option4;
document.getElementById("clue").innerHTML = categories[category].questions[rand].clue;

var chosen_option_nr = "";
var options = document.getElementById("options").getElementsByTagName("li");
for (var i = 0; i < options.length; i++) {

   options[i].onmouseover = function() {
       if(chosen_option_nr !== this.getAttribute("id")[this.getAttribute("id").length - 1]) {
           this.setAttribute("style", "background-color: lightgreen;");
       }
   }
   options[i].onmouseout = function() {
       if(chosen_option_nr !== this.getAttribute("id")[this.getAttribute("id").length - 1]) {
           this.setAttribute("style", "background-color: tan;");
       }
   }

   options[i].onclick = function() {
       for (var j = 0; j < options.length; j++) {
               options[j].setAttribute("style", "background-color: tan;");
       }
       this.setAttribute("style", "background-color: forestgreen;");
       chosen_option_nr = this.getAttribute("id")[this.getAttribute("id").length - 1];
   }
}

var submit_button = document.getElementById("submit_button_text");
submit_button.onclick = function() {
    if (chosen_option_nr === categories[category].questions[rand].correct_answer) {
        alert("Ai raspuns corect!");
    }
    else {
        alert("Ai raspuns gresit!");
    }
}