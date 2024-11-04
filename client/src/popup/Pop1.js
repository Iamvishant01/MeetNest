import React from 'react'

export default function Pop1() {
  return (
    <div>
      <div class="popup" id="mobilePopup">
  <div class="popup-content">
    <h2>Notice</h2>
    <p>Video calling available only on Larger Screens this time</p>
    <button onClick={{closePopup}}>Close</button>
  </div>
</div>
    </div>
  )
}
function closePopup() {
    document.getElementById('mobilePopup').style.display = 'none';
  }