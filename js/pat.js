var place_prefix = "pat.p."
var thing_prefix = "pat.t."
var place_count_key = "pat.places.count"
var thing_count_key = "pat.places.count"
function addPlace(name) {
  var p = new Object()
  p.name = name
  window.localStorage[place_prefix+name] = JSON.stringify(p);
}
function addThing(name) {
  var t = new Object()
  t.name = name
  window.localStorage[thing_prefix+name] = JSON.stringify(t);
}

function countPlaces() {
  var c = 0;
  $.each(getPlaces(),function(k,v) {
    c++;
  });
  return c
}

function countThings() {
  var c = 0;
  $.each(getThings(),function(k,v) {
    c++;
  });
  return c
}

function updatePlacesDisplay() {
  var p = getPlaces();
  // In the main page, show the count of places
  $('#places-count').text(countPlaces());
  // In places page, show a list of places
  $('#display-places-ulist').remove();
  var list = $("<ul>", {"class": "ui-listbox-list",
                        "id": "display-places-ulist",
                        "data-inset": "true"}
              ).appendTo('#placesIntro');
  $.each(p,function(k,v) {
    $('<li><a href="#place-detail-'+k+'">'+v.name+'</a></li>').appendTo(list);
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
      places[key.substr(6)] = JSON.parse(window.localStorage.getItem(key));
    }
  }
  return places
}

function updateThingsDisplay() {
  var p = getThings();
  // In the main page, show the count of places
  $('#things-count').text(countThings());
  // In things page, show list of things
  $('#display-things-ulist').remove();
  var list = $("<ul>", {"class": "ui-listbox-list",
                        "id": "display-things-ulist",
                        "data-inset": "true"}
              ).appendTo('#thingsIntro');
  $.each(p,function(k,v) {
    $('<li><a href="#thing-detail-'+k+'">'+v.name+'</a></li>').appendTo(list);
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
      things[key.substr(6)] = JSON.parse(window.localStorage.getItem(key));
    }
  }
  return things
}

// clear all saved content
function clearLocalStorage() {
  window.localStorage.clear();
}