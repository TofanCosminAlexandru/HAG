function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; // the maximum is exclusive and the minimum is inclusive
}

var drawCanvasImage = function(ctx, image, row, col) {
    return function() {
        ctx.drawImage(image, col * 200, row * 200, 200, 200);
    }
};

var category = "category3"; // the category of questions for level 3
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
}; // the json with all the categories and their questions

var is_centered = 3; // 0 - the character isn't centered neither in width nor in height
                     // 1 - the character is centered only in width
                     // 2 - the character is centered only in height
                     // 3 - the character is centered both in width and in height

var diamonds = 0; // the numbers of diamonds collected found at this level
var points = 0; // the number of points accumulated during this level
var asked_questions = []; // the indexes of the questions already asked
var has_key = 0; // 1 - the character has the key, 0 - otherwise
var has_mushroom = 0;
var has_pegasus_feather = 0;
var has_dragons_breath_potion = 0;
var has_guardian_angel_asked =0;
var has_sun_asked = 0;
var has_sun_told_you_of_his_disease = 0;
var has_pixie_asked = 0;
var has_king_asked = 0;
var has_pegasus_asked = 0;
var has_suns_diamond = 0;
var ray1_on = 0, ray2_on = 0, ray3_on = 0, ray4_on = 0, ray5_on = 0, ray6_on = 0, ray7_on = 0, ray8_on = 0, ray9_on = 0, ray10_on = 0,
    ray11_on = 0, ray12_on = 0, ray13_on = 1, ray14_on = 0, ray15_on = 0, ray16_on = 1, ray17_on = 0;
var cloud1_way = "forward", cloud2_way = "backward", cloud3_way = "forward", cloud4_way = "forward", cloud5_way = "backward", cloud6_way = "forward", cloud7_way = "forward",
    cloud8_way = "backward", cloud9_way = "backward", cloud10_way = "forward", cloud11_way = "forward", cloud12_way = "forward", cloud13_way = "backward", cloud14_way = "backward",
    cloud15_way = "backward", cloud16_way = "backward", cloud17_way = "forward", cloud18_way = "backward";

// matrix with the ground under the elements (the background)
// also used to remember when the character is on a cloud
var sky = [["sky", "sky", "sky", "pillar", "throne", "pillar", "wall", "ground", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "cloud16", "sky"],
    ["portal_to_earth", "ground", "cloud", "gate3", "floor", "pillar", "wall", "wall", "wall", "wall", "ground", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "sky"],
    ["wall", "wall", "pillar", "pillar", "floor", "pillar", "pillar", "wall", "pillar", "pillar", "ground", "pillar", "wall", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "wall", "sky"],
    ["ground", "wall", "pillar", "human1", "floor", "angel1", "pillar", "wall", "sky", "ground", "sky", "cloud18", "sky", "ground", "ground", "sky", "sky", "sky", "ground", "sky", "wall", "sky"],
    ["sky", "wall", "pillar", "human2", "floor", "human3", "pillar", "wall", "pillar", "pillar", "pillar", "sky", "wall", "wall", "sky", "sky", "ground", "ground", "ground", "sky", "wall", "sky"],
    ["sky", "wall", "pillar", "pillar", "gate2", "pillar", "pillar", "wall", "sky", "sky", "sky", "sky", "sky", "wall", "wall", "ground", "wall", "ground", "wall", "ground", "wall", "sky"],
    ["sky", "wall", "wall", "wall", "castle", "wall", "wall", "wall", "sky", "pillar", "sky", "sky", "sky", "sky", "sky", "ground", "wall", "ground", "wall", "sky", "wall", "sky"],
    ["sky", "sky", "sky", "pillar", "cloud", "pillar", "sky", "sky", "sky", "sky", "sky", "ground", "ground", "ground", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky"],
    ["sky", "sky", "sky", "pixie", "ground", "ground", "broken_portal", "sky", "sky", "sky", "broken_portal", "ground", "sick_sun", "ground", "cloud17", "sky", "sky", "sky", "sky", "sky", "sky", "sky"],
    ["sky", "wall", "wall", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "ground", "ground", "ground", "sky", "sky", "sky", "sky", "sky", "cloud14", "sky", "cloud15"],
    ["cloud5", "wall", "ground", "cloud6", "sky", "sky", "wall", "wall", "ground", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "cloud13", "cloud12", "sky", "sky", "sky"],
    ["sky", "ground", "sky", "ground", "ground", "ground", "sky", "wall", "ground", "sky", "sky", "sky", "cloud9", "sky", "cloud10", "sky", "sky", "sky", "cloud11", "sky", "sky", "sky"],
    ["sky", "cloud4", "pillar", "pillar", "sky", "sky", "sky", "wall", "ground", "wall", "sky", "sky", "sky", "sky", "sky", "sky", "wall", "sky", "sky", "sky", "pillar", "sky"],
    ["sky", "sky", "pillar", "pillar", "ground", "cloud7", "sky", "sky", "ground", "wall", "sky", "wall", "wall", "cloud8", "sky", "sky", "wall", "sky", "sky", "sky", "pillar", "sky"],
    ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "wall", "ground", "wall", "ground", "ground", "ground", "wall", "sky", "sky", "sky", "sky", "sky"],
    ["ground", "cloud3", "sky", "sky", "sky", "sky", "cloud2", "ground", "ground", "ground", "wall", "wall", "wall", "sky", "sun", "ground", "wall", "ground", "ground", "sky", "ground", "ground"],
    ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sun", "ground", "sky", "sky", "sky", "ground", "ground", "ground", "wall", "sky", "sun", "ground", "sun", "ground"],
    ["portal_to_earth", "ground", "ground", "cloud1", "sky", "sky", "ground", "ground", "ground", "ground", "ground", "gate1", "ground", "ground", "sky", "sky", "wall", "ground", "ground", "sky", "ground", "ground"]];

// matrix with all the game elements
var game = [["sky", "sky", "sky", "pillar", "throne", "pillar", "wall", "diamond", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "cloud16", "sky"],
    ["portal_to_earth", "ground", "cloud", "gate3", "floor", "pillar", "wall", "wall", "wall", "wall", "ground", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "sky"],
    ["wall", "wall", "pillar", "pillar", "floor", "pillar", "pillar", "wall", "pillar", "pillar", "ground", "pillar", "wall", "ground", "stone", "ground", "stone", "stone", "ground", "ground", "wall", "sky"],
    ["diamond", "wall", "pillar", "human1", "floor", "angel1", "pillar", "wall", "pegasus", "ground", "cloud18", "sky", "sky", "stone", "stone", "sky", "sky", "sky", "stone", "sky", "wall", "sky"],
    ["sky", "wall", "pillar", "human2", "floor", "human3", "pillar", "wall", "pillar", "pillar", "pillar", "sky", "wall", "wall", "sky", "sky", "stone", "stone", "stone", "sky", "wall", "sky"],
    ["sky", "wall", "pillar", "pillar", "gate2", "pillar", "pillar", "wall", "sky", "sky", "sky", "sky", "sky", "wall", "wall", "ground", "wall", "ground", "wall", "stone", "wall", "sky"],
    ["sky", "wall", "wall", "wall", "castle", "wall", "wall", "wall", "sky", "pillar", "sky", "sky", "sky", "sky", "sky", "stone", "wall", "ground", "wall", "sky", "wall", "sky"],
    ["sky", "sky", "sky", "pillar", "cloud", "pillar", "sky", "sky", "sky", "sky", "sky", "ground", "ground", "ground", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky"],
    ["sky", "sky", "sky", "pixie", "ground", "me", "broken_portal", "sky", "sky", "sky", "broken_portal", "ground", "sick_sun", "ground", "cloud17", "sky", "sky", "sky", "sky", "sky", "sky", "sky"],
    ["sky", "wall", "wall", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "ground", "ground", "ground", "sky", "sky", "sky", "sky", "sky", "cloud14", "sky", "cloud15"],
    ["cloud5", "wall", "ground", "cloud6", "sky", "sky", "wall", "wall", "key", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "cloud13", "cloud12", "sky", "sky", "sky"],
    ["sky", "ground", "sky", "ground", "stone", "ground", "sky", "wall", "angel2", "sky", "sky", "sky", "cloud9", "sky", "cloud10", "sky", "sky", "sky", "cloud11", "sky", "sky", "sky"],
    ["sky", "cloud4", "pillar", "pillar", "sky", "sky", "sky", "wall", "ground", "wall", "sky", "sky", "sky", "sky", "sky", "sky", "wall", "sky", "sky", "sky", "pillar", "sky"],
    ["sky", "sky", "pillar", "pillar", "ground", "cloud7", "sky", "sky", "stone", "wall", "sky", "wall", "wall", "cloud8", "sky", "sky", "wall", "sky", "sky", "sky", "pillar", "sky"],
    ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "wall", "mushroom", "wall", "ray9", "ray10", "ray11", "wall", "sky", "sky", "sky", "sky", "sky"],
    ["ground", "cloud3", "sky", "sky", "sky", "sky", "cloud2", "ground", "ray3", "ground", "wall", "wall", "wall", "sky", "sun", "ray8", "wall", "ground", "ray14", "sky", "ray17", "ground"],
    ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sun", "ray2", "sky", "sky", "sky", "ray4", "ray5", "ray6", "wall", "sky", "sun", "ray13", "sun", "ray16"],
    ["portal_to_earth", "ground", "ground", "cloud1", "sky", "sky", "ground", "ground", "ray1", "ground", "ground", "gate1", "ground", "ground", "sky", "sky", "wall", "diamond", "ray12", "sky", "ray15", "potion"]];

// map element --> corresponding picture
var map_elements = {
    "sky": "sky_images/clouds.png",
    "healed_sun": "sky_images/healed_sun.png",
    "angel1": "sky_images/angel1.png",
    "angel2": "sky_images/angel2.png",
    "human1": "sky_images/human1.png",
    "human2": "sky_images/human2.png",
    "human3": "sky_images/human3.png",
    "throne": "sky_images/throne.png",
    "mushroom": "sky_images/mushroom.png",
    "potion": "sky_images/potion.png",
    "pegasus": "sky_images/pegasus.png",
    "pixie": "sky_images/pixie.png",
    "sun": "sky_images/sun.png",
    "sick_sun": "sky_images/sick_sun.png",
    "stone": "sky_images/stone.png",
    "pillar": "sky_images/pillar.png",
    "portal": "sky_images/portal.png",
    "portal_to_earth": "sky_images/portal_to_earth.png",
    "broken_portal": "sky_images/broken_portal.png",
    "gate1": "sky_images/gate1.png",
    "gate2": "sky_images/gate2.png",
    "gate3": "sky_images/gate3.png",
    "me": "sky_images/character.png",
    "ground": "sky_images/ground.png",
    "floor": "sky_images/floor.png",
    "wall": "sky_images/wall.png",
    "diamond": "sky_images/diamond.png",
    "castle": "sky_images/castle.png",
    "cloud": "sky_images/cloud.png",
    "cloud1": "sky_images/cloud.png",
    "cloud2": "sky_images/cloud.png",
    "cloud3": "sky_images/cloud.png",
    "cloud4": "sky_images/cloud.png",
    "cloud5": "sky_images/cloud.png",
    "cloud6": "sky_images/cloud.png",
    "cloud7": "sky_images/cloud.png",
    "cloud8": "sky_images/cloud.png",
    "cloud9": "sky_images/cloud.png",
    "cloud10": "sky_images/cloud.png",
    "cloud11": "sky_images/cloud.png",
    "cloud12": "sky_images/cloud.png",
    "cloud13": "sky_images/cloud.png",
    "cloud14": "sky_images/cloud.png",
    "cloud15": "sky_images/cloud.png",
    "cloud16": "sky_images/cloud.png",
    "cloud17": "sky_images/cloud.png",
    "cloud18": "sky_images/cloud.png",
    "ray1": "sky_images/ray.png",
    "ray2": "sky_images/ray.png",
    "ray3": "sky_images/ray.png",
    "ray4": "sky_images/ray.png",
    "ray5": "sky_images/ray.png",
    "ray6": "sky_images/ray.png",
    "ray7": "sky_images/ray.png",
    "ray8": "sky_images/ray.png",
    "ray9": "sky_images/ray.png",
    "ray10": "sky_images/ray.png",
    "ray11": "sky_images/ray.png",
    "ray12": "sky_images/ray.png",
    "ray13": "sky_images/ray.png",
    "ray14": "sky_images/ray.png",
    "ray15": "sky_images/ray.png",
    "ray16": "sky_images/ray.png",
    "ray17": "sky_images/ray.png",
    "key": "sky_images/key.png"
};

// the canvas is loaded based on this function
function init() {
    /* --- MAP --- */
    var canvas = document.getElementById('canvas');
    canvas.style.transform = "translate(0px, " + 0/*-((((18/9)*window.innerHeight)/18) * 9)*/ + "px)";
    var i, j, image;

    // this function translates the canvas as the character moves
    function translate_canvas(is_centered, direction) {
        var x = parseInt(canvas.style.transform.split("(")[1].split(",")[0].split("px")[0]);
        var y = parseInt(canvas.style.transform.split("(")[1].split(", ")[1].split("px")[0]);
        if (is_centered === 0) {

        }
        else if (is_centered === 1) {
            if (direction === "right") {
                canvas.style.transform = "translate(" + x + "px, " + y + "px)";
            }
            else if (direction === "left") {
                canvas.style.transform = "translate(" + x + "px, " + y + "px)";
            }
            else if (direction === "up") {
                canvas.style.transform = "translate(" + x + "px, " + (y + (((18/9)*window.innerHeight)/18)) + "px)";
            }
            else if (direction === "down") {
                canvas.style.transform = "translate(" + x + "px, " + (y - (((18/9)*window.innerHeight)/18)) + "px)";
            }
            else if (direction === "rightup") {
                canvas.style.transform = "translate(" + x + "px, " + (y + (((18/9)*window.innerHeight)/18)) + "px)";
            }
            else if (direction === "leftup") {
                canvas.style.transform = "translate(" + x + "px, " + (y + (((18/9)*window.innerHeight)/18)) + "px)";
            }
            else if (direction === "rightdown") {
                canvas.style.transform = "translate(" + x + "px, " + (y - (((18/9)*window.innerHeight)/18)) + "px)";
            }
            else if (direction === "leftdown") {
                canvas.style.transform = "translate(" + x + "px, " + (y - (((18/9)*window.innerHeight)/18)) + "px)";
            }
        }
        else if (is_centered === 2) {
            if (direction === "right") {
                canvas.style.transform = "translate(" + (x - (((22/11)*window.innerWidth)/22)) + "px, " + y + "px)";
            }
            else if (direction === "left") {
                canvas.style.transform = "translate(" + (x + (((22/11)*window.innerWidth)/22)) + "px, " + y + "px)";
            }
            else if (direction === "up") {
                canvas.style.transform = "translate(" + x + "px, " + y + "px)";
            }
            else if (direction === "down") {
                canvas.style.transform = "translate(" + x + "px, " + y + "px)";
            }
            else if (direction === "rightup") {
                canvas.style.transform = "translate(" + (x - (((22/11)*window.innerWidth)/22)) + "px, " + y + "px)";
            }
            else if (direction === "leftup") {
                canvas.style.transform = "translate(" + (x + (((22/11)*window.innerWidth)/22)) + "px, " + y + "px)";
            }
            else if (direction === "rightdown") {
                canvas.style.transform = "translate(" + (x - (((22/11)*window.innerWidth)/22)) + "px, " + y + "px)";
            }
            else if (direction === "leftdown") {
                canvas.style.transform = "translate(" + (x + (((22/11)*window.innerWidth)/22)) + "px, " + y + "px)";
            }
        }
        else if (is_centered === 3) {
            if (direction === "right") {
                canvas.style.transform = "translate(" + (x - (((22/11)*window.innerWidth)/22)) + "px, " + y + "px)";
            }
            else if (direction === "left") {
                canvas.style.transform = "translate(" + (x + (((22/11)*window.innerWidth)/22)) + "px, " + y + "px)";
            }
            else if (direction === "up") {
                canvas.style.transform = "translate(" + x + "px, " + (y + (((18/9)*window.innerHeight)/18)) + "px)";
            }
            else if (direction === "down") {
                canvas.style.transform = "translate(" + x + "px, " + (y - (((18/9)*window.innerHeight)/18)) + "px)";
            }
            else if (direction === "rightup") {
                canvas.style.transform = "translate(" + (x - (((22/11)*window.innerWidth)/22)) + "px, " + (y + (((18/9)*window.innerHeight)/18)) + "px)";
            }
            else if (direction === "leftup") {
                canvas.style.transform = "translate(" + (x + (((22/11)*window.innerWidth)/22)) + "px, " + (y + (((18/9)*window.innerHeight)/18)) + "px)";
            }
            else if (direction === "rightdown") {
                canvas.style.transform = "translate(" + (x - (((22/11)*window.innerWidth)/22)) + "px, " + (y - (((18/9)*window.innerHeight)/18)) + "px)";
            }
            else if (direction === "leftdown") {
                canvas.style.transform = "translate(" + (x + (((22/11)*window.innerWidth)/22)) + "px, " + (y - (((18/9)*window.innerHeight)/18)) + "px)";
            }
        }
    }

    // this function computes the centrality of the character
    function compute_is_centered(charI, charJ, newI, newJ) {
        is_centered = 0;
        if ((newI > 4 && newI < 13) || ((newI === 4 || newI === 13) && (charI > 4 && charI < 13))) {
            is_centered = 1;
        }
        else if ((newJ > 5 && newJ < 16) || ((newJ === 5 || newJ === 16) && (charJ > 5 && charJ < 16))) {
            is_centered = 2;
        }
        if (((newI > 4 && newI < 13) || ((newI === 4 || newI === 13) && (charI > 4 && charI < 13))) && ((newJ > 5 && newJ < 16) || ((newJ === 5 || newJ === 16) && (charJ > 5 && charJ < 16)))) {
            is_centered = 3;
        }
        return is_centered;
    }

    // adjust the canvas to match the size of the screen
    var height = window.innerHeight;
    var width = window.innerWidth;

    canvas.style.width = (22/11)*width + "px";
    canvas.style.height = (18/9)*height + "px";

    // draw the background of the canvas
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        for (i = 0; i < 18; i++) {
            for (j = 0; j < 22; j++) {
                drawCanvasImageElem(ctx, i, j, "sky");
            }
        }
    }

    function drawCanvasImageElem(ctx, coordX, coordY, element_name) { // draws an image element on the canvas
        image = new Image();
        image.onload = drawCanvasImage(ctx, image, coordX, coordY);
        image.src = map_elements[element_name];
    }

    // draw the elements on the map
    for (i = 0; i < game.length; i++) {
        for (j = 0; j < game[i].length; j++) {
            if (game[i][j] !== "sky") {
                if(game[i][j] === "castle" || (game[i][j] === "pillar" && i === 7)) {
                    drawCanvasImageElem(ctx, i, j, "cloud");
                }
                if(game[i][j] === "portal_to_earth" || game[i][j] === "broken_portal" || game[i][j] === "stone" || game[i][j] === "gate1" || game[i][j] === "angel2"
                    || game[i][j] === "diamond" || game[i][j] === "me" || game[i][j] === "mushroom" || game[i][j] === "potion" || game[i][j] === "key" || game[i][j] === "ray1"
                    || game[i][j] === "ray2" || game[i][j] === "ray3" || game[i][j] === "ray4" || game[i][j] === "ray5" || game[i][j] === "ray6" || game[i][j] === "ray7" || game[i][j] === "ray8"
                    || game[i][j] === "ray9" || game[i][j] === "ray10" || game[i][j] === "ray11" || game[i][j] === "ray12" || game[i][j] === "ray13" || game[i][j] === "ray14" || game[i][j] === "ray15"
                    || game[i][j] === "ray16" || game[i][j] === "ray17" || (game[i][j] === "pillar" && i !== 7)) {
                    drawCanvasImageElem(ctx, i, j, "ground");
                }
                if (((i === 0 || i === 1) && (j === 3 || j === 4 || j === 5)) || ((i === 2 || i === 3 || i === 4 || i === 5) && (j === 2 || j === 3 || j === 4 || j === 5 || j === 6))) {
                    drawCanvasImageElem(ctx, i, j, "floor");
                }
                drawCanvasImageElem(ctx, i, j, game[i][j]);
            }
        }
    }

    // return the coordinates of a specific element on the map (element_name --> [x_element, y_element])
    // used for unique elements on the map (like characters)
    function getElementCoord(obj) {
        var coord = [];
        for (i = 0; i < 18; i++) {
            for (j = 0; j < 22; j++) {
                if(game[i][j] === obj) {
                    coord.push(i);
                    coord.push(j);
                }
            }
        }
        return coord;
    }
    function getBackgroundCoord(obj) {
        var coord = [];
        for (i = 0; i < 18; i++) {
            for (j = 0; j < 22; j++) {
                if(sky[i][j] === obj) {
                    coord.push(i);
                    coord.push(j);
                }
            }
        }
        return coord;
    }

    // get the coordinates of your character
    var charI = getElementCoord("me")[0];
    var charJ = getElementCoord("me")[1];

    // draw him on the map
    drawCanvasImageElem(ctx, charI, charJ, "me");

    var map = {};
    // we set the keyboard buttons with which we can move the character
    document.body.addEventListener("keydown", function(e) {
        map[e.keyCode] = e.type === 'keydown';
        /*if(map[13]) {
            hideIndication();
            indicationTriggersEvent();
            map = {};
        }*/
        if(map[69]){
            arrowPressed("rightup");
            map = {};
        }
        if(map[81]) {
            arrowPressed("leftup");
            map = {};
        }
        if(map[90]) {
            arrowPressed("leftdown");
            map = {};
        }
        if(map[67]) {
            arrowPressed("rightdown");
            map = {};
        }
        else if(map[37] || map[65]){
            arrowPressed("left");
            map = {};
        }
        else if(map[39] || map[68]){
            arrowPressed("right");
            map = {};
        }
        else if(map[38] || map[87]){
            arrowPressed("up");
            map = {};
        }
        else if(map[40] || map[83]){
            arrowPressed("down");
            map = {};
        }
        e.preventDefault();
        return false;
    });

    // we make specific map elements move on a map section through the specified functions
    setInterval(function(){ moveCloudInLine("cloud1", "line", 3, 5); }, 500);
    setInterval(function(){ moveCloudInLine("cloud2", "line", 6, 4); }, 400);
    setInterval(function(){ moveCloudInLine("cloud3", "line", 1, 3); }, 400);
    setInterval(function(){ moveCloudInLine("cloud4", "column", 12, 14); }, 300);
    setInterval(function(){ moveCloudInLine("cloud5", "column", 10, 4); }, 200);
    setInterval(function(){ moveCloudInLine("cloud6", "line", 3, 5); }, 300);
    setInterval(function(){ moveCloudInLine("cloud7", "line", 5, 7); }, 200);
    setInterval(function(){ moveCloudInLine("cloud8", "column", 13, 10); }, 400);
    setInterval(function(){ var listOfPos = [[13, 10], [12, 10], [11, 10], [11, 11], [11, 12]]; moveCloudDiagonally("cloud9", listOfPos); }, 500);
    setInterval(function(){ moveCloudInLine("cloud10", "line", 14, 17); }, 300);
    setInterval(function(){ moveCloudInLine("cloud11", "column", 11, 14); }, 400);
    setInterval(function(){ moveCloudInLine("cloud12", "line", 18, 21); }, 600);
    setInterval(function(){ moveCloudInLine("cloud13", "column", 10, 7); }, 500);
    setInterval(function(){ moveCloudInLine("cloud14", "column", 9, 6); }, 150);
    setInterval(function(){ moveCloudInLine("cloud15", "column", 9, 0); }, 300);
    setInterval(function(){ moveCloudInLine("cloud16", "line", 20, 8); }, 50);
    setInterval(function(){ var listOfPos = [[8, 14], [8, 15], [7, 15]]; moveCloudDiagonally("cloud17", listOfPos); }, 500);
    setInterval(function(){ moveCloudInLine("cloud18", "line", 11, 10); }, 100);
    setInterval(function(){ shineRay("ray1"); }, 1000);
    setInterval(function(){ shineRay("ray2"); }, 1000);
    setInterval(function(){ shineRay("ray3"); }, 1000);
    setInterval(function(){ shineRay("ray4"); }, 2000);
    setInterval(function(){ shineRay("ray5"); }, 2000);
    setInterval(function(){ shineRay("ray6"); }, 2000);
    setInterval(function(){ shineRay("ray8"); }, 2000);
    setInterval(function(){ shineRay("ray9"); }, 2000);
    setInterval(function(){ shineRay("ray10"); }, 2000);
    setInterval(function(){ shineRay("ray11"); }, 2000);
    setInterval(function(){ shineRay("ray12"); }, 2000);
    setInterval(function(){ shineRay("ray13"); }, 1000);
    setInterval(function(){ shineRay("ray14"); }, 2000);
    setInterval(function(){ shineRay("ray15"); }, 500);
    setInterval(function(){ shineRay("ray16"); }, 500);
    setInterval(function(){ shineRay("ray17"); }, 5000);

    // the function which keeps the game alive depending on the keyboard button pressed which represents a direction
    function arrowPressed(direction) {
        var charI = getElementCoord("me")[0]; // our character's line index
        var charJ = getElementCoord("me")[1]; // our character's column index

        var newI; // the line index of the position on which the character intends to step
        var newJ; // the column index of the position on which the character intends to step
        var newI2; // the line index of the position two steps ahead of the character (only for up, down, left, right)
        var newJ2; // the column index of the position two steps ahead of the character (only for up, down, left, right)
        // computing newI, newJ, newI2, newJ2 according to the direction
        if (direction === "left") {
            newI = charI;
            newJ = charJ - 1;
            newI2 = charI;
            newJ2 = charJ - 2;
        }
        else if (direction === "right") {
            newI = charI;
            newJ = charJ + 1;
            newI2 = charI;
            newJ2 = charJ + 2;
        }
        else if (direction === "up") {
            newI = charI - 1;
            newJ = charJ;
            newI2 = charI - 2;
            newJ2 = charJ;
        }
        else if (direction === "down") {
            newI = charI + 1;
            newJ = charJ;
            newI2 = charI + 2;
            newJ2 = charJ;
        }
        else if (direction === "leftup") {
            newI = charI - 1;
            newJ = charJ - 1;
        }
        else if (direction === "rightup") {
            newI = charI - 1;
            newJ = charJ + 1;
        }
        else if (direction === "leftdown") {
            newI = charI + 1;
            newJ = charJ - 1;
        }
        else if (direction === "rightdown") {
            newI = charI + 1;
            newJ = charJ + 1;
        }

        if(newI < 0 || newI > 17 || newJ < 0 || newJ > 21) {
            // nothing happens because you can't get out of the map
        }
        else {
            if(document.getElementsByClassName("indication_div_container")[0].style.visibility === 'visible' || document.getElementsByClassName("question_div_container")[0].style.visibility === 'visible'){
                document.onkeydown = function () {
                    return false;
                }
            }
            else {
                if (checkMove(newI, newJ) === true) { // the character can step on that element
                    if (game[newI][newJ] === "diamond") { // the element is diamond
                        if (newI === 17) { // the element is the sun's diamond
                            has_suns_diamond = 1;
                        }
                        diamonds++; // increase the number of diamonds
                        document.getElementsByClassName("gems-score")[0].innerHTML = String(diamonds);

                        // draw ground on the diamond's position
                        drawCanvasImageElem(ctx, newI, newJ, sky[newI][newJ]);

                        // draw my character on the new position
                        drawCanvasImageElem(ctx, newI, newJ, "me");

                        // update the matrices
                        game[newI][newJ] = sky[newI][newJ];
                        game[charI][charJ] = sky[charI][charJ];
                        game[newI][newJ] = "me";

                        // draw ground on my characters last position
                        if (newI === 0 || newI === 3) {
                            drawCanvasImageElem(ctx, charI, charJ, "sky");
                            drawCanvasImageElem(ctx, charI, charJ, "cloud");
                        }
                        else {
                            drawCanvasImageElem(ctx, charI, charJ, sky[charI][charJ]);
                        }

                        //console.log("Nr. of diamonds: ", diamonds);

                        if (sky[charI][charJ].match(/cloud[1-9]*[0-8]*/) !== null && game[charI][charJ] === "me") {
                            is_centered = compute_is_centered(charI, charJ, newI, newJ);
                            translate_canvas(is_centered, direction);
                        }
                    }
                    else if (game[newI][newJ] === "mushroom" && has_mushroom === 0) {
                        has_mushroom = 1;
                        drawCanvasImageElem(ctx, newI, newJ, "ground");
                        drawCanvasImageElem(ctx, newI, newJ, "me");
                        drawCanvasImageElem(ctx, charI, charJ, "sky");
                        drawCanvasImageElem(ctx, charI, charJ, "cloud");

                        game[newI][newJ] = "me";
                        game[charI][charJ] = sky[charI][charJ];

                        if (sky[charI][charJ].match(/cloud[1-9]*[0-8]*/) !== null && game[charI][charJ] === "me") {
                            is_centered = compute_is_centered(charI, charJ, newI, newJ);
                            translate_canvas(is_centered, direction);
                        }

                        showIndication("You found a magical mushroom!");
                    }
                    else if (game[newI][newJ].match(/ray[1-9]*[0-7]*/) !== null) {
                        // the ray push my character at certain positions
                        if (game[newI][newJ] === "ray1" || game[newI][newJ] === "ray2" || game[newI][newJ] === "ray3") {
                            drawCanvasImageElem(ctx, charI, charJ, "ground");
                            drawCanvasImageElem(ctx, charI, charJ, "ground");

                            game[charI][charJ] = "ground";

                            game[17][6] = "me";
                            image.onload = drawCanvasImageElem(ctx, 17, 6, "me");

                            is_centered = 2;
                            canvas.style.transform = "translate(" + -(((22 / 11) * window.innerWidth) / 22) + "px, " + -(((18 / 9) * window.innerHeight) / 18 * 9) + "px)";
                        }
                        else if (game[newI][newJ] === "ray4" || game[newI][newJ] === "ray5" || game[newI][newJ] === "ray6" || game[newI][newJ] === "ray7" || game[newI][newJ] === "ray8" || game[newI][newJ] === "ray9" || game[newI][newJ] === "ray10" || game[newI][newJ] === "ray11") {
                            if (charI === 13 && charJ === 13) {
                                drawCanvasImageElem(ctx, charI, charJ, "sky");
                                drawCanvasImageElem(ctx, charI, charJ, "cloud");
                                game[getElementCoord("me")[0]][getElementCoord("me")[1]] = "cloud8";
                            }
                            else {
                                drawCanvasImageElem(ctx, charI, charJ, "ground");
                                drawCanvasImageElem(ctx, charI, charJ, "ground");

                                game[charI][charJ] = "ground";
                            }

                            game[17][12] = "me";
                            image.onload = drawCanvasImageElem(ctx, 17, 12, "me");

                            is_centered = 2;
                            canvas.style.transform = "translate(" + -(((22 / 11) * window.innerWidth) / 22 * 7) + "px, " + -(((18 / 9) * window.innerHeight) / 18 * 9) + "px)";
                        }
                        else {
                            if (charI === 14 && charJ === 18) {
                                drawCanvasImageElem(ctx, charI, charJ, "sky");
                                drawCanvasImageElem(ctx, charI, charJ, "cloud");
                                game[getElementCoord("me")[0]][getElementCoord("me")[1]] = "cloud11";
                            }
                            else {
                                drawCanvasImageElem(ctx, charI, charJ, "ground");
                                drawCanvasImageElem(ctx, charI, charJ, "ground");

                                game[charI][charJ] = "ground";
                            }

                            game[15][17] = "me";
                            image.onload = drawCanvasImageElem(ctx, 15, 17, "me");

                            if (has_suns_diamond === 1) {
                                has_suns_diamond = 0;
                                diamonds--;
                                document.getElementsByClassName("gems-score")[0].innerHTML = String(diamonds);

                                drawCanvasImageElem(ctx, 17, 17, "diamond");
                                game[17][17] = "diamond";
                            }

                            if (has_dragons_breath_potion === 1) {
                                has_dragons_breath_potion = 0;

                                drawCanvasImageElem(ctx, 17, 21, "potion");
                                game[17][21] = "potion";
                            }

                            is_centered = 2;
                            canvas.style.transform = "translate(" + -(((22 / 11) * window.innerWidth) / 22 * 11) + "px, " + -(((18 / 9) * window.innerHeight) / 18 * 9) + "px)";
                        }
                    }
                    else if (sky[charI][charJ].match(/cloud[1-9]*[0-8]*/) !== null && game[charI][charJ] === "me") {
                        //console.log(sky[charI][charJ].match(/cloud[1-9]*[0-8]*/));
                        drawCanvasImageElem(ctx, charI, charJ, "sky");
                        drawCanvasImageElem(ctx, charI, charJ, "cloud");

                        game[charI][charJ] = "cloud";
                        game[newI][newJ] = "me";

                        //is_centered = compute_is_centered(charI, charJ, newI, newJ)
                        //translate_canvas(is_centered, direction);
                    }
                    if (sky[charI][charJ] === "castle" && game[charI][charJ] === "me") {
                        drawCanvasImageElem(ctx, charI, charJ, "sky");
                        drawCanvasImageElem(ctx, charI, charJ, "castle");
                        drawCanvasImageElem(ctx, newI, newJ, "me");

                        game[charI][charJ] = "castle";
                        game[newI][newJ] = "me";

                        is_centered = compute_is_centered(charI, charJ, newI, newJ);
                        translate_canvas(is_centered, direction);
                    }
                    else if (game[newI][newJ].match(/ray[1-9]*[0-7]*/) !== null) {
                        // the ray push my character at certain positions
                        if (game[newI][newJ] === "ray1" || game[newI][newJ] === "ray2" || game[newI][newJ] === "ray3") {
                            drawCanvasImageElem(ctx, charI, charJ, "ground");
                            drawCanvasImageElem(ctx, charI, charJ, "ground");

                            game[charI][charJ] = "ground";

                            game[17][6] = "me";
                            image.onload = drawCanvasImageElem(ctx, 17, 6, "me");

                            is_centered = 2;
                            canvas.style.transform = "translate(" + -(((22 / 11) * window.innerWidth) / 22) + "px, " + -(((18 / 9) * window.innerHeight) / 18 * 9) + "px)";
                        }
                        else if (game[newI][newJ] === "ray4" || game[newI][newJ] === "ray5" || game[newI][newJ] === "ray6" || game[newI][newJ] === "ray7" || game[newI][newJ] === "ray8" || game[newI][newJ] === "ray9" || game[newI][newJ] === "ray10" || game[newI][newJ] === "ray11") {
                            if (charI === 13 && charJ === 13) {
                                drawCanvasImageElem(ctx, charI, charJ, "sky");
                                drawCanvasImageElem(ctx, charI, charJ, "cloud");
                            }
                            else {
                                drawCanvasImageElem(ctx, charI, charJ, "ground");
                                drawCanvasImageElem(ctx, charI, charJ, "ground");

                                game[charI][charJ] = "ground";
                            }

                            game[17][12] = "me";
                            image.onload = drawCanvasImageElem(ctx, 17, 12, "me");

                            is_centered = 2;
                            canvas.style.transform = "translate(" + -(((22 / 11) * window.innerWidth) / 22 * 7) + "px, " + -(((18 / 9) * window.innerHeight) / 18 * 9) + "px)";
                        }
                        else {
                            if (charI === 14 && charJ === 18) {
                                drawCanvasImageElem(ctx, charI, charJ, "sky");
                                drawCanvasImageElem(ctx, charI, charJ, "cloud");
                            }
                            else {
                                drawCanvasImageElem(ctx, charI, charJ, "ground");
                                drawCanvasImageElem(ctx, charI, charJ, "ground");

                                game[charI][charJ] = "ground";
                            }

                            game[15][17] = "me";
                            image.onload = drawCanvasImageElem(ctx, 15, 17, "me");

                            if (has_suns_diamond === 1) {
                                has_suns_diamond = 0;
                                diamonds--;
                                document.getElementsByClassName("gems-score")[0].innerHTML = String(diamonds);

                                drawCanvasImageElem(ctx, 17, 17, "diamond");
                                game[17][17] = "diamond";
                            }

                            if (has_dragons_breath_potion === 1) {
                                has_dragons_breath_potion = 0;

                                drawCanvasImageElem(ctx, 17, 21, "potion");
                                game[17][21] = "potion";
                            }

                            is_centered = 2;
                            canvas.style.transform = "translate(" + -(((22 / 11) * window.innerWidth) / 22 * 11) + "px, " + -(((18 / 9) * window.innerHeight) / 18 * 9) + "px)";
                        }
                    }
                    else if ((sky[charI][charJ] === "gate2" || sky[charI][charJ] === "gate3") && game[charI][charJ] === "me") {
                        drawCanvasImageElem(ctx, charI, charJ, "floor");
                        if (sky[charI][charJ] === "gate2") {
                            drawCanvasImageElem(ctx, charI, charJ, "gate2");
                        }
                        else if (sky[charI][charJ] === "gate3") {
                            drawCanvasImageElem(ctx, charI, charJ, "gate3");
                        }
                        drawCanvasImageElem(ctx, newI, newJ, "me");

                        if (sky[charI][charJ] === "gate2") {
                            game[charI][charJ] = "gate2";
                        }
                        else if (sky[charI][charJ] === "gate3") {
                            game[charI][charJ] = "gate3";
                        }
                        game[newI][newJ] = "me";

                        if (sky[charI][charJ] === "gate2" && has_king_asked === 0) {
                            showIndication("The king was in an audience. But as soon as the king saw Bidi, he urged him to come forward immediately.")
                        }

                        is_centered = compute_is_centered(charI, charJ, newI, newJ);
                        translate_canvas(is_centered, direction);
                    }
                    else if (sky[charI][charJ] === "broken_portal" && game[charI][charJ] === "me") {
                        drawCanvasImageElem(ctx, charI, charJ, "ground");
                        drawCanvasImageElem(ctx, charI, charJ, "broken_portal");
                        drawCanvasImageElem(ctx, newI, newJ, "me");

                        game[charI][charJ] = "broken_portal";
                        game[newI][newJ] = "me";

                        is_centered = compute_is_centered(charI, charJ, newI, newJ);
                        translate_canvas(is_centered, direction);
                    }
                    else if (game[newI][newJ] === "gate1" && has_key === 0) { // you don't have a key.. you'll receive a message that you must first find a key for the gate
                        showIndication("The gate is closed. <br> You need a key to open it.");
                    }
                    else if ((game[newI][newJ] === "gate1" && has_key === 1) || sky[charI][charJ] === "gate1") { // now you can pass that gate
                        drawCanvasImageElem(ctx, newI, newJ, "me");

                        game[charI][charJ] = sky[charI][charJ];
                        game[newI][newJ] = "me";

                        if (sky[charI][charJ] === "gate1") { // we draw ground first so that the gate won't overlap my character
                            drawCanvasImageElem(ctx, charI, charJ, "ground");
                        }

                        drawCanvasImageElem(ctx, charI, charJ, sky[charI][charJ]);

                        is_centered = compute_is_centered(charI, charJ, newI, newJ);
                        translate_canvas(is_centered, direction);
                    }
                    else if (game[newI][newJ] === "potion" && has_dragons_breath_potion === 0) {
                        has_dragons_breath_potion = 1;
                        drawCanvasImageElem(ctx, newI, newJ, "ground");
                        drawCanvasImageElem(ctx, newI, newJ, "me");
                        drawCanvasImageElem(ctx, charI, charJ, "ground");

                        game[newI][newJ] = "me";
                        game[charI][charJ] = sky[charI][charJ];

                        is_centered = compute_is_centered(charI, charJ, newI, newJ);
                        translate_canvas(is_centered, direction);

                        showIndication("You found dragon's breath potion!");
                    }
                    else if (game[newI][newJ] === "key" && has_key === 0) {
                        has_key = 1;
                        drawCanvasImageElem(ctx, newI, newJ, "ground");
                        drawCanvasImageElem(ctx, newI, newJ, "me");
                        drawCanvasImageElem(ctx, charI, charJ, "ground");

                        game[newI][newJ] = "me";
                        game[charI][charJ] = sky[charI][charJ];

                        is_centered = compute_is_centered(charI, charJ, newI, newJ);
                        translate_canvas(is_centered, direction);
                    }
                    else if (game[newI][newJ] === "portal_to_earth" && newI === 1) {
                        drawCanvasImageElem(ctx, image, 1, 0, "me");

                        game[1][0] = "me";

                        drawCanvasImageElem(ctx, charI, charJ, "ground");

                        var gem;
                        var star;
                        firebase.database().ref().once('value').then((snapshot) => {
                            var data = snapshot.val();
                            var id = getParameterByName('id');
                            var found = 0;

                            gem = data.users[id].gems;
                            star = data.users[id].stars;

                            var id = getParameterByName('id');
                            var user = getParameterByName('user');
                            points=points+star;
                            diamonds=diamonds+gem;
                            writeUserData(parseInt(id), 2, points, diamonds);
                        });

                        showIndication("Chapter Completed! <br><br> Bidi has reached the vulcano site!"); // we reached the end of the level

                        // redirecting to the levels page
                        // window.location.replace("levels.html");

                        is_centered = compute_is_centered(charI, charJ, newI, newJ);
                        translate_canvas(is_centered, direction);
                    }
                    else if (game[newI][newJ] === "angel2" && has_guardian_angel_asked === 0) {
                        showIndication("Hello! My name is Helena and I'm the guardian of the key. <br> You have to prove you're worthy of it by answering this HTTP question!");
                    }
                    else if (game[newI][newJ] === "sick_sun" && (has_mushroom === 0 || has_dragons_breath_potion === 0 || has_pegasus_feather === 0)) {
                        showIndication("(coughting) Come back when you have all the ingredients.");
                    }
                    else if (game[newI][newJ] === "sick_sun" && has_mushroom === 1 && has_dragons_breath_potion === 1 && has_pegasus_feather === 1 && has_sun_asked === 0) {
                        showIndication("I'm shining agaaaiiin!!! <br> Until the portal is ready, let's play my favourite game. <br> I ask you a question and you have to pick up a wrong answer!");

                        drawCanvasImageElem(ctx, 6, 10, "sky");
                        drawCanvasImageElem(ctx, 6, 10, "healed_sun");

                        game[6][10] = "healed_sun";
                    }
                    else if (((newI === 9 && newJ === 12) || (newI === 9 && newJ === 13) || (newI === 8 && newJ === 13) || (newI === 7 && newJ === 13)
                            || (newI === 7 && newJ === 12) || (newI === 9 && newJ === 11) || (newI === 8 && newJ === 11)
                            || (newI === 7 && newJ === 11)) && has_sun_told_you_of_his_disease === 0) {
                        has_sun_told_you_of_his_disease = 1;
                        showIndication("Son, I'am one of your suns. (coughting) <br> I have a rare disease. (coughting) Please help me get my health back by bringing me a mushroom, a pegasus feather and a potion with dragon's breath. <br> Healthy, I can repair that portal and get you to the king. Return to me when you have the ingredients. (coughting) <br> You'll find me by the shadow of the pillars over there.");

                        drawCanvasImageElem(ctx, 8, 12, "sky");
                        drawCanvasImageElem(ctx, 6, 10, "sick_sun");

                        game[8][12] = "sky";
                        game[6][10] = "sick_sun";

                        drawCanvasImageElem(ctx, newI, newJ, "me");
                        game[newI][newJ] = "me";

                        is_centered = compute_is_centered(charI, charJ, newI, newJ);
                        translate_canvas(is_centered, direction);
                    }
                    else if (game[newI][newJ] === "portal" && (direction === "left" || direction === "leftdown" || direction === "leftup")) {
                        drawCanvasImageElem(ctx, charI, charJ, "ground");
                        drawCanvasImageElem(ctx, 8, 5, "me");

                        game[charI][charJ] = "ground";
                        game[8][5] = "me";

                        is_centered = 3;
                        canvas.style.transform = "translate(" + 0 + "px, " + -(((18 / 9) * window.innerHeight) / 18 * 4) + "px)";
                    }
                    else if (game[newI][newJ] === "portal" && direction === "right") {
                        drawCanvasImageElem(ctx, charI, charJ, "ground");
                        drawCanvasImageElem(ctx, 8, 11, "me");

                        game[charI][charJ] = "ground";
                        game[8][11] = "me";

                        is_centered = 3;
                        canvas.style.transform = "translate(" + -(((22 / 11) * window.innerWidth) / 22 * 6) + "px, " + -(((18 / 9) * window.innerHeight) / 18 * 4) + "px)";
                    }
                    else if (game[newI][newJ] === "pegasus" && has_pegasus_asked === 0) {
                        showIndication("So you want one of my precious feathers to heal a sun. <br> Hmm.. let me think. <br> Very well, but you have to answer me a question and scratch my back!");
                    }
                    else if (game[newI][newJ] === "pegasus" && has_pegasus_asked === 1) {
                        showIndication("Ihahaaaa!!!");
                    }
                    else if (((newI === 8 && newJ === 4) || (newI === 7 && newJ === 4)) && has_pixie_asked === 0) {
                        drawCanvasImageElem(ctx, newI, newJ, "me");
                        drawCanvasImageElem(ctx, charI, charJ, sky[charI][charJ]);

                        game[charI][charJ] = sky[charI][charJ];
                        game[newI][newJ] = "me";

                        showIndication("Good morning! The king awaits you in the throne room. <br> The queen is not here in heaven. She had some urgent business in The Desert of Kahim. <br> But, knowing of your coming, she told me to ask you this question.");

                        is_centered = compute_is_centered(charI, charJ, newI, newJ);
                        translate_canvas(is_centered, direction);
                    }
                    else if (newI === 2 && newJ === 4 && has_king_asked === 0) {
                        drawCanvasImageElem(ctx, newI, newJ, "me");
                        drawCanvasImageElem(ctx, charI, charJ, sky[charI][charJ]);

                        game[charI][charJ] = sky[charI][charJ];
                        game[newI][newJ] = "me";

                        showIndication("Good day to you, adventurer Bidi. <br> I was informed of all your acts of bravery and of knowledge of the HTTP protocol. So I have a quest for you. <br> You'll be tested with harder notions of the protocol soon. Let's see if you are truly worthy of the praise.");

                        is_centered = compute_is_centered(charI, charJ, newI, newJ);
                        translate_canvas(is_centered, direction);
                    }
                    else { // in front of us is ground or cloud or broken portal or ...
                        drawCanvasImageElem(ctx, newI, newJ, "me");
                        drawCanvasImageElem(ctx, charI, charJ, sky[charI][charJ]);

                        game[charI][charJ] = sky[charI][charJ];
                        game[newI][newJ] = "me";

                        is_centered = compute_is_centered(charI, charJ, newI, newJ);
                        translate_canvas(is_centered, direction);
                    }
                }
                else { // the character can't step on that element
                    if (game[newI][newJ] === "stone" && (direction === "up" || direction === "down" || direction === "left" || direction === "right") && game[newI2][newJ2] === "sky") {
                        // the stone is in front of the sky so it can pe pushed to create a new path
                        drawCanvasImageElem(ctx, newI, newJ, "ground");

                        drawCanvasImageElem(ctx, newI2, newJ2, "ground");

                        game[newI][newJ] = "ground";
                        game[newI2][newJ2] = "ground";
                        sky[newI2][newJ2] = "ground";
                    }
                    else if (game[newI][newJ] === "stone" && (direction === "up" || direction === "down" || direction === "left" || direction === "right") && game[newI2][newJ2] === "ground" && newI === 2 && newJ === 14) {
                        drawCanvasImageElem(ctx, newI, newJ, "sky");
                        drawCanvasImageElem(ctx, 1, 14, "sky");

                        drawCanvasImageElem(ctx, newI2, newJ2, "stone");

                        game[newI][newJ] = "sky";
                        game[1][14] = "sky";
                        game[newI2][newJ2] = "stone";

                        showIndication("When you moved that stone the wall collapsed and it destroyed the ground.");
                    }
                    else if (game[newI][newJ] === "stone" && (direction === "up" || direction === "down" || direction === "left" || direction === "right") && game[newI2][newJ2] === "ground") {
                        drawCanvasImageElem(ctx, newI, newJ, "ground");

                        drawCanvasImageElem(ctx, newI2, newJ2, "stone");

                        game[newI][newJ] = "ground";
                        game[newI2][newJ2] = "stone";
                    }
                    else { // nothing happens because you can't jump over obstacles
                        //alert("You can't jump over obstacles!");
                    }
                }
            }
        }
    }

    // the function that verifies on which map elements our character can step
    function checkMove(newI, newJ) { // newI, newJ - the position on which the character intends to step
        return (game[newI][newJ] === "ground")
            || (game[newI][newJ] === "diamond")
            || (game[newI][newJ] === "angel2")
            || (game[newI][newJ] === "floor")
            || (game[newI][newJ] === "broken_portal")
            || (game[newI][newJ] === "portal")
            || (game[newI][newJ] === "portal_to_earth" && newI === 1)
            || (game[newI][newJ] === "mushroom")
            || (game[newI][newJ] === "potion")
            || (game[newI][newJ] === "sick_sun")
            || (game[newI][newJ] === "key")
            || (game[newI][newJ] === "pegasus")
            || (game[newI][newJ] === "castle")
            || (game[newI][newJ] === "gate1")
            || (game[newI][newJ] === "gate2")
            || (game[newI][newJ] === "gate3")
            || (game[newI][newJ] === "ray1")
            || (game[newI][newJ] === "ray2")
            || (game[newI][newJ] === "ray3")
            || (game[newI][newJ] === "ray4")
            || (game[newI][newJ] === "ray5")
            || (game[newI][newJ] === "ray6")
            || (game[newI][newJ] === "ray7")
            || (game[newI][newJ] === "ray8")
            || (game[newI][newJ] === "ray9")
            || (game[newI][newJ] === "ray10")
            || (game[newI][newJ] === "ray11")
            || (game[newI][newJ] === "ray12")
            || (game[newI][newJ] === "ray13")
            || (game[newI][newJ] === "ray14")
            || (game[newI][newJ] === "ray15")
            || (game[newI][newJ] === "ray16")
            || (game[newI][newJ] === "ray17")
            || (game[newI][newJ] === "cloud")
            || (game[newI][newJ] === "cloud1")
            || (game[newI][newJ] === "cloud2")
            || (game[newI][newJ] === "cloud3")
            || (game[newI][newJ] === "cloud4")
            || (game[newI][newJ] === "cloud5")
            || (game[newI][newJ] === "cloud6")
            || (game[newI][newJ] === "cloud7")
            || (game[newI][newJ] === "cloud8")
            || (game[newI][newJ] === "cloud9")
            || (game[newI][newJ] === "cloud10")
            || (game[newI][newJ] === "cloud11")
            || (game[newI][newJ] === "cloud12")
            || (game[newI][newJ] === "cloud13")
            || (game[newI][newJ] === "cloud14")
            || (game[newI][newJ] === "cloud15")
            || (game[newI][newJ] === "cloud16")
            || (game[newI][newJ] === "cloud17")
            || (game[newI][newJ] === "cloud18");
    }

    function moveCloudInLine(cloud, direction, initPos, finalPos) {
        var cloudI = getBackgroundCoord(cloud)[0];
        var cloudJ = getBackgroundCoord(cloud)[1];
        var cloud_way;
        var initJ, finalJ, initI, finalI;
        switch(cloud) {
            case "cloud1":
                cloud_way = cloud1_way;
                break;
            case "cloud2":
                cloud_way = cloud2_way;
                break;
            case "cloud3":
                cloud_way = cloud3_way;
                break;
            case "cloud4":
                cloud_way = cloud4_way;
                break;
            case "cloud5":
                cloud_way = cloud5_way;
                break;
            case "cloud6":
                cloud_way = cloud6_way;
                break;
            case "cloud7":
                cloud_way = cloud7_way;
                break;
            case "cloud8":
                cloud_way = cloud8_way;
                break;
            case "cloud10":
                cloud_way = cloud10_way;
                break;
            case "cloud11":
                cloud_way = cloud11_way;
                break;
            case "cloud12":
                cloud_way = cloud12_way;
                break;
            case "cloud13":
                cloud_way = cloud13_way;
                break;
            case "cloud14":
                cloud_way = cloud14_way;
                break;
            case "cloud15":
                cloud_way = cloud15_way;
                break;
            case "cloud16":
                cloud_way = cloud16_way;
                break;
            case "cloud18":
                cloud_way = cloud18_way;
                break;
            default:
                break;
        }
        if (direction === "line") {
            if (cloud_way === "forward") {
                initJ = (initPos < finalPos) ? initPos : finalPos;
                finalJ = (initPos < finalPos) ? finalPos : initPos;
                for (j = initJ; j < finalJ; j++) {
                    if (j === finalJ - 1) {
                        if (cloudJ === j) {
                            drawCanvasImageElem(ctx, cloudI, cloudJ, "sky");
                            drawCanvasImageElem(ctx, cloudI, j + 1, "cloud");
                            sky[cloudI][cloudJ] = "sky";
                            sky[cloudI][j + 1] = cloud;

                            if (game[cloudI][cloudJ] === "me") {
                                drawCanvasImageElem(ctx, cloudI, j + 1, "me");
                                game[cloudI][cloudJ] = "sky";
                                game[cloudI][j + 1] = "me";

                                is_centered = compute_is_centered(cloudI, cloudJ, cloudI, j + 1);
                                translate_canvas(is_centered, "right");
                            }
                            else {
                                game[cloudI][cloudJ] = "sky";
                                game[cloudI][j + 1] = cloud;
                            }

                            switch (cloud) {
                                case "cloud1":
                                    cloud1_way = (cloud1_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud2":
                                    cloud2_way = (cloud2_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud3":
                                    cloud3_way = (cloud3_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud4":
                                    cloud4_way = (cloud4_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud5":
                                    cloud5_way = (cloud5_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud6":
                                    cloud6_way = (cloud6_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud7":
                                    cloud7_way = (cloud7_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud8":
                                    cloud8_way = (cloud8_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud10":
                                    cloud10_way = (cloud10_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud11":
                                    cloud11_way = (cloud11_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud12":
                                    cloud12_way = (cloud12_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud13":
                                    cloud13_way = (cloud13_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud14":
                                    cloud14_way = (cloud14_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud15":
                                    cloud15_way = (cloud15_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud16":
                                    cloud16_way = (cloud16_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud18":
                                    cloud18_way = (cloud18_way === "forward") ? "backward" : "forward";
                                    break;
                                default:
                                    break;
                            }
                        }
                    }
                    else if (cloudJ === j) {
                        drawCanvasImageElem(ctx, cloudI, cloudJ, "sky");
                        drawCanvasImageElem(ctx, cloudI, j + 1, "cloud");
                        sky[cloudI][cloudJ] = "sky";
                        sky[cloudI][j + 1] = cloud;

                        if (game[cloudI][cloudJ] === "me") {
                            drawCanvasImageElem(ctx, cloudI, j + 1, "me");
                            game[cloudI][cloudJ] = "sky";
                            game[cloudI][j + 1] = "me";

                            is_centered = compute_is_centered(cloudI, cloudJ, cloudI, j + 1);
                            translate_canvas(is_centered, "right");
                        }
                        else {
                            game[cloudI][cloudJ] = "sky";
                            game[cloudI][j + 1] = cloud;
                        }

                    }
                }
            }
            if (cloud_way === "backward") {
                initJ = (initPos < finalPos) ? finalPos : initPos;
                finalJ = (initPos < finalPos) ? initPos : finalPos;
                for (j = initJ; j > finalJ; j--) {
                    if (j === finalJ + 1) {
                        if(cloudJ === j) {
                            drawCanvasImageElem(ctx, cloudI, cloudJ, "sky");
                            drawCanvasImageElem(ctx, cloudI, j - 1, "cloud");
                            sky[cloudI][cloudJ] = "sky";
                            sky[cloudI][j - 1] = cloud;

                            if (game[cloudI][cloudJ] === "me") {
                                drawCanvasImageElem(ctx, cloudI, j - 1, "me");
                                game[cloudI][cloudJ] = "sky";
                                game[cloudI][j - 1] = "me";

                                is_centered = compute_is_centered(cloudI, cloudJ, cloudI, j - 1);
                                translate_canvas(is_centered, "left");
                            }
                            else {
                                game[cloudI][cloudJ] = "sky";
                                game[cloudI][j - 1] = cloud;
                            }

                            switch (cloud) {
                                case "cloud1":
                                    cloud1_way = (cloud1_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud2":
                                    cloud2_way = (cloud2_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud3":
                                    cloud3_way = (cloud3_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud4":
                                    cloud4_way = (cloud4_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud5":
                                    cloud5_way = (cloud5_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud6":
                                    cloud6_way = (cloud6_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud7":
                                    cloud7_way = (cloud7_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud8":
                                    cloud8_way = (cloud8_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud10":
                                    cloud10_way = (cloud10_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud11":
                                    cloud11_way = (cloud11_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud12":
                                    cloud12_way = (cloud12_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud13":
                                    cloud13_way = (cloud13_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud14":
                                    cloud14_way = (cloud14_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud15":
                                    cloud15_way = (cloud15_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud16":
                                    cloud16_way = (cloud16_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud18":
                                    cloud18_way = (cloud18_way === "forward") ? "backward" : "forward";
                                    break;
                                default:
                                    break;
                            }
                        }
                    }
                    else if (cloudJ === j) {
                        drawCanvasImageElem(ctx, cloudI, cloudJ, "sky");
                        drawCanvasImageElem(ctx, cloudI, j - 1, "cloud");
                        sky[cloudI][cloudJ] = "sky";
                        sky[cloudI][j - 1] = cloud;

                        if (game[cloudI][cloudJ] === "me") {
                            drawCanvasImageElem(ctx, cloudI, j - 1, "me");
                            game[cloudI][cloudJ] = "sky";
                            game[cloudI][j - 1] = "me";

                            is_centered = compute_is_centered(cloudI, cloudJ, cloudI, j - 1);
                            translate_canvas(is_centered, "left");
                        }
                        else {
                            game[cloudI][cloudJ] = "sky";
                            game[cloudI][j - 1] = cloud;
                        }

                    }

                }
            }
        }
        if (direction === "column") {
            if (cloud_way === "forward") {
                initI = (initPos < finalPos) ? initPos : finalPos;
                finalI = (initPos < finalPos) ? finalPos : initPos;
                for (i = initI; i < finalI; i++) {
                    if (i === finalI - 1) {
                        if (cloudI === i) {
                            drawCanvasImageElem(ctx, cloudI, cloudJ, "sky");
                            drawCanvasImageElem(ctx, i + 1, cloudJ, "cloud");
                            sky[cloudI][cloudJ] = "sky";
                            sky[i + 1][cloudJ] = cloud;

                            if (game[cloudI][cloudJ] === "me") {
                                drawCanvasImageElem(ctx, i + 1, cloudJ, "me");
                                game[cloudI][cloudJ] = "sky";
                                game[i + 1][cloudJ] = "me";

                                is_centered = compute_is_centered(cloudI, cloudJ, i + 1, cloudJ);
                                translate_canvas(is_centered, "down");
                            }
                            else {
                                game[cloudI][cloudJ] = "sky";
                                game[i + 1][cloudJ] = cloud;
                            }

                            switch (cloud) {
                                case "cloud1":
                                    cloud1_way = (cloud1_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud2":
                                    cloud2_way = (cloud2_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud3":
                                    cloud3_way = (cloud3_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud4":
                                    cloud4_way = (cloud4_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud5":
                                    cloud5_way = (cloud5_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud6":
                                    cloud6_way = (cloud6_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud7":
                                    cloud7_way = (cloud7_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud8":
                                    cloud8_way = (cloud8_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud10":
                                    cloud10_way = (cloud10_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud11":
                                    cloud11_way = (cloud11_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud12":
                                    cloud12_way = (cloud12_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud13":
                                    cloud13_way = (cloud13_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud14":
                                    cloud14_way = (cloud14_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud15":
                                    cloud15_way = (cloud15_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud16":
                                    cloud16_way = (cloud16_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud18":
                                    cloud18_way = (cloud18_way === "forward") ? "backward" : "forward";
                                    break;
                                default:
                                    break;
                            }
                        }
                    }
                    else if (cloudI === i) {
                        drawCanvasImageElem(ctx, cloudI, cloudJ, "sky");
                        drawCanvasImageElem(ctx, i + 1, cloudJ, "cloud");
                        sky[cloudI][cloudJ] = "sky";
                        sky[i + 1][cloudJ] = cloud;

                        if (game[cloudI][cloudJ] === "me") {
                            drawCanvasImageElem(ctx, i + 1, cloudJ, "me");
                            game[cloudI][cloudJ] = "sky";
                            game[i + 1][cloudJ] = "me";

                            is_centered = compute_is_centered(cloudI, cloudJ, i + 1, cloudJ);
                            translate_canvas(is_centered, "down");
                        }
                        else {
                            game[cloudI][cloudJ] = "sky";
                            game[i + 1][cloudJ] = cloud;
                        }
                    }
                }
            }
            if (cloud_way === "backward") {
                initI = (initPos < finalPos) ? finalPos : initPos;
                finalI = (initPos < finalPos) ? initPos : finalPos;
                for (i = initI; i > finalI; i--) {
                    if (i === finalI + 1) {
                        if (cloudI === i) {
                            drawCanvasImageElem(ctx, cloudI, cloudJ, "sky");
                            drawCanvasImageElem(ctx, i - 1, cloudJ, "cloud");
                            sky[cloudI][cloudJ] = "sky";
                            sky[i - 1][cloudJ] = cloud;

                            if (game[cloudI][cloudJ] === "me") {
                                drawCanvasImageElem(ctx, i - 1, cloudJ, "me");
                                game[cloudI][cloudJ] = "sky";
                                game[i - 1][cloudJ] = "me";

                                is_centered = compute_is_centered(cloudI, cloudJ, i - 1, cloudJ);
                                translate_canvas(is_centered, "up");
                            }
                            else {
                                game[cloudI][cloudJ] = "sky";
                                game[i - 1][cloudJ] = cloud;
                            }

                            switch (cloud) {
                                case "cloud1":
                                    cloud1_way = (cloud1_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud2":
                                    cloud2_way = (cloud2_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud3":
                                    cloud3_way = (cloud3_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud4":
                                    cloud4_way = (cloud4_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud5":
                                    cloud5_way = (cloud5_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud6":
                                    cloud6_way = (cloud6_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud7":
                                    cloud7_way = (cloud7_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud8":
                                    cloud8_way = (cloud8_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud10":
                                    cloud10_way = (cloud10_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud11":
                                    cloud11_way = (cloud11_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud12":
                                    cloud12_way = (cloud12_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud13":
                                    cloud13_way = (cloud13_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud14":
                                    cloud14_way = (cloud14_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud15":
                                    cloud15_way = (cloud15_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud16":
                                    cloud16_way = (cloud16_way === "forward") ? "backward" : "forward";
                                    break;
                                case "cloud18":
                                    cloud18_way = (cloud18_way === "forward") ? "backward" : "forward";
                                    break;
                                default:
                                    break;
                            }
                        }
                    }
                    else if (cloudI === i) {
                        drawCanvasImageElem(ctx, cloudI, cloudJ, "sky");
                        drawCanvasImageElem(ctx, i - 1, cloudJ, "cloud");
                        sky[cloudI][cloudJ] = "sky";
                        sky[i - 1][cloudJ] = cloud;

                        if (game[cloudI][cloudJ] === "me") {
                            drawCanvasImageElem(ctx, i - 1, cloudJ, "me");
                            game[cloudI][cloudJ] = "sky";
                            game[i - 1][cloudJ] = "me";

                            is_centered = compute_is_centered(cloudI, cloudJ, i - 1, cloudJ);
                            translate_canvas(is_centered, "up");
                        }
                        else {
                            game[cloudI][cloudJ] = "sky";
                            game[i - 1][cloudJ] = cloud;
                        }
                    }
                }
            }
        }
    }

    function moveCloudDiagonally(cloud, listOfPos) {
        var cloudI = getBackgroundCoord(cloud)[0];
        var cloudJ = getBackgroundCoord(cloud)[1];
        var cloud_way;
        switch(cloud) {
            case "cloud9":
                cloud_way = cloud9_way;
                break;
            case "cloud17":
                cloud_way = cloud17_way;
                break;
            default:
                break;
        }
        if (cloud_way === "forward") {
            for (var i = 0; i < listOfPos.length - 1; i++) {
                if (i === listOfPos.length - 2) {
                    if (cloudI === listOfPos[i][0] && cloudJ === listOfPos[i][1]) {
                        drawCanvasImageElem(ctx, cloudI, cloudJ, "sky");
                        drawCanvasImageElem(ctx, listOfPos[i + 1][0], listOfPos[i + 1][1], "cloud");
                        sky[cloudI][cloudJ] = "sky";
                        sky[listOfPos[i + 1][0]][listOfPos[i + 1][1]] = cloud;

                        if (game[cloudI][cloudJ] === "me") {
                            drawCanvasImageElem(ctx, listOfPos[i + 1][0], listOfPos[i + 1][1], "me");
                            game[cloudI][cloudJ] = "sky";
                            game[listOfPos[i + 1][0]][listOfPos[i + 1][1]] = "me";

                            if (cloud === "cloud9") {
                                if (i < 2) {
                                    is_centered = compute_is_centered(cloudI, cloudJ, listOfPos[i + 1][0], listOfPos[i + 1][1]);
                                    translate_canvas(is_centered, "up");
                                }
                                else {
                                    is_centered = compute_is_centered(cloudI, cloudJ, listOfPos[i + 1][0], listOfPos[i + 1][1]);
                                    translate_canvas(is_centered, "right");
                                }
                            }
                            else if (cloud === "cloud17") {
                                if (i < 1) {
                                    is_centered = compute_is_centered(cloudI, cloudJ, listOfPos[i + 1][0], listOfPos[i + 1][1]);
                                    translate_canvas(is_centered, "right");
                                }
                                else {
                                    is_centered = compute_is_centered(cloudI, cloudJ, listOfPos[i + 1][0], listOfPos[i + 1][1]);
                                    translate_canvas(is_centered, "up");
                                }
                            }
                        }
                        else {
                            game[cloudI][cloudJ] = "sky";
                            game[listOfPos[i + 1][0]][listOfPos[i + 1][1]] = cloud;
                        }

                        switch (cloud) {
                            case "cloud9":
                                cloud9_way = (cloud9_way === "forward") ? "backward" : "forward";
                                break;
                            case "cloud17":
                                cloud17_way = (cloud17_way === "forward") ? "backward" : "forward";
                                break;
                            default:
                                break;
                        }
                    }
                }
                else if (cloudI === listOfPos[i][0] && cloudJ === listOfPos[i][1]) {
                    drawCanvasImageElem(ctx, cloudI, cloudJ, "sky");
                    drawCanvasImageElem(ctx, listOfPos[i + 1][0], listOfPos[i + 1][1], "cloud");
                    sky[cloudI][cloudJ] = "sky";
                    sky[listOfPos[i + 1][0]][listOfPos[i + 1][1]] = cloud;

                    if (game[cloudI][cloudJ] === "me") {
                        drawCanvasImageElem(ctx, listOfPos[i + 1][0], listOfPos[i + 1][1], "me");
                        game[cloudI][cloudJ] = "sky";
                        game[listOfPos[i + 1][0]][listOfPos[i + 1][1]] = "me";

                        if (cloud === "cloud9") {
                            if (i < 2) {
                                is_centered = compute_is_centered(cloudI, cloudJ, listOfPos[i + 1][0], listOfPos[i + 1][1]);
                                translate_canvas(is_centered, "up");
                            }
                            else {
                                is_centered = compute_is_centered(cloudI, cloudJ, listOfPos[i + 1][0], listOfPos[i + 1][1]);
                                translate_canvas(is_centered, "right");
                            }
                        }
                        else if (cloud === "cloud17") {
                            if (i < 1) {
                                is_centered = compute_is_centered(cloudI, cloudJ, listOfPos[i + 1][0], listOfPos[i + 1][1]);
                                translate_canvas(is_centered, "right");
                            }
                            else {
                                is_centered = compute_is_centered(cloudI, cloudJ, listOfPos[i + 1][0], listOfPos[i + 1][1]);
                                translate_canvas(is_centered, "up");
                            }
                        }
                    }
                    else {
                        game[cloudI][cloudJ] = "sky";
                        game[listOfPos[i + 1][0]][listOfPos[i + 1][1]] = cloud;
                    }
                }
            }
        }
        else if (cloud_way === "backward") {
            for (i = listOfPos.length - 1; i > 0; i--) {
                if (i === 1) {
                    if (cloudI === listOfPos[i][0] && cloudJ === listOfPos[i][1]) {
                        drawCanvasImageElem(ctx, cloudI, cloudJ, "sky");
                        drawCanvasImageElem(ctx, listOfPos[i - 1][0], listOfPos[i - 1][1], "cloud");
                        sky[cloudI][cloudJ] = "sky";
                        sky[listOfPos[i - 1][0]][listOfPos[i - 1][1]] = cloud;

                        if (game[cloudI][cloudJ] === "me") {
                            drawCanvasImageElem(ctx, listOfPos[i - 1][0], listOfPos[i - 1][1], "me");
                            game[cloudI][cloudJ] = "sky";
                            game[listOfPos[i - 1][0]][listOfPos[i - 1][1]] = "me";

                            if (cloud === "cloud9") {
                                if (i > 2) {
                                    is_centered = compute_is_centered(cloudI, cloudJ, listOfPos[i - 1][0], listOfPos[i - 1][1]);
                                    translate_canvas(is_centered, "left");
                                }
                                else {
                                    is_centered = compute_is_centered(cloudI, cloudJ, listOfPos[i - 1][0], listOfPos[i - 1][1]);
                                    translate_canvas(is_centered, "down");
                                }
                            }
                            else if (cloud === "cloud17") {
                                if (i > 1) {
                                    is_centered = compute_is_centered(cloudI, cloudJ, listOfPos[i - 1][0], listOfPos[i - 1][1]);
                                    translate_canvas(is_centered, "down");
                                }
                                else {
                                    is_centered = compute_is_centered(cloudI, cloudJ, listOfPos[i - 1][0], listOfPos[i - 1][1]);
                                    translate_canvas(is_centered, "left");
                                }
                            }
                        }
                        else {
                            game[cloudI][cloudJ] = "sky";
                            game[listOfPos[i - 1][0]][listOfPos[i - 1][1]] = cloud;
                        }

                        switch (cloud) {
                            case "cloud9":
                                cloud9_way = (cloud9_way === "forward") ? "backward" : "forward";
                                break;
                            case "cloud17":
                                cloud17_way = (cloud17_way === "forward") ? "backward" : "forward";
                                break;
                            default:
                                break;
                        }
                    }
                }
                else if (cloudI === listOfPos[i][0] && cloudJ === listOfPos[i][1]) {
                    drawCanvasImageElem(ctx, cloudI, cloudJ, "sky");
                    drawCanvasImageElem(ctx, listOfPos[i - 1][0], listOfPos[i - 1][1], "cloud");
                    sky[cloudI][cloudJ] = "sky";
                    sky[listOfPos[i - 1][0]][listOfPos[i - 1][1]] = cloud;

                    if (game[cloudI][cloudJ] === "me") {
                        drawCanvasImageElem(ctx, listOfPos[i - 1][0], listOfPos[i - 1][1], "me");
                        game[cloudI][cloudJ] = "sky";
                        game[listOfPos[i - 1][0]][listOfPos[i - 1][1]] = "me";

                        if (cloud === "cloud9") {
                            if (i > 2) {
                                is_centered = compute_is_centered(cloudI, cloudJ, listOfPos[i - 1][0], listOfPos[i - 1][1]);
                                translate_canvas(is_centered, "left");
                            }
                            else {
                                is_centered = compute_is_centered(cloudI, cloudJ, listOfPos[i - 1][0], listOfPos[i - 1][1]);
                                translate_canvas(is_centered, "down");
                            }
                        }
                        else if (cloud === "cloud17") {
                            if (i > 1) {
                                is_centered = compute_is_centered(cloudI, cloudJ, listOfPos[i - 1][0], listOfPos[i - 1][1]);
                                translate_canvas(is_centered, "down");
                            }
                            else {
                                is_centered = compute_is_centered(cloudI, cloudJ, listOfPos[i - 1][0], listOfPos[i - 1][1]);
                                translate_canvas(is_centered, "left");
                            }
                        }
                    }
                    else {
                        game[cloudI][cloudJ] = "sky";
                        game[listOfPos[i - 1][0]][listOfPos[i - 1][1]] = cloud;
                    }
                }
            }
        }
    }

    // this function ensures the rays shining
    function shineRay(ray) { // ray = ray1 || ... || ray17
        var xRay;
        var yRay;
        var ray_on;
        switch(ray) {
            case "ray1":
                ray_on = ray1_on;
                xRay = 17;
                yRay = 8;
                break;
            case "ray2":
                ray_on = ray2_on;
                xRay = 16;
                yRay = 9;
                break;
            case "ray3":
                ray_on = ray3_on;
                xRay = 15;
                yRay = 8;
                break;
            case "ray4":
                ray_on = ray4_on;
                xRay = 16;
                yRay = 13;
                break;
            case "ray5":
                ray_on = ray5_on;
                xRay = 16;
                yRay = 14;
                break;
            case "ray6":
                ray_on = ray6_on;
                xRay = 16;
                yRay = 15;
                break;
            case "ray7":
                ray_on = ray7_on;
                xRay = 15;
                yRay = 13;
                break;
            case "ray8":
                ray_on = ray8_on;
                xRay = 15;
                yRay = 15;
                break;
            case "ray9":
                ray_on = ray9_on;
                xRay = 14;
                yRay = 13;
                break;
            case "ray10":
                ray_on = ray10_on;
                xRay = 14;
                yRay = 14;
                break;
            case "ray11":
                ray_on = ray11_on;
                xRay = 14;
                yRay = 15;
                break;
            case "ray12":
                ray_on = ray12_on;
                xRay = 17;
                yRay = 18;
                break;
            case "ray13":
                ray_on = ray13_on;
                xRay = 16;
                yRay = 19;
                break;
            case "ray14":
                ray_on = ray14_on;
                xRay = 15;
                yRay = 18;
                break;
            case "ray15":
                ray_on = ray15_on;
                xRay = 17;
                yRay = 20;
                break;
            case "ray16":
                ray_on = ray16_on;
                xRay = 16;
                yRay = 21;
                break;
            case "ray17":
                ray_on = ray17_on;
                xRay = 15;
                yRay = 20;
                break;
            default:
                break;
        }
        if (ray_on === 1) {
            drawCanvasImageElem(ctx, xRay, yRay, "ground");

            game[xRay][yRay] = "ground";
            switch(ray) {
                case "ray1":
                    ray1_on = 0;
                    break;
                case "ray2":
                    ray2_on = 0;
                    break;
                case "ray3":
                    ray3_on = 0;
                    break;
                case "ray4":
                    ray4_on = 0;
                    break;
                case "ray5":
                    ray5_on = 0;
                    break;
                case "ray6":
                    ray6_on = 0;
                    break;
                case "ray7":
                    ray7_on = 0;
                    break;
                case "ray8":
                    ray8_on = 0;
                    break;
                case "ray9":
                    ray9_on = 0;
                    break;
                case "ray10":
                    ray10_on = 0;
                    break;
                case "ray11":
                    ray11_on = 0;
                    break;
                case "ray12":
                    ray12_on = 0;
                    break;
                case "ray13":
                    ray13_on = 0;
                    break;
                case "ray14":
                    ray14_on = 0;
                    break;
                case "ray15":
                    ray15_on = 0;
                    break;
                case "ray16":
                    ray16_on = 0;
                    break;
                case "ray17":
                    ray17_on = 0;
                    break;
                default:
                    break;
            }
        }
        else {
            if (game[xRay][yRay] === "me") {
                drawCanvasImageElem(ctx, xRay, yRay, "ground");
                drawCanvasImageElem(ctx, xRay, yRay, "ground");

                if (ray === "ray1" || ray === "ray2" || ray === "ray3") {
                    game[17][6] = "me";
                    image.onload = drawCanvasImageElem(ctx, 17, 6, "me");

                    is_centered = 2;
                    canvas.style.transform = "translate(" + -(((22/11)*window.innerWidth)/22) + "px, " + -(((18/9)*window.innerHeight)/18 * 9) + "px)";
                }
                else if (ray === "ray4" || ray === "ray5" || ray === "ray6" || ray === "ray7" || ray === "ray8" || ray === "ray9" || ray === "ray10" || ray === "ray11") {
                    game[17][12] = "me";
                    image.onload = drawCanvasImageElem(ctx, 17, 12, "me");

                    is_centered = 2;
                    canvas.style.transform = "translate(" + -(((22/11)*window.innerWidth)/22 * 7) + "px, " + -(((18/9)*window.innerHeight)/18 * 9) + "px)";
                }
                else {
                    game[15][17] = "me";
                    image.onload = drawCanvasImageElem(ctx, 15, 17, "me");

                    if (has_suns_diamond === 1) {
                        has_suns_diamond = 0;
                        diamonds--;
                        document.getElementsByClassName("gems-score")[0].innerHTML = String(diamonds);

                        drawCanvasImageElem(ctx, 17, 17, "diamond");
                        game[17][17] = "diamond";
                    }

                    if (has_dragons_breath_potion === 1) {
                        has_dragons_breath_potion = 0;

                        drawCanvasImageElem(ctx, 17, 21, "potion");
                        game[17][21] = "potion";
                    }

                    is_centered = 2;
                    canvas.style.transform = "translate(" + -(((22/11)*window.innerWidth)/22 * 11) + "px, " + -(((18/9)*window.innerHeight)/18 * 9) + "px)";
                }
            }

            drawCanvasImageElem(ctx, xRay, yRay, "ray1");
            drawCanvasImageElem(ctx, xRay, yRay, "ray1");

            game[xRay][yRay] = ray;
            switch(ray) {
                case "ray1":
                    ray1_on = 1;
                    break;
                case "ray2":
                    ray2_on = 1;
                    break;
                case "ray3":
                    ray3_on = 1;
                    break;
                case "ray4":
                    ray4_on = 1;
                    break;
                case "ray5":
                    ray5_on = 1;
                    break;
                case "ray6":
                    ray6_on = 1;
                    break;
                case "ray7":
                    ray7_on = 1;
                    break;
                case "ray8":
                    ray8_on = 1;
                    break;
                case "ray9":
                    ray9_on = 1;
                    break;
                case "ray10":
                    ray10_on = 1;
                    break;
                case "ray11":
                    ray11_on = 1;
                    break;
                case "ray12":
                    ray12_on = 1;
                    break;
                case "ray13":
                    ray13_on = 1;
                    break;
                case "ray14":
                    ray14_on = 1;
                    break;
                case "ray15":
                    ray15_on = 1;
                    break;
                case "ray16":
                    ray16_on = 1;
                    break;
                case "ray17":
                    ray17_on = 1;
                    break;
                default:
                    break;
            }
        }
    }

    /* --- MAP --- */


    /* --- INDICATION AND QUESTION MODALS --- */
    var chosen_option_nr = ""; // the option of the question chosen by the player
    var options = document.getElementById("options").getElementsByTagName("li"); // the options of a question
    for (i = 0; i < options.length; i++) {
        // we change the colour of the options according to whether the user moved the mouse pointer out, over them or he clicked on them
        options[i].onmouseover = function() {
            if(chosen_option_nr !== this.getAttribute("id")[this.getAttribute("id").length - 1] && submit_button.innerHTML === "Submit") {
                this.setAttribute("style", "background-color: gold;");
            }
        };
        options[i].onmouseout = function() {
            if(chosen_option_nr !== this.getAttribute("id")[this.getAttribute("id").length - 1] && submit_button.innerHTML === "Submit") {
                this.setAttribute("style", "background-color: tan;");
            }
        };
        options[i].onclick = function() {
            if(submit_button.innerHTML === "Submit") {
                for (var j = 0; j < options.length; j++) {
                    options[j].setAttribute("style", "background-color: tan;");
                }
                this.setAttribute("style", "background-color: darkorange;");
                chosen_option_nr = this.getAttribute("id")[this.getAttribute("id").length - 1]; // on click we retain his option
            }
        }
    }

    var showCorrectAnswerInterval;
    function showCorrectAnswer() {
        showCorrectAnswerInterval = setInterval(function () {
            var correct_answer = parseInt(categories[category].questions[asked_questions[asked_questions.length - 1]].correct_answer);
            if (options[correct_answer - 1].style.backgroundColor !== "tan") {
                options[correct_answer - 1].setAttribute("style", "background-color: tan;");
            }
            else {
                options[correct_answer - 1].setAttribute("style", "background-color: darkorange;");
            }
        }, 400);
        if (chosen_option_nr === categories[category].questions[asked_questions[asked_questions.length - 1]].correct_answer) {
            document.getElementById("clue").innerHTML = "CORRECT ANSWER!!!";
        }
        else {
            document.getElementById("clue").innerHTML = "WRONG ANSWER!!!"
        }
    }

    var submit_button = document.getElementById("submit_button_text");
    submit_button.innerHTML = "Submit";
    submit_button.onclick = function() { // after submitting the answer we announce the user whether he answered correctly or wrong
        if (submit_button.innerHTML === "Next") {
            if (document.getElementById("clue").innerHTML === "CORRECT ANSWER!!!") {
                //alert("Correct answer! You received a star!");
                points++; // correct answers means more stars to your collection
                document.getElementsByClassName("stars-score")[0].innerHTML = String(points);
                questionTriggersEvent();
                hideQuestion();
            }
            else if (document.getElementById("clue").innerHTML === "WRONG ANSWER!!!") {
                //alert("Wrong answer!");
                questionTriggersEvent();
                hideQuestion();
            }
        }
        if (chosen_option_nr !== "" && submit_button.innerHTML === "Submit") {
            showCorrectAnswer();
            submit_button.innerHTML = "Next";
        }
    };

    var exit_button = document.getElementById("exit_button_text");
    exit_button.onclick = function() {
        hideIndication();
    };

    document.getElementsByClassName("indication_div_container")[0].style.visibility = "visible";
    document.getElementById("indication_text").innerHTML = "Chapter 3: " + categories[category].description + "<br><br>"
        + "Some objects can move and you can jump on them so they can take you to other places.";

    // this function hides the question div
    function hideQuestion() {
        var question_div_container = document.getElementsByClassName("question_div_container")[0];
        question_div_container.style.visibility = "hidden";
    }

    // this function shows the question div with a question that hasn't been asked before
    function showQuestion() {
        clearInterval(showCorrectAnswerInterval);
        chosen_option_nr = "";
        for (i = 0; i < options.length; i++) {
            options[i].setAttribute("style", "background-color: tan;");
        }
        var nr_of_questions = categories[category].questions.length; // the number of questions tha category of the level has
        // we select a random question that hasn't been asked before and retain its index
        var rand = getRandomInt(0, nr_of_questions);
        while(true) {
            if (asked_questions.indexOf(rand) < 0) {
                break;
            }
            rand = getRandomInt(0, nr_of_questions);
        }
        asked_questions.push(rand);

        // we fill the question's fields
        document.getElementById("question_text").innerHTML = categories[category].questions[rand].text;
        document.getElementById("option1").innerHTML = categories[category].questions[rand].option1;
        document.getElementById("option2").innerHTML = categories[category].questions[rand].option2;
        document.getElementById("option3").innerHTML = categories[category].questions[rand].option3;
        document.getElementById("option4").innerHTML = categories[category].questions[rand].option4;
        document.getElementById("clue").innerHTML = categories[category].questions[rand].clue;
        document.getElementById("submit_button_text").innerHTML = "Submit";

        var question_div_container = document.getElementsByClassName("question_div_container")[0];
        question_div_container.style.visibility = "visible";
    }

    // this function hides the indication div
    function hideIndication() {
        var indication_div_container = document.getElementsByClassName("indication_div_container")[0];
        indication_div_container.style.visibility = "hidden";
    }

    // this function shows the indication div with a specific message
    function showIndication(message) {
        document.getElementById("indication_text").innerHTML = message;

        var indication_div_container = document.getElementsByClassName("indication_div_container")[0];
        indication_div_container.style.visibility = "visible";
    }

    // this function keeps the evidence of the indication divs that trigger the appearance of a question div right after they have been closed
    // according to the position of our character whether the map's specific characters have asked their questions or not
    function indicationTriggersEvent() {
        if (getElementCoord("me")[0] === 12 && getElementCoord("me")[1] === 8 && has_guardian_angel_asked === 0) {
            showQuestion();
        }

        if (getElementCoord("me")[0] === 7 && getElementCoord("me")[1] === 11 && has_sun_asked === 0 && has_mushroom === 1 && has_pegasus_feather === 1 && has_dragons_breath_potion === 1) {
            showQuestion();
        }

        if (getElementCoord("me")[0] === 3 && getElementCoord("me")[1] === 9 && has_pegasus_asked === 0) {
            showQuestion();
        }

        if ((getElementCoord("me")[0] === 8 && getElementCoord("me")[1] === 4 && has_pixie_asked === 0) || (getElementCoord("me")[0] === 7 && getElementCoord("me")[1] === 4 && has_pixie_asked === 0)) {
            showQuestion();
        }

        if (getElementCoord("me")[0] === 2 && getElementCoord("me")[1] === 4 && has_king_asked === 0) {
            showQuestion();
        }

        if (getElementCoord("me")[0] === 1 && getElementCoord("me")[1] === 0) {
            // redirecting to the levels page
            // window.location.replace("levels.html");
            var id = getParameterByName('id');
            var user = getParameterByName('user');
            location.href = "levels.html?id="+id+"&user="+user;
        }
    }

    document.getElementById("backbutton").addEventListener("click", function(){
        var id = getParameterByName('id');
        var user = getParameterByName('user');
        location.href = "levels.html?id="+id+"&user="+user;
    });

    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    function writeUserData(userId, lvl, nr_stars, nr_gems) {
        firebase.database().ref('users/' + userId).update({
            ID: userId,
            level: lvl,
            stars: nr_stars,
            gems: nr_gems
        });
    }

    // this function keeps the evidence of the question divs that trigger the appearance of an indication div right after they have been closed
    // according to the position of our character and whether the map's specific characters have asked their questions or not
    function questionTriggersEvent() {
        if (chosen_option_nr !== "" && submit_button.innerHTML === "Next") {
            if (getElementCoord("me")[0] === 12 && getElementCoord("me")[1] === 8 && has_guardian_angel_asked === 0) {
                has_guardian_angel_asked = 1; // she has askes her question

                drawCanvasImageElem(ctx, 11, 8, "ground");
                drawCanvasImageElem(ctx, 11, 9, "angel2");
                game[11][8] = "ground";
            }

            if (getElementCoord("me")[0] === 7 && getElementCoord("me")[1] === 11 && has_sun_asked === 0) {
                has_sun_asked = 1;

                drawCanvasImageElem(ctx, 8, 10, "ground");
                drawCanvasImageElem(ctx, 8, 10, "portal");

                game[8][10] = "portal";

                drawCanvasImageElem(ctx, 8, 6, "ground");
                drawCanvasImageElem(ctx, 8, 6, "portal");

                game[8][6] = "portal";

                showIndication("Again, thank you! Your portal is ready!")
            }

            if (getElementCoord("me")[0] === 3 && getElementCoord("me")[1] === 9 && has_pegasus_asked === 0) {
                has_pegasus_asked = 1;
                has_pegasus_feather = 1;

                showIndication("Here's the feather and the scratching tool! Ihahaaaa!!!")
            }

            if ((getElementCoord("me")[0] === 8 && getElementCoord("me")[1] === 4 && has_pixie_asked === 0) || (getElementCoord("me")[0] === 7 && getElementCoord("me")[1] === 4 && has_pixie_asked === 0)) {
                has_pixie_asked = 1;

                showIndication("The door to the castle is open. You may enter. I wish you the very best!")
            }

            if (getElementCoord("me")[0] === 2 && getElementCoord("me")[1] === 4 && has_king_asked === 0) {
                has_king_asked = 1;

                showIndication("Ok, so the Malcha volcano has erupted and a stag was possessed by the powers of fire and it is now devastating the region. Go there and put an end to this threat. <br> You'll be tested with harder notions of the HTTP protocol, so beware. <br> I have opened a portal back to Earth. Take the gate to the left.")
            }
        }
    }

    // after some indication divs are closed, a question div may appear; we attach the function to the "Next" button
    document.getElementsByClassName("exit_button")[0].addEventListener("click", indicationTriggersEvent, false);
}