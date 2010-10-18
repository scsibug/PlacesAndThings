var place_prefix = "pat.p."
var thing_prefix = "pat.t."

function addPlace(name) {
  window.localStorage[place_prefix+name] = name
}
function addThing(name) {
  window.localStorage[thing_prefix+name] = name
}

function debugPlaces() {
  var p = getPlaces();
  $.each(p, function(k,v) {
    alert("key: "+k+", value: "+v);
  });
}

function displayPlaces() {
  var p = getPlaces();
  $('#display-places-ulist').remove();
  var list = $("<ul>", {"class": "ui-listbox-list",
                        "id": "display-places-ulist",
                        "data-inset": "true"}
              ).appendTo('#placesIntro');
  $.each(p,function(k,v) {
    $('<li><a href="#'+k+'">'+k+'</a></li>').appendTo(list);
  });
  list.listview();
}

function getPlaces() {
  // places are identified as keys with prefix "pat.p."
  var places = new Object();
  keycount = window.localStorage.length;
  for(i=0;i<keycount;i++) {
    key = localStorage.key(i);
    if (key.substr(0,6) == place_prefix) {
      places[key.substr(6)] = window.localStorage.getItem(key)
    }
  }
  return places
}

function displayThings() {
  var p = getThings();
  $('#display-things-ulist').remove();
  var list = $("<ul>", {"class": "ui-listbox-list",
                        "id": "display-things-ulist",
                        "data-inset": "true"}
              ).appendTo('#thingsIntro');
  $.each(p,function(k,v) {
    $('<li><a href="#'+k+'">'+k+'</a></li>').appendTo(list);
  });
  list.listview();
}

function getThings() {
  // things are identified as keys with prefix "pat.t."
  var things = new Object();
  keycount = window.localStorage.length;
  for(i=0;i<keycount;i++) {
    key = localStorage.key(i);
    if (key.substr(0,6) == thing_prefix) {
      things[key.substr(6)] = window.localStorage.getItem(key)
    }
  }
  return things
}

// clear all saved content
function clearLocalStorage() {
  window.localStorage.clear();
}