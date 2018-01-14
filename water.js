function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; // the maximum is exclusive and the minimum is inclusive
}

var drawCanvasImageElem = function(ctx, image, row, col) { // draws an image element on the canvas
    return function() {
        ctx.drawImage(image, col * 200, row * 200, 200, 200);
    }
};

var category = "category2"; // the category of questions for level 2
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
var has_first_diamond = 0; // 1 - our character has taked the first diamond; 0 - otherwise
var points = 0; // the number of points accumulated during this level
var asked_questions = []; // the indexes of the questions already asked
var has_key = 0; // 1 - the character has the key, 0 - otherwise
var has_medusa1_asked = 0; // 1 - medusa1 has already asked the question, 0 - otherwise
var has_medusa2_asked = 0; // 1 - medusa2 has already asked the question, 0 - otherwise
var has_dark_voice_asked = 0; // 1 - the dark voice has already asked the question, 0 - otherwise
var has_minotaur_asked = 0; // 1 - the minotaur has already asked the question, 0 - otherwise
var has_serpent_asked = 0; // 1 - the serpent has already asked the question, 0 - otherwise
var has_food = 0; // 1 - the character has the food for the snake, 0 - otherwise
var spikes1_on = 1, spikes2_on = 1, spikes3_on = 1, spikes4_on = 1; // 1 - the spikes are up, 0 - otherwise

// matrix with the ground under the elements (the background)
var water = [["tree", "tree", "tree", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"],
    ["tree", "stairs_to_heaven", "tree", "wall", "river", "ground", "ground", "ground", "wall", "ground", "ground", "ground", "ground", "wall", "ground", "ground", "ground", "ground", "well_stairs", "wall"],
    ["tree", "tree", "well", "wall", "river", "ground", "wall", "ground", "wall", "ground", "ground", "ground", "ground", "wall", "ground", "river", "wall", "wall", "wall", "wall"],
    ["wall", "wall", "wall", "well_stairs", "river", "ground", "wall", "ground", "wall", "ground", "ground", "ground", "ground", "wall", "ground", "river", "river", "river", "river", "wall"],
    ["wall", "ground", "ground", "river", "river", "ground", "wall", "ground", "wall", "ground", "ground", "ground", "river", "wall", "ground", "ground", "ground", "ground", "ground", "wall"],
    ["wall", "ground", "river", "river", "river", "ground", "river", "ground", "river", "river", "river", "ground", "wall", "wall", "wall", "ground", "wall", "wall", "wall", "wall"],
    ["wall", "ground", "river", "ground", "ground", "ground", "river", "ground", "river", "river", "wall", "ground", "wall", "ground", "ground", "ground", "ground", "ground", "ground", "wall"],
    ["wall", "ground", "wall", "wall", "ground", "river", "river", "ground", "river", "river", "wall", "ground", "wall", "wall", "wall", "wall", "ground", "wall", "wall", "wall"],
    ["wall", "ground", "wall", "ground", "river", "river", "river", "ground", "river", "wall", "wall", "ground", "gate", "ground", "ground", "ground", "ground", "ground", "ground", "wall"],
    ["wall", "ground", "wall", "ground", "river", "ground", "wall", "ground", "ground", "ground", "ground", "ground", "wall", "wall", "ground", "ground", "ground", "river", "river", "wall"],
    ["wall", "ground", "wall", "river", "ground", "river", "river", "ground", "river", "ground", "ground", "ground", "wall", "river", "ground", "river", "river", "river", "ground", "wall"],
    ["wall", "ground", "wall", "ground", "river", "ground", "river", "ground", "river", "wall", "wall", "wall", "wall", "river", "river", "ground", "ground", "ground", "ground", "wall"],
    ["wall", "ground", "wall", "wall", "wall", "ground", "river", "ground", "river", "river", "river", "river", "wall", "river", "river", "river", "river", "river", "ground", "wall"],
    ["wall", "ground", "ground", "ground", "ground", "ground", "river", "ground", "ground", "ground", "ground", "ground", "ground", "river", "medusa1", "ground", "ground", "ground", "ground", "wall"],
    ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"]];

// matrix with all the game elements
var game = [["tree", "tree", "tree", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"],
    ["tree", "stairs_to_heaven", "tree", "wall", "river", "ground", "ground", "ground", "wall", "river", "river", "river", "river", "wall", "ground", "river", "stone", "me", "well_stairs", "wall"],
    ["tree", "tree", "well", "wall", "river", "ground", "wall", "ground", "wall", "ground", "river", "ground", "river", "wall", "ground", "river", "wall", "wall", "wall", "wall"],
    ["wall", "wall", "wall", "well_stairs", "river", "ground", "wall", "ground", "wall", "river", "stone", "stone", "stone", "wall", "ground", "river", "river", "river", "river", "wall"],
    ["wall", "ground", "minotaur", "river", "river", "stone", "wall", "serpent", "wall", "ground", "ground", "ground", "diamond", "wall", "ground", "ground", "ground", "ground", "rat1", "wall"],
    ["wall", "ground", "river", "river", "river", "river", "river", "river", "river", "river", "river", "river", "wall", "wall", "wall", "ground", "wall", "wall", "wall", "wall"],
    ["wall", "river", "river", "ground", "ground", "ground", "river", "ground", "river", "river", "wall", "stone", "wall", "diamond", "ground", "ground", "ground", "ground", "rat2", "wall"],
    ["wall", "stone", "wall", "wall", "ground", "river", "river", "stone", "river", "river", "wall", "ground", "wall", "wall", "wall", "wall", "ground", "wall", "wall", "wall"],
    ["wall", "ground", "wall", "ground", "river", "river", "river", "river", "river", "wall", "wall", "ground", "gate", "ground", "ground", "ground", "ground", "ground", "ground", "wall"],
    ["wall", "spikes4", "wall", "ground", "river", "ground", "wall", "stone", "river", "ground", "stone", "ground", "wall", "wall", "stone", "ground", "ground", "river", "river", "wall"],
    ["wall", "ground", "wall", "river", "medusa2", "river", "river", "ground", "river", "ground", "ground", "ground", "wall", "river", "river", "river", "river", "river", "ground", "wall"],
    ["wall", "spikes3", "wall", "ground", "river", "ground", "river", "ground", "river", "wall", "wall", "wall", "wall", "river", "river", "ground", "ground", "ground", "stone", "wall"],
    ["wall", "ground", "wall", "wall", "wall", "ground", "river", "ground", "river", "river", "river", "river", "wall", "river", "river", "river", "river", "river", "river", "wall"],
    ["wall", "ground", "ground", "spikes2", "ground", "ground", "river", "ground", "ground", "spikes1", "ground", "ground", "food", "river", "medusa1", "ground", "ground", "ground", "ground", "wall"],
    ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"]];

// map element --> corresponding picture
var map_elements = {
    "tree": "water_images/tree.png",
    "wall": "water_images/wall.png",
    "stairs_to_heaven": "water_images/stairs_to_heaven.png",
    "grass": "water_images/grass.jpg",
    "river": "water_images/river.png",
    "stone": "water_images/stone.png",
    "me": "water_images/character.png",
    "well_stairs": "water_images/well_stairs.png",
    "diamond": "water_images/diamond.png",
    "minotaur": "water_images/minotaur.png",
    "serpent": "water_images/serpent.png",
    "rat1": "water_images/rat.png",
    "rat2": "water_images/rat.png",
    "dark_voice": "water_images/dark_voice.png",
    "medusa1": "water_images/medusa1.png",
    "medusa2": "water_images/medusa2.png",
    "gate": "water_images/gate.png",
    "spikes1": "water_images/spikes.png",
    "spikes2": "water_images/spikes.png",
    "spikes3": "water_images/spikes.png",
    "spikes4": "water_images/spikes.png",
    "food": "water_images/food.png",
    "well": "water_images/well.png",
    "ground": "water_images/ground.png"
};

// the canvas is loaded based on this function
function init() {
    /* --- MAP --- */
    var canvas = document.getElementById('canvas');
    canvas.style.transform = "translate(" + -((((20/9)*window.innerWidth)/20) * 11) + "px, 0px)"; // (-11 * ~~171, 0 * ~~108)

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
                canvas.style.transform = "translate(" + x + "px, " + (y + (((15/7)*window.innerHeight)/15)) + "px)";
            }
            else if (direction === "down") {
                canvas.style.transform = "translate(" + x + "px, " + (y - (((15/7)*window.innerHeight)/15)) + "px)";
            }
            else if (direction === "rightup") {
                canvas.style.transform = "translate(" + x + "px, " + (y + (((15/7)*window.innerHeight)/15)) + "px)";
            }
            else if (direction === "leftup") {
                canvas.style.transform = "translate(" + x + "px, " + (y + (((15/7)*window.innerHeight)/15)) + "px)";
            }
            else if (direction === "rightdown") {
                canvas.style.transform = "translate(" + x + "px, " + (y - (((15/7)*window.innerHeight)/15)) + "px)";
            }
            else if (direction === "leftdown") {
                canvas.style.transform = "translate(" + x + "px, " + (y - (((15/7)*window.innerHeight)/15)) + "px)";
            }
        }
        else if (is_centered === 2) {
            if (direction === "right") {
                canvas.style.transform = "translate(" + (x - (((20/9)*window.innerWidth)/20)) + "px, " + y + "px)";
            }
            else if (direction === "left") {
                canvas.style.transform = "translate(" + (x + (((20/9)*window.innerWidth)/20)) + "px, " + y + "px)";
            }
            else if (direction === "up") {
                canvas.style.transform = "translate(" + x + "px, " + y + "px)";
            }
            else if (direction === "down") {
                canvas.style.transform = "translate(" + x + "px, " + y + "px)";
            }
            else if (direction === "rightup") {
                canvas.style.transform = "translate(" + (x - (((20/9)*window.innerWidth)/20)) + "px, " + y + "px)";
            }
            else if (direction === "leftup") {
                canvas.style.transform = "translate(" + (x + (((20/9)*window.innerWidth)/20)) + "px, " + y + "px)";
            }
            else if (direction === "rightdown") {
                canvas.style.transform = "translate(" + (x - (((20/9)*window.innerWidth)/20)) + "px, " + y + "px)";
            }
            else if (direction === "leftdown") {
                canvas.style.transform = "translate(" + (x + (((20/9)*window.innerWidth)/20)) + "px, " + y + "px)";
            }
        }
        else if (is_centered === 3) {
            if (direction === "right") {
                canvas.style.transform = "translate(" + (x - (((20/9)*window.innerWidth)/20)) + "px, " + y + "px)";
            }
            else if (direction === "left") {
                canvas.style.transform = "translate(" + (x + (((20/9)*window.innerWidth)/20)) + "px, " + y + "px)";
            }
            else if (direction === "up") {
                canvas.style.transform = "translate(" + x + "px, " + (y + (((15/7)*window.innerHeight)/15)) + "px)";
            }
            else if (direction === "down") {
                canvas.style.transform = "translate(" + x + "px, " + (y - (((15/7)*window.innerHeight)/15)) + "px)";
            }
            else if (direction === "rightup") {
                canvas.style.transform = "translate(" + (x - (((20/9)*window.innerWidth)/20)) + "px, " + (y + (((15/7)*window.innerHeight)/15)) + "px)";
            }
            else if (direction === "leftup") {
                canvas.style.transform = "translate(" + (x + (((20/9)*window.innerWidth)/20)) + "px, " + (y + (((15/7)*window.innerHeight)/15)) + "px)";
            }
            else if (direction === "rightdown") {
                canvas.style.transform = "translate(" + (x - (((20/9)*window.innerWidth)/20)) + "px, " + (y - (((15/7)*window.innerHeight)/15)) + "px)";
            }
            else if (direction === "leftdown") {
                canvas.style.transform = "translate(" + (x + (((20/9)*window.innerWidth)/20)) + "px, " + (y - (((15/7)*window.innerHeight)/15)) + "px)";
            }
        }
    }

    // this function computes the centrality of the character
    function compute_is_centered(charI, charJ, newI, newJ) {
        is_centered = 0;
        if ((newI > 3 && newI < 11) || ((newI === 3 || newI === 11) && (charI > 3 && charI < 11))) {
            is_centered = 1;
        }
        else if ((newJ > 4 && newJ < 15) || ((newJ === 4 || newJ === 15) && (charJ > 4 && charJ < 15))) {
            is_centered = 2;
        }
        if (((newI > 3 && newI < 11) || ((newI === 3 || newI === 11) && (charI > 3 && charI < 11))) && ((newJ > 4 && newJ < 15) || ((newJ === 4 || newJ === 15) && (charJ > 4 && charJ < 15)))) {
            is_centered = 3;
        }
        return is_centered;
    }

    // adjust the canvas to match the size of the screen
    var height = window.innerHeight; // 759
    var width = window.innerWidth; // 1536

    canvas.style.width = (20/9)*width + "px";
    canvas.style.height = (15/7)*height + "px";

    // draw the background of the canvas
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        for (var i = 0; i < 15; i++) {
            for (var j = 0; j < 20; j++) {
                var image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, i, j);
                if (i < 3 && j < 3) {
                    image.src = "water_images/grass.jpg";
                }
                else {
                    image.src = "water_images/ground.png";
                }
            }
        }
    }

    // draw the elements on the map
    for (i = 0; i < game.length; i++) {
        for (j = 0; j < game[i].length; j++) {
            if (game[i][j] === "diamond" && i === 4) { // this diamond is on water, so we first place water over the ground (background)
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, i, j);
                image.src = map_elements["river"];
            }

            image = new Image();
            image.onload = drawCanvasImageElem(ctx, image, i, j);
            image.src = map_elements[game[i][j]];
        }
    }

    // return the coordinates of a specific element on the map (element_name --> [x_element, y_element])
    // used for unique elements on the map (like characters)
    function getElementCoord(obj) {
        var coord = [];
        for (i = 0; i < 15; i++) {
            for (j = 0; j < 20; j++) {
                if(game[i][j] === obj) {
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
    image = new Image();
    image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
    image.src = map_elements["me"];

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
    setInterval(function(){ moveRat("rat1"); }, 400);
    setInterval(function(){ moveRat("rat2"); }, 300);
    setInterval(function(){ moveSpikes("spikes1"); }, 1000);
    setInterval(function(){ moveSpikes("spikes2"); }, 800);
    setInterval(function(){ moveSpikes("spikes3"); }, 500);
    setInterval(function(){ moveSpikes("spikes4"); }, 300);

    // the function which keeps the game alive depending on the keyboard button pressed which represents a direction
    function arrowPressed(direction) {
        var image;
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

        if(document.getElementsByClassName("indication_div_container")[0].style.visibility === 'visible' || document.getElementsByClassName("question_div_container")[0].style.visibility === 'visible'){
            document.onkeydown = function () {
                return false;
            }
        }
        else {
            if (checkMove(newI, newJ) === true) { // the character can step on that element
                if (game[newI][newJ] === "diamond") { // the element is diamond
                    if (newJ === 13) { // the element is the first diamond
                        has_first_diamond = 1;
                    }
                    diamonds++; // increase the number of diamonds
                    document.getElementsByClassName("gems-score")[0].innerHTML = String(diamonds);

                    // draw ground on the diamond's position
                    image = new Image();
                    image.onload = drawCanvasImageElem(ctx, image, newI, newJ);
                    image.src = map_elements[water[newI][newJ]];

                    // draw my character on the new position
                    image = new Image();
                    image.onload = drawCanvasImageElem(ctx, image, newI, newJ);
                    image.src = map_elements["me"];
                is_centered = 2;
                canvas.style.transform = "translate(" + -((((20/9)*window.innerWidth)/20) * 10) + "px, " + 0 + "px)";
            }
            else if (game[newI][newJ] === "rat2") {
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                image.src = map_elements[water[charI][charJ]];

                    // update the matrices
                    game[newI][newJ] = water[newI][newJ];
                    game[charI][charJ] = water[charI][charJ];
                    game[newI][newJ] = "me";

                    // draw ground on my characters last position
                    image = new Image();
                    image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                    image.src = map_elements[game[charI][charJ]];

                    //console.log("Nr. of diamonds: ", diamonds);

                    is_centered = compute_is_centered(charI, charJ, newI, newJ);
                    translate_canvas(is_centered, direction);
                }
                else if (game[newI][newJ] === "rat1") {
                    image = new Image();
                    image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                    image.src = map_elements[water[charI][charJ]];

                    game[charI][charJ] = water[charI][charJ];
                    game[1][14] = "me"; // it pushes my character at that position
                is_centered = 3;
                canvas.style.transform = "translate(" + -(((20/9)*window.innerWidth)/20 * 11) + "px, " + -(((15/7)*window.innerHeight)/15 * 2) + "px)";
            }
            else if (game[newI][newJ] === "spikes1" || game[newI][newJ] === "spikes2" || game[newI][newJ] === "spikes3" || game[newI][newJ] === "spikes4") {
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                image.src = map_elements[water[charI][charJ]];

                game[charI][charJ] = water[charI][charJ];
                // the spikes push my character at certain positions
                if (game[newI][newJ] === "spikes1" && direction === "right") {
                    game[13][7] = "me";

                    image = new Image();
                    image.onload = drawCanvasImageElem(ctx, image, 1, 14);
                    image.src = map_elements["me"];

                    is_centered = 2;
                    canvas.style.transform = "translate(" + (-1699) + "px, " + 0 + "px)";
                    canvas.style.transform = "translate(" + -(((20/9)*window.innerWidth)/20 * 3) + "px, " + -(((15/7)*window.innerHeight)/15 * 8) + "px)";
                }
                else if (game[newI][newJ] === "rat2") {
                    image = new Image();
                    image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                    image.src = map_elements[water[charI][charJ]];
                    game[charI][charJ] = water[charI][charJ];
                    game[5][15] = "me";
                    is_centered = 2;
                    canvas.style.transform = "translate(" + -(((20/9)*window.innerWidth)/20 * 7) + "px, " + -(((15/7)*window.innerHeight)/15 * 8) + "px)";
                }
                else {
                    game[13][5] = "me";

                    image = new Image();
                    image.onload = drawCanvasImageElem(ctx, image, 5, 15);
                    image.src = map_elements["me"];

                    // this rat can take his diamond back from me
                    image = new Image();
                    image.onload = drawCanvasImageElem(ctx, image, 6, 13);
                    image.src = map_elements["diamond"];
                    is_centered = 2;
                    canvas.style.transform = "translate(" + -(((20/9)*window.innerWidth)/20) + "px, " + -(((15/7)*window.innerHeight)/15 * 8) + "px)";
                }
            }
            else if (game[newI][newJ] === "gate" && has_key === 0) { // you don't have a key.. you'll receive a message that you must first find a key for the gate
                showIndication("The gate is closed. <br> You need a key to open it.");
            }
            else if ((game[newI][newJ] === "gate" && has_key === 1) || water[charI][charJ] === "gate") { // now you can pass that gate
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, newI, newJ);
                image.src = map_elements["me"];

                game[charI][charJ] = water[charI][charJ];
                game[newI][newJ] = "me";

                    game[6][13] = "diamond";
                    if (has_first_diamond === 1) {
                        diamonds--;
                        document.getElementsByClassName("gems-score")[0].innerHTML = String(diamonds);
                        has_first_diamond = 0;
                    }

                    is_centered = 3;
                    canvas.style.transform = "translate(" + (-1870) + "px, " + (-216) + "px)";
                }
                else if (game[newI][newJ] === "spikes1" || game[newI][newJ] === "spikes2" || game[newI][newJ] === "spikes3" || game[newI][newJ] === "spikes4") {
                    image = new Image();
                    image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                    image.src = map_elements[water[charI][charJ]];

                    game[charI][charJ] = water[charI][charJ];
                    // the spikes push my character at certain positions
                    if (game[newI][newJ] === "spikes1" && direction === "right") {
                        game[13][7] = "me";

                        image = new Image();
                        image.onload = drawCanvasImageElem(ctx, image, 13, 7);
                        image.src = map_elements["me"];

                        is_centered = 2;
                        canvas.style.transform = "translate(" + (-502) + "px, " + (-864) + "px)";
                    }
                    else if (game[newI][newJ] === "spikes1" && direction === "left") {
                        game[13][11] = "me";

                        image = new Image();
                        image.onload = drawCanvasImageElem(ctx, image, 13, 11);
                        image.src = map_elements["me"];

                        is_centered = 2;
                        canvas.style.transform = "translate(" + (-1186) + "px, " + (-864) + "px)";
                    }
                    else {
                        game[13][5] = "me";

                        image = new Image();
                        image.onload = drawCanvasImageElem(ctx, image, 13, 5);
                        image.src = map_elements["me"];

                        is_centered = 2;
                        canvas.style.transform = "translate(" + (-160) + "px, " + (-864) + "px)";
                    }
                }
                else if (game[newI][newJ] === "gate" && has_key === 0) { // you don't have a key.. you'll receive a message that you must first find a key for the gate
                    showIndication("The gate is closed. <br> You need a key to open it.");
                }
                else if ((game[newI][newJ] === "gate" && has_key === 1) || water[charI][charJ] === "gate") { // now you can pass that gate
                    image = new Image();
                    image.onload = drawCanvasImageElem(ctx, image, newI, newJ);
                    image.src = map_elements["me"];

                    game[charI][charJ] = water[charI][charJ];
                    game[newI][newJ] = "me";

                    if (water[charI][charJ] === "gate") { // we draw ground first so that the gate won't overlap my character
                        image = new Image();
                        image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                        image.src = map_elements["ground"];
                    }

                    image = new Image();
                    image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                    image.src = map_elements[water[charI][charJ]];

                    is_centered = compute_is_centered(charI, charJ, newI, newJ);
                    translate_canvas(is_centered, direction);
                }
                else if (game[newI][newJ] === "food" && has_food === 0) {
                    image = new Image();
                    image.onload = drawCanvasImageElem(ctx, image, newI, newJ);
                    image.src = map_elements[water[newI][newJ]];

                    image = new Image();
                    image.onload = drawCanvasImageElem(ctx, image, newI, newJ);
                    image.src = map_elements["me"];

                    game[newI][newJ] = "me";
                    game[charI][charJ] = water[charI][charJ];

                    image = new Image();
                    image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                    image.src = map_elements[water[charI][charJ]];

                    showIndication("You found food!");
                    has_food = 1;

                    is_centered = compute_is_centered(charI, charJ, newI, newJ);
                    translate_canvas(is_centered, direction);
                }
                else if (game[newI][newJ] === "stairs_to_heaven") {
                    image = new Image();
                    image.onload = drawCanvasImageElem(ctx, image, 1, 1);
                    image.src = map_elements["me"];

                    game[1][1] = "me";

                    image = new Image();
                    image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                    image.src = map_elements["grass"];

                    image = new Image();
                    image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                    image.src = map_elements["well"];

                    game[charI][charJ] = "me";

                    showIndication("Chapter Completed! <br><br> Bidi has reached the sky!"); // we reached the end of the level

                    // redirecting to the levels page
                    window.location.replace("Proiect/HAG/levels.html");

                    is_centered = compute_is_centered(charI, charJ, newI, newJ);
                    translate_canvas(is_centered, direction);
                }
                else { // in front of us is ground
                    image = new Image();
                    image.onload = drawCanvasImageElem(ctx, image, newI, newJ);
                    image.src = map_elements["me"];

                    game[charI][charJ] = water[charI][charJ];
                    game[newI][newJ] = "me";

                    image = new Image();
                    image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                    image.src = map_elements[water[charI][charJ]];

                    if (newI === 13 && newJ === 15 && has_medusa1_asked === 0) { // if we are in front of medusa1
                        showIndication("Hello stranger! <br> Might be I have a key for you! <br> But you must first answer me a question!");
                    }
                    else if ((newI === 6 && newJ === 4 && has_dark_voice_asked === 0) || (newI === 7 && newJ === 4 && has_dark_voice_asked === 0)) {
                        // if we are in sight of the dark stranger he appears to ask us a question
                        image = new Image();
                        image.onload = drawCanvasImageElem(ctx, image, 6, 3);
                        image.src = map_elements["dark_voice"];

                        showIndication("Boooo! I have a question for you!");
                    }

                    is_centered = compute_is_centered(charI, charJ, newI, newJ);
                    translate_canvas(is_centered, direction);
                }
            }
            else { // the character can't step on that element
                if (game[newI][newJ] === "stone" && (direction === "up" || direction === "down" || direction === "left" || direction === "right") && game[newI2][newJ2] === "river") {
                    // the stone is in front of river so it can pe pushed to create a new path
                    image = new Image();
                    image.onload = drawCanvasImageElem(ctx, image, newI, newJ);
                    image.src = map_elements["ground"];

                    image = new Image();
                    image.onload = drawCanvasImageElem(ctx, image, newI2, newJ2);
                    image.src = map_elements["ground"];

                    game[newI][newJ] = water[newI][newJ];
                    game[newI2][newJ2] = water[newI2][newJ2];
                }
                else if (game[newI][newJ] === "stone" && (direction === "up" || direction === "down" || direction === "left" || direction === "right") && game[newI2][newJ2] === "ground") {
                    image = new Image();
                    image.onload = drawCanvasImageElem(ctx, image, newI, newJ);
                    image.src = map_elements["ground"];

                    image = new Image();
                    image.onload = drawCanvasImageElem(ctx, image, newI2, newJ2);
                    image.src = map_elements["stone"];

                    game[newI][newJ] = water[newI][newJ];
                    game[newI2][newJ2] = "stone";
                }
                else if (game[newI][newJ] === "stone" && (direction === "up" || direction === "down" || direction === "left" || direction === "right") && game[newI2][newJ2] === "diamond") {
                    // the stone is in front of a free ground so it can be pushed forward
                    image = new Image();
                    image.onload = drawCanvasImageElem(ctx, image, newI, newJ);
                    image.src = map_elements["ground"];

                    image = new Image();
                    image.onload = drawCanvasImageElem(ctx, image, newI2, newJ2);
                    image.src = map_elements["ground"];

                    image = new Image();
                    image.onload = drawCanvasImageElem(ctx, image, newI2, newJ2);
                    image.src = map_elements["diamond"];

                    game[newI][newJ] = water[newI][newJ];
                    water[newI2][newJ2] = "ground";
                    game[newI2][newJ2] = "diamond";
                }
                else if (game[newI][newJ] === "serpent" && has_food === 0) {
                    showIndication("I have a ques-s-s-stion for you! <br> But I'm hungry! <br> Bring me s-s-s-some food first.");
                }
                else if (game[newI][newJ] === "serpent" && has_food === 1) {
                    showQuestion();
                }
                else if (game[newI][newJ] === "medusa2" && has_medusa2_asked === 0) {
                    showIndication("Hi sweetling! If you want to pass you have to do me a favor! <br> Answer this delicious question.")
                }
                else if (game[newI][newJ] === "minotaur" && has_minotaur_asked === 0) {
                    showIndication("Halt! <br> You have to pay a toll to get to the surface! <br> So, in coins or questions?");
                }
                else if (game[newI][newJ] === "well_stairs" && newI === 3 && getElementCoord("me")[0] !== 2) {
                    // if you reach the steps which lead to the surface, your character will reach the top of the well
                    image = new Image();
                    image.onload = drawCanvasImageElem(ctx, image, charI, charJ);
                    image.src = map_elements["ground"];

                    game[charI][charJ] = "ground";

                    image = new Image();
                    image.onload = drawCanvasImageElem(ctx, image, 2, 2);
                    image.src = map_elements["me"];

                    game[2][2] = "me";

                    is_centered = 0;
                    canvas.style.transform = "translate(" + 0 + "px, " + 0 + "px)";
                }
                else { // nothing happens because you can't jump over obstacles
                    //alert("You can't jump over obstacles!");
                }
            }
        }
    }

    // the function that verifies on which map elements our character can step
    function checkMove(newI, newJ) { // newI, newJ - the position on which the character intends to step
        return (game[newI][newJ] === "ground")
            || (game[newI][newJ] === "diamond" && water[newI][newJ] !== "river")
            || (game[newI][newJ] === "food")
            || (game[newI][newJ] === "spikes1")
            || (game[newI][newJ] === "spikes2")
            || (game[newI][newJ] === "spikes3")
            || (game[newI][newJ] === "spikes4")
            || (game[newI][newJ] === "rat1")
            || (game[newI][newJ] === "rat2")
            || (game[newI][newJ] === "stairs_to_heaven")
            || (game[newI][newJ] === "well")
            || (game[newI][newJ] === "gate");
    }

    // this function ensures the rats movement
    function moveRat(rat) { // rat = rat1 or rat2
        var xRat, yRat, in_diamond_corner = 0; // the coordinates of the rat and whether my character is in the corner where the diamond was or not
        // get the coordinates corresponding to the specified rat
        if (rat === "rat1") {
            xRat =  getElementCoord("rat1")[0];
            yRat = getElementCoord("rat1")[1];
        }
        else if (rat === "rat2") {
            xRat =  getElementCoord("rat2")[0];
            yRat = getElementCoord("rat2")[1];
        }

        // the next position of the rat
        var newYRat = ((rat === "rat2" && ((yRat === 14 && game[xRat][13] === "diamond") || yRat === 13)) || (rat === "rat1" && yRat === 14)) ? 18 : yRat - 1;
        var newXRat = xRat;

        game[xRat][yRat] = water[xRat][yRat]; // the rat leaves the ground empty where it previously were
        if (game[newXRat][newYRat] === "me") { // if it steps on me
            if(getElementCoord("me")[0] === 6 && getElementCoord("me")[1] === 13) {
                in_diamond_corner = 1;
            }

            image = new Image();
            image.onload = drawCanvasImageElem(ctx, image, newXRat, newYRat);
            image.src = map_elements[water[newXRat][newYRat]];

            game[newXRat][newYRat] = water[charI][charJ];
            if (rat === "rat1") {
                game[1][14] = "me";
            }
            else if (rat === "rat2") {
                game[5][15] = "me";

                // he takes back his diamond and puts it in it's place if he finds it on me
                if (has_first_diamond === 1) {
                    image = new Image();
                    image.onload = drawCanvasImageElem(ctx, image, 6, 13);
                    image.src = map_elements["diamond"];

                    game[6][13] = "diamond";
                    diamonds--;
                    document.getElementsByClassName("gems-score")[0].innerHTML = String(diamonds);
                    has_first_diamond = 0;
                }
            }

            // the rat pushes me back to a certain location
            image = new Image();
            image.onload = rat === "rat1" ? drawCanvasImageElem(ctx, image, 1, 14) : drawCanvasImageElem(ctx, image, 5, 15);
            image.src = map_elements["me"];
            if (rat === "rat1") {
                is_centered = 2;
                canvas.style.transform = "translate(" + -((((20/9)*window.innerWidth)/20) * 10) + "px, " + 0 + "px)";
            }
            else if (rat === "rat2") {
                is_centered = 3;
                canvas.style.transform = "translate(" + -(((20/9)*window.innerWidth)/20 * 11) + "px, " + -(((15/7)*window.innerHeight)/15 * 2) + "px)";
            }
        }

        newYRat = in_diamond_corner === 1 ? 18 : newYRat;

        game[newXRat][newYRat] = rat === "rat1" ? "rat1" : "rat2";

        image = new Image();
        image.onload = drawCanvasImageElem(ctx, image, xRat, yRat);
        image.src = map_elements[water[xRat][yRat]];

        image = new Image();
        image.onload = drawCanvasImageElem(ctx, image, newXRat, newYRat);
        image.src = rat === "rat1" ? map_elements["rat1"] : map_elements["rat2"];
    }

    // this function ensures the spikes movement
    function moveSpikes(spikes) { // spikes = spikes1 or spikes2 or spikes3 or spikes4
        var xSpikes;
        var ySpikes;
        var spikes_on;
        if (spikes === "spikes1") {
            spikes_on = spikes1_on;
            xSpikes = 13;
            ySpikes = 9;
        }
        else if (spikes === "spikes2") {
            spikes_on = spikes2_on;
            xSpikes = 13;
            ySpikes = 3;
        }
        else if (spikes === "spikes3") {
            spikes_on = spikes3_on;
            xSpikes = 11;
            ySpikes = 1;
        }
        else if (spikes === "spikes4") {
            spikes_on = spikes4_on;
            xSpikes = 9;
            ySpikes = 1;
        }
        if (spikes_on === 1) {
            image = new Image();
            image.onload = drawCanvasImageElem(ctx, image, xSpikes, ySpikes);
            image.src = map_elements[water[xSpikes][ySpikes]];

            game[xSpikes][ySpikes] = "ground";
            if (spikes === "spikes1") {
                spikes1_on = 0;
            }
            else if (spikes === "spikes2") {
                spikes2_on = 0;
            }
            else if (spikes === "spikes3") {
                spikes3_on = 0;
            }
            else if (spikes === "spikes4") {
                spikes4_on = 0;
            }
        }
        else {
            if (game[xSpikes][ySpikes] === "me") {
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, xSpikes, ySpikes);
                image.src = map_elements[water[xSpikes][ySpikes]];

                if (spikes === "spikes1") {
                    game[13][7] = "me";

                    image = new Image();
                    image.onload = drawCanvasImageElem(ctx, image, 13, 7);
                    image.src = map_elements["me"];

                    is_centered = 2;
                    canvas.style.transform = "translate(" + -(((20/9)*window.innerWidth)/20 * 3) + "px, " + -(((15/7)*window.innerHeight)/15 * 8) + "px)";
                }
                else {
                    game[13][5] = "me";

                    image = new Image();
                    image.onload = drawCanvasImageElem(ctx, image, 13, 5);
                    image.src = map_elements["me"];

                    is_centered = 2;
                    canvas.style.transform = "translate(" + -(((20/9)*window.innerWidth)/20) + "px, " + -(((15/7)*window.innerHeight)/15 * 8) + "px)";
                }
            }

            image = new Image();
            image.onload = drawCanvasImageElem(ctx, image, xSpikes, ySpikes);
            image.src = map_elements[spikes];

            game[xSpikes][ySpikes] = spikes;
            if (spikes === "spikes1") {
                spikes1_on = 1;
            }
            else if (spikes === "spikes2") {
                spikes2_on = 1;
            }
            else if (spikes === "spikes3") {
                spikes3_on = 1;
            }
            else if (spikes === "spikes4") {
                spikes4_on = 1;
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
            if(chosen_option_nr !== this.getAttribute("id")[this.getAttribute("id").length - 1]) {
                this.setAttribute("style", "background-color: cornflowerblue;");
            }
        };
        options[i].onmouseout = function() {
            if(chosen_option_nr !== this.getAttribute("id")[this.getAttribute("id").length - 1]) {
                this.setAttribute("style", "background-color: tan;");
            }
        };
        options[i].onclick = function() {
            for (var j = 0; j < options.length; j++) {
                options[j].setAttribute("style", "background-color: tan;");
            }
            this.setAttribute("style", "background-color: midnightblue;");
            chosen_option_nr = this.getAttribute("id")[this.getAttribute("id").length - 1]; // on click we retain his option
        }
    }

    var submit_button = document.getElementById("submit_button_text");
    submit_button.onclick = function() { // after submitting the answer we announce the user whether he answered correctly or wrong
        if (chosen_option_nr === categories[category].questions[asked_questions[asked_questions.length - 1]].correct_answer) {
            // alert("Correct answer! You received a star!");
            points++; // correct answers means more stars to your collection
            document.getElementsByClassName("stars-score")[0].innerHTML = String(points);
            hideQuestion();
        }
        else if(chosen_option_nr === "") { // you have to select an answer before submitting
            //alert("You must first select an answer!");
        }
        else {
            // alert("Wrong answer!");
            hideQuestion();
        }
    };

    var exit_button = document.getElementById("exit_button_text");
    exit_button.onclick = function() {
        hideIndication();
    };

    document.getElementsByClassName("indication_div_container")[0].style.visibility = "visible";
    document.getElementById("indication_text").innerHTML = "Chapter 2: " + categories[category].description + "<br><br>"
        + "Stones can be pushed, especially to create a crossing over water. Press W, A, S, D when you are near a stone.";

    // this function hides the question div
    function hideQuestion() {
        var question_div_container = document.getElementsByClassName("question_div_container")[0];
        question_div_container.style.visibility = "hidden";
    }

    // this function shows the question div with a question that hasn't been asked before
    function showQuestion() {
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
        if (getElementCoord("me")[0] === 13 && getElementCoord("me")[1] === 15 && has_medusa1_asked === 0) { // medusa1 asks me her question
            showQuestion();
        }

        if (((getElementCoord("me")[0] === 6 && getElementCoord("me")[1] === 4) || (getElementCoord("me")[0] === 7 && getElementCoord("me")[1] === 4)) && has_dark_voice_asked === 0) {
            showQuestion();
        }

        if (getElementCoord("me")[0] === 9 && getElementCoord("me")[1] === 3 && has_medusa2_asked === 0) {
            showQuestion();
        }

        if (((getElementCoord("me")[0] === 4 && getElementCoord("me")[1] === 1) || (getElementCoord("me")[0] === 5 && getElementCoord("me")[1] === 1)) && has_minotaur_asked === 0) {
            showQuestion();
        }
    }

    // this function keeps the evidence of the question divs that trigger the appearance of an indication div right after they have been closed
    // according to the position of our character and whether the map's specific characters have asked their questions or not
    function questionTriggersEvent() {
        if (getElementCoord("me")[0] === 13 && getElementCoord("me")[1] === 15 && has_medusa1_asked === 0) {
            showIndication("Here's the key for you! <br> And might be you want a kiss?"); // her last message for us
            has_medusa1_asked = 1; // she has askes her question
            has_key = 1; // and she has a key for us
        }

        if (getElementCoord("me")[0] === 5 && getElementCoord("me")[1] === 7 && has_serpent_asked === 0) {
            has_serpent_asked = 1;

            // after the serpent asks his question he moves away from the path and lets us go forward
            image = new Image();
            image.onload = drawCanvasImageElem(ctx, image, 4, 7);
            image.src = map_elements[water[4][7]];

            image = new Image();
            image.onload = drawCanvasImageElem(ctx, image, 5, 8);
            image.src = map_elements["serpent"];

            game[4][7] = "ground";
        }

        if (((getElementCoord("me")[0] === 6 && getElementCoord("me")[1] === 4) || (getElementCoord("me")[0] === 7 && getElementCoord("me")[1] === 4)) && has_dark_voice_asked === 0) {
            has_dark_voice_asked = 1;

            // the dark stranger disappears after he asks his question
            image = new Image();
            image.onload = drawCanvasImageElem(ctx, image, 6, 3);
            image.src = map_elements[water[6][3]];
        }

        if (getElementCoord("me")[0] === 9 && getElementCoord("me")[1] === 3 && has_medusa2_asked === 0) {
            showIndication("You may passsssssssss!");
            has_medusa2_asked = 1;

            image = new Image();
            image.onload = drawCanvasImageElem(ctx, image, 10, 4);
            image.src = map_elements[water[10][4]];

            image = new Image();
            image.onload = drawCanvasImageElem(ctx, image, 11, 3);
            image.src = map_elements["medusa2"];

            game[10][4] = "ground";
            game[11][3] = "medusa2";
        }

        if (((getElementCoord("me")[0] === 4 && getElementCoord("me")[1] === 1) || (getElementCoord("me")[0] === 5 && getElementCoord("me")[1] === 1)) && has_minotaur_asked === 0) {
            showIndication("By the way, the King of Heaven has entrusted me with telling you that he has an urgent task for you! <br> He has opened a gate to Heaven outside.");
            has_minotaur_asked = 1;

            image = new Image();
            image.onload = drawCanvasImageElem(ctx, image, 4, 2);
            image.src = map_elements[water[4][2]];

            game[4][2] = "ground";

            if (getElementCoord("me")[0] === 4 && getElementCoord("me")[1] === 1) {
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, 5, 1);
                image.src = map_elements["minotaur"];

                game[5][1] = "minotaur";
            }
            else if (getElementCoord("me")[0] === 5 && getElementCoord("me")[1] === 1) {
                image = new Image();
                image.onload = drawCanvasImageElem(ctx, image, 4, 1);
                image.src = map_elements["minotaur"];

                game[4][1] = "minotaur";
            }
        }
    }

    // after some indication divs are closed, a question div may appear; we attach the function to the "Next" button
    document.getElementsByClassName("exit_button")[0].addEventListener("click", indicationTriggersEvent, false);
    // after some question divs are closed, an indication div may appear; we attach the function to the "Submit" button
    document.getElementsByClassName("submit_button")[0].addEventListener("click", questionTriggersEvent, false);
}