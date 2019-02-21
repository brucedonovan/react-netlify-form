
**USAGE (docs to be updated soon hopefully ) :**

NPM install: 

`npm i @brucedonovan/react-netlify-form`

-----------

<NetlifyForm formName: *string*.isrequired successFunction: *func*.isRequired, errorFunction: *func*, formFields: *object*.isRequired>

```jsx
<NetlifyForm 
    formName: "myForm"
    successFunction: {handleSuccess()},
    errorFunction: {handleError()},
    formFields: {'name': {nameVar}, 'email': {emailVar}, 'message': {msgVar}}
    > 
</NetlifyForm> 
```

**Please note** that because of clientside rendering of these components, the Netlify bots require a little bit help recognising your form. a 'mock' form should be placed in your html file (index.html) as such: 

```html
    <form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
      <p class="hidden"><label>Don’t fill this out if you're human: <input name="__bf"/></label></p>
      <p><input type="text" name="name"/></p>
      <p><input type="email" name="email"/></p>
      <p><textarea name="message"></textarea></p>
    </form>
```
