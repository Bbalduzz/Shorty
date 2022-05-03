$(document).ready(() => {
    const listElement = $('#shortcutList');
  
    browser.storage.sync.get(['alarms'])
      .then((result) => {
        if (result.alarms && result.alarms.length) {
          //loop over the alarms and display them
          result.alarms.forEach((alarm) => {
            appendItem(alarm.content, alarm.time);
          });
        } else {
          //show no items available
          appendItem('No shortcut are available');
        }
      });
      
      $('#optionsLink').on('click', () => {
        browser.runtime.openOptionsPage();
      });
  
    function appendItem(content, badgeContent = null) {
      listElement.append(`
        <a id="shortcr" class="list-group-item d-flex justify-content-between align-items-center" href="${badgeContent}">
          ${content}
          ${badgeContent ? `<span class="badge bg-primary rounded-pill"></span>` : ''}
        </a>
      `);
    }
  });
  