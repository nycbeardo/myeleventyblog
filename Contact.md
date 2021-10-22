---
layout: base-layout.njk 
title: Contact
templateClass: tmpl-post
eleventyNavigation:
  key: Contact
  order: 4
---

<h1 id="contact">Contact Me</h1>

 If you want to reach out directly about the content here, to collaborate, or anything else, fill out the form below:


<div class="form">
   <h2 class="form"></h2>
   <form accept-charset="UTF-8" action="https://getform.io/f/dbb6af44-42e0-4bc3-b071-a18c639a296f" method="POST" enctype="multipart/form-data"  target="_blank" id="wpform">
      <div>
         <label>Name:</label>
         <div>
            <input class="forminput1"  type="text" name="first_name" placeholder="Enter your name and surname" required="required">
         </div>
      </div>
      <br>
      <div>
         <label>Email address:</label>
         <div>
            <input class="forminput2"  type="email" name="email" placeholder="Enter your email address" required="required">
         </div>
      </div>
      <br>
      <div>
         <label>Message:</label>
         <div>
            <textarea  class="forminput3" type="text" name="message" placeholder="Enter your message" required="required"></textarea>
         </div>
      </div>
     <div class="upload">
         <label class="form">Upload document:</label>
         <input type="file" name="file" required="required">
      </div> 
      <br>
      <div id="fooDiv">
<label for="foo">Leave this field blank</label>
<input type="text" name="foo" id="foo">
</div>
<script>
(function () {
    var e = document.getElementById("fooDiv");
    e.parentNode.removeChild(e);
})();
</script>
      <input type="hidden" name="utf8" value="✓">
      <button class="submission" type="submit">SUBMIT</button>
   </form>
   <br>
</div>