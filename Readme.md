# (Obsolete) dxPopup - How to create a custom alert message

<p><strong>Starting with 14.1 follow the recommendations from the <a href="https://www.devexpress.com/Support/Center/p/Q557034">How to use the same dxPopup or another widget on different views</a> article or use <a href="http://js.devexpress.com/Documentation/ApiReference/Utils/ui/dialog/Methods/?version=14_1#customoptions">DevExpress.ui.dialog.custom</a>.</strong><br /><br />This task can be implemented using the <strong>dxPopup</strong> control.</p>
<br />
<p>If you need to show a message, perform the following steps:</p>
<p>1. Create a new DIV and add it to the <strong>viewPort</strong> DIV;</p>
<p>2. Create the <strong>dxPopup</strong> widget in the created container and specify settings for this widget;</p>
<p>3. Show a popup.</p>
<br />
<p>If you need to hide a popup, perform the following steps:</p>
<p>1. Find instance of our popup using jQuery;</p>
<p>2. Hide a popup;</p>
<p>3. Remove DIV (popup container) from the <strong>viewPort</strong> DIV.</p>
<br />
<p>This example demonstrates this approach in action.</p>
<p><strong>See also:<br /> </strong><a href="http://phonejs.devexpress.com/Documentation/ApiReference/Widgets/Utils"><strong><u>dialog</u></strong></a></p>

<br/>


