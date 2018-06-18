<template>
  <div class="social-sharing-fixed visible">
    <button class="button-fixed">
      <img class="share-icon" src="~static/images/share.svg" alt="">
    </button>

    <div class="sharing-buttons">
      <a class="icon fb" href="#">
        <img class="share-icon" src="~static/images/fb-logo.svg" alt="">
      </a>
      <a class="icon gplus" href="#">
        <img class="share-icon" src="~static/images/gplus-logo.svg" alt="">
      </a>
      <a class="icon linkedin" href="#">
        <img class="share-icon" src="~static/images/linkedin-logo.svg" alt="">
      </a>
      <a class="icon twitter" href="#">
        <img class="share-icon" src="~static/images/twitter-logo.svg" alt="">
      </a>
      <a class="icon mail" href="#">
        <img class="share-icon" src="~static/images/mail.svg" alt="">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>

button {
  border: none;
  outline: none;
}

.social-sharing-fixed {
  position: fixed; 
  right: 2rem;
  bottom: 2rem;
  z-index: 1000;
  height: 50px;
  width: 50px;
}

.social-sharing-fixed:hover {
  height: 340px;
}

.social-sharing-fixed .button-fixed {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute; 
  bottom: 0; 
  left: 0; 
  z-index: 10;
  background-color: #5373D7;
  height: 50px; 
  width: 50px;
  border-radius: 50%;
}

.social-sharing-fixed .button-fixed:before {
  content: ''; 
  display: block; 
  position: absolute; 
  top: 0; 
  left: 0; 
  z-index: -1;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #5373D7;
  -webkit-transform: translateZ(0); 
          transform: translateZ(0); 
  -webkit-transition: all 0.45s cubic-bezier(.15,.2,.1,1);
          transition: all 0.45s cubic-bezier(.15,.2,.1,1);
}

.social-sharing-fixed:hover .button-fixed:before {
  box-shadow: 1px 5px 15px rgba(0,0,0,.2);
  -webkit-transform: scale(1.23) translateZ(0); 
         transform: scale(1.23) translateZ(0);
}

.button-fixed:after, 
.social-sharing-fixed .sharing-buttons > a:after {
  opacity: 0; 
  content: ''; 
  display: block;
  position: absolute; 
  top: 0; 
  left: 0; 
  width: 100%; 
  height: 100%;
  background-color:#fff; 
  border-radius: 50%;
}

.social-sharing-fixed:hover .button-fixed:after {
  -webkit-animation: socialButtonFlash 0.45s cubic-bezier(.15,.2,.1,1) forwards; 
          animation: socialButtonFlash 0.45s cubic-bezier(.15,.2,.1,1) forwards;
}

@keyframes socialButtonFlash{
  0% {
    opacity: 0; 
    transform: scale(1);
  }

  25% {
    opacity: .22;  
    transform: scale(1.1);
  }

  100% {
    opacity: 0; 
    transform: scale(1.2);
  }
}

.social-sharing-fixed .sharing-buttons a:after {
  -webkit-transition: opacity .25s cubic-bezier(.15,.2,.1,1); 
          transition: opacity .25s cubic-bezier(.15,.2,.1,1);
}

.social-sharing-fixed .sharing-buttons a:hover:after {
  opacity: .2;
}

.social-sharing-fixed .sharing-buttons {
  position: absolute; 
  height: 50px; 
  width: 50px; 
  bottom: 0; 
  left: 0; 
  z-index: 1; 
}

.social-sharing-fixed .sharing-buttons > a {
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 7px;
  height: 36px; 
  width: 36px;
  background-color: #5373D7;
  box-shadow: 0px 4px 10px rgba(0,0,0,.2); 
  border-radius: 50%; 
  -webkit-transition:all 0.45s cubic-bezier(.15,.2,.1,1); 
          transition:all 0.45s cubic-bezier(.15,.2,.1,1);
}

.social-sharing-fixed .sharing-buttons a:nth-child(1) {
  -webkit-transform:translateY(0px) scale(0);
         transform: translateY(0px) scale(0); 
}

.social-sharing-fixed .sharing-buttons a:nth-child(2) {
  -webkit-transform: translateY(-36px) scale(0); 
          transform: translateY(-36px) scale(0);
}

.social-sharing-fixed .sharing-buttons a:nth-child(3) {
  -webkit-transform: translateY(-86px) scale(0); 
          transform: translateY(-86px) scale(0);
}

.social-sharing-fixed .sharing-buttons a:nth-child(4) {
  -webkit-transform: translateY(-136px) scale(0); 
          transform: translateY(-136px) scale(0);
}

.social-sharing-fixed .sharing-buttons a:nth-child(5) {
  -webkit-transform: translateY(-186px) scale(0); 
          transform: translateY(-186px) scale(0);
}

/* sets all links to 1 and add transition */

.social-sharing-fixed:hover .sharing-buttons > a {
  -webkit-transition: all 0.45s cubic-bezier(.15,.2,.1,1);
          transition: all 0.45s cubic-bezier(.15,.2,.1,1);
  opacity: 1;
}

.social-sharing-fixed:hover .sharing-buttons a:nth-child(1) {
  -webkit-transform: translateY(-56px) scale(1); 
          transform: translateY(-56px) scale(1); 
}

.social-sharing-fixed:hover .sharing-buttons a:nth-child(2) {
  -webkit-transform: translateY(-106px) scale(1); 
          transform: translateY(-106px) scale(1);  
}

.social-sharing-fixed:hover .sharing-buttons a:nth-child(3) {
  -webkit-transform: translateY(-156px) scale(1); 
          transform: translateY(-156px) scale(1);  
}

.social-sharing-fixed:hover .sharing-buttons a:nth-child(4) {
  -webkit-transform: translateY(-206px) scale(1); 
          transform: translateY(-206px) scale(1);  
}

.social-sharing-fixed:hover .sharing-buttons a:nth-child(5) {
  -webkit-transform: translateY(-256px) scale(1); 
          transform: translateY(-256px) scale(1);  
}

.share-icon {
  width: 20px;
}

.linkedin .share-icon {
  width: 15px;
}

.fb .share-icon {
  height: 20px;
}
</style>
