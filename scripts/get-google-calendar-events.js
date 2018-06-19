function getGoogleCalendarEvents(calendarID, publicAPIKey) {
  let url = 'https://www.googleapis.com/calendar/v3/calendars/' + calendarID + '/events?key=' + publicAPIKey;
  let events;
  let request = new XMLHttpRequest();
  request.open('GET', url, false);
  request.onload = function() {
    if (this.status >= 200 && this.status < 400) {
      events = JSON.parse(this.responseText).items;
      console.log('Success');
    } else {
      console.log('Failure');
    }
  }
  request.onerror = function() {
    console.log('Error');
  }
  request.send();

  console.log(events);
}

getGoogleCalendarEvents(,);
