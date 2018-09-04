webpackJsonp([65122750110790],{446:function(e,t){e.exports={data:{markdownRemark:{html:'<p>The last week and a half were dedicated to responding to the biggest issues our early users faced, launching our beautiful new website, and increasing the scope of what you can accomplish with transformations.</p>\n<h3 id="new-website--video"><a href="#new-website--video" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>New Website &#x26; Video</h3>\n<p>In the beginning of June our website got a big overhaul in a collaboration between <a href="http://www.diagramoffice.co/">Diagram Office</a>, a studio run by <a href="http://www.diagramoffice.co/information.html">Sam Cox</a>, and <a href="http://www.praxis-story.com/">Praxis</a> which is run by <a href="https://twitter.com/nicholas_sailer?lang=en">Nicholas Sailer</a>. The guys did great work and rather than post pictures here I’ll just encourage you all to <a href="http://useoptic.com">check it out</a> and share your feedback.</p>\n<p>We also produced a <a href="https://www.youtube.com/watch?v=sMXcKMKYZ8c">comprehensive product video</a> that gives a brief demo of how Optic works. The video has gotten great reviews so far and many people have shared with me that it helped them “get” Optic. If you’re curious about the details behind Optic you should take a look.</p>\n<h3 id="the-installer"><a href="#the-installer" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The Installer</h3>\n<p>Over the last two weeks we took a good look at our website analytics and realized that something didn’t add up. We were seeing hundreds of downloads a day, but very few users managed to get Optic working on their machines. After talking to some of these users who failed to get Optic installed we realized our install process needed to be improved.</p>\n<p>So we built and shipped an installer for Optic and we made it accessible over the command line. Just type “npm install optic-installer -g” and it will start our CLI installer wizard. We’ve made the optic-installer the only supported way to install Optic and since making that change we’ve seen 100% of people who use the installer get Optic installed successfully.</p>\n<p>The Wizard:</p>\n<ul>\n<li>\n<p>Installs the standalone Optic App</p>\n</li>\n<li>\n<p>Installs Optic plugins to any supported IDEs on your computer</p>\n</li>\n<li>\n<p>Launches the Optic Demo Project for you</p>\n</li>\n</ul>\n<p><img src="https://cdn-images-1.medium.com/max/2424/1*VELJT7ULvQgxDtr3gdzodg.png"></p>\n<p><img src="https://cdn-images-1.medium.com/max/2852/1*0ZSutI47DfxAlkqjqfHRWg.png"></p>\n<h3 id="enhanced-transformations"><a href="#enhanced-transformations" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Enhanced Transformations</h3>\n<p>As more users have gotten into Optic it became apparent that we needed to expand the scope of the transformations system. Over the last week and a half we’ve added support for the following types of transformations. You can check out their feature branches on GitHub now or wait for the next release that comes out this week.</p>\n<p><strong>Mutating Transformations **bring</strong> <strong>the</strong> **ability to use a transformation to mutate an existing model or set of models. Some examples where this might come in handy is if you wanted to “Add OAuth to Route” or “Add Action to Reducer”. You can already update a model’s properties in Optic, but until now you couldn’t update an existing model’s children nodes. By bringing this capability to Optic in the form of a transformation we make it possible to bridge multiple sections of Optic knowledge together into one useful patch.</p>\n<p>Mutating transformations are not designed to work with the sync system. They’re meant to be used as one time commands to add features to your existing code.</p>\n<p>**Multi-Transformations **allow transformation functions to do multiple things at once. You can create a multi-transformation by returning an array of ‘Generate’ or ‘Mutate’ calls in a transformation function. These calls can be used to stage changes within the same file (“Generate all the CRUD routes for User”) or across multiple files (“Add Action to Reducer”).</p>\n<p>Multi-Transformations also can not by synced, but since they are are** **composed of a series of transformations each of those can sync. For instance if you generated all the CRUD routes for a model, each individual route would sync directly with the model not by way of the multi-transformation that created it.</p>\n<h2 id="thank-you-everyone-for-your-continued-support-stay-tuned-for-the-upcoming-release-the-new-transformations-will-enable-a-lot-more-use-cases"><a href="#thank-you-everyone-for-your-continued-support-stay-tuned-for-the-upcoming-release-the-new-transformations-will-enable-a-lot-more-use-cases" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Thank you everyone for your continued support. Stay tuned for the upcoming release. The new transformations will enable a lot more use cases!</h2>',timeToRead:3,excerpt:"The last week and a half were dedicated to responding to the biggest issues our early users faced, launching our beautiful new website, and…",frontmatter:{title:"Optic Installer",cover:"logos/optic-logo.png",date:"2018-06-10T00:00:00.000Z",category:"tech",tags:["programming","ai","automation","software development"]},fields:{slug:"/blog/optic-installer"}}},pathContext:{slug:"/blog/optic-installer"}}}});
//# sourceMappingURL=path---blog-optic-installer-1243ab4839e991c4388c.js.map