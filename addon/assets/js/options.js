$(document).ready(() => {
    const nameElm = $('#name');
    const timeElm = $('#link');
    const formElm = $('form');
    formElm.on('submit', () => {
      $('.alert').remove(); //remove previous success alerts, if any
      //get existing alarms
      browser.storage.sync.get(['alarms'])
        .then((result) => {
          let alarms = result.alarms;
          const alarmName = nameElm.val().trim() + '_' + (Math.random() * 100);
          if (!alarms) {
            alarms = [];
          }
          alarms.push({
            content: nameElm.val().trim(),
            time: timeElm.val(),
            alarmName
          });
  
          //set alarms in the storage
          browser.storage.sync.set({alarms})
            .then(() => {
              //TODO schedule notification
              formElm.prepend('<div class="alert alert-success">Shortcut added successfully</div>');
              nameElm.val('');
              timeElm.val('');
            });
        });
      return false; //disable default form submit action
    });
  });


  

  