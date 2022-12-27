// import mixpanel from 'mixpanel-browser';

// const initSendInBlue = () => {
//     (function(d, w, c) {
//         w.SibConversationsID = process.env.REACT_APP_SEND_IN_BLUE_TOKEN;
//         w[c] = w[c] || function() {
//             (w[c].q = w[c].q || []).push(arguments);
//         };
//         var s = d.createElement('script');
//         s.async = true;
//         s.src = 'https://conversations-widget.sendinblue.com/sib-conversations.js';
//         if (d.head) d.head.appendChild(s);
//     })(document, window, 'SibConversations');
// }

// const initGoogleTagManager = () => {

//     const tagToken = process.env.REACT_APP_GOOGLE_TAG_TOKEN;

//     // Global site tag (gtag.js) - Google Ads
//     (function(d, w, c) {
//         var s = d.createElement('script');
//         s.async = true;
//         s.src = `https://www.googletagmanager.com/gtag/js?id=${tagToken}`;
//         if (d.head) d.head.appendChild(s);
//     })(document, window, 'SibConversations');

//     window.dataLayer = window.dataLayer || [];
//     function gtag(){
//         window.dataLayer.push(arguments);
//     }
//     gtag('js', new Date());

//     gtag('config', `${tagToken}`);

//     // Event snippet for Subscribe conversion page
//     gtag('event', 'conversion', {'send_to': `${tagToken}/99ahCOP0v84DEN2X4eUo`});
// }

// const getQueryParam = (url, param) => {
//     // Expects a raw URL
//     param = param.replace(/[[]/, "\[").replace(/[]]/, "\]");
//     var regexS = "[\?&]" + param + "=([^&#]*)",
//       regex = new RegExp(regexS),
//       results = regex.exec(url);
//     if (results === null || (results && typeof (results[1]) !== 'string' && results[1].length)) {
//       return '';
//     } else {
//       return decodeURIComponent(results[1]).replace(/\W/gi, ' ');
//     }
// };
// const initMixpanel = () => {

//     mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN);
//     mixpanel.track('Landing Page');
    
//     const campaignParams = () => {
//         const params = {};
//         const firstParams = {};
//         const campaignKeywords = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
      
//         campaignKeywords.forEach(campaignKeyword => {
//           const keyword = getQueryParam(document.URL, campaignKeyword);
//           if (keyword.length) {
//             params[`${campaignKeyword} [last touch]`] = keyword;
//             firstParams[`${campaignKeyword} [first touch]`] = keyword;
//           }
//         });
      
//         mixpanel.people.set(params);
//         mixpanel.people.set_once(firstParams);
//         mixpanel.register(params);
//     };
//     campaignParams();
// }

// const scriptInitialize = () => {
//     initSendInBlue()
//     initGoogleTagManager()
//     initMixpanel()
// }

// export default scriptInitialize