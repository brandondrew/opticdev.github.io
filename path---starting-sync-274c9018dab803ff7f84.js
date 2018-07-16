webpackJsonp([0xdad75f7065f4],{447:function(e,t){e.exports={data:{markdownRemark:{html:'<p>This post is the update for both the week of the 22nd and the week of the 29th.</p>\n<h3 id="sync-design"><a href="#sync-design" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Sync Design</h3>\n<p>During the week of the 22nd we focused exclusively on designing the sync feature. We made some important design choices that we want to share with the community:</p>\n<ul>\n<li>**No hidden information — **Optic doesn’t guess what you want to sync or keep the relationships in some unreadable config file. All the relationships between parts of your code appear within the code itself. Annotations are used to name the models found in your code and then set those models as the source of another part of code. When you transform code these annotations will be added automatically unless you opt-out of creating a relationship between the source of the transformation and its output.</li>\n</ul>\n<p><img src="https://cdn-images-1.medium.com/max/2852/1*-BfaATdXbueW4SEgDlva9A.png" alt="“//name: User Model” names this section of code “User Model”"><em>“//name: User Model” names this section of code “User Model”</em></p>\n<p><img src="https://cdn-images-1.medium.com/max/2852/1*idNA2TOumhnIqOsBakFsDw.png" alt="“//source: User Model -> optic:mongoose@0.1.0/createroutefromschema” defines a relationship between “User Model” and this section of code. Changes to “User Model” will trigger changes to this code."><em>“//source: User Model -> optic:mongoose@0.1.0/createroutefromschema” defines a relationship between “User Model” and this section of code. Changes to “User Model” will trigger changes to this code.</em></p>\n<ul>\n<li>\n<p>**Sync will not happen automatically — **Let’s be realistic, the last thing any of us want is a bot making unannounced changes to our code as we work. Optic maintains a dependency graph of all the key sections of code and when it sees a change that will trigger a sync it notifies the programmer. The programmer can then review Optic’s pull request, make any changes they see fit, and update the source code.</p>\n</li>\n<li>\n<p>**Sync Pull Requests walk entire tree — **The sync graphs Optic constructs for a project can be very complex. For instance a form might be synced with a route, which might be synced with a model definition (User Model -> User Create Route -> User Create Form). If you change the User Model, Optic will walk the entire sync graph and stage changes for each affected relationship. There are sanity checks built in that ignore circular dependencies and other invalid states that could happen when computing the patch.</p>\n</li>\n<li>\n<p>**Single Project (Sorry!) — **In Version 1.0 of Optic (launching this month) the sync feature will only work within the context of a single project. We’re working to make it available across multiple projects i.e. your node backend syncs with your Android Kotlin Project.</p>\n</li>\n</ul>\n<h3 id="sync-implementation"><a href="#sync-implementation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Sync Implementation</h3>\n<p>During the week of the 29th we implemented the entire Version 1.0 Sync Feature within the optic-core project (<a href="https://github.com/opticdev/optic/tree/feature/sync">see feature branch here</a>). Here’s a quick slideshow of sync in action:</p>\n<p><img src="https://cdn-images-1.medium.com/max/5760/1*oxoN8zJTOjdLtfeDE-eB2A.png" alt="Here we have a Model Definition for Users and a Post Route we created by transforming that model. If you calculate a sync diff on this example you get no changes"><em>Here we have a Model Definition for Users and a Post Route we created by transforming that model. If you calculate a sync diff on this example you get no changes</em></p>\n<p><img src="https://cdn-images-1.medium.com/max/5760/1*A_sYsrJx17OQwKLwCnlqGQ.png" alt="Here we’ve changed the name of the model from ‘users’ to ‘people’ and added a new field ‘age’. Before Optic you’d have to manually find and update all the code that depended on the shape of your model. Optic can generate a patch to make these updates for you without overwriting other code you wrote."><em>Here we’ve changed the name of the model from ‘users’ to ‘people’ and added a new field ‘age’. Before Optic you’d have to manually find and update all the code that depended on the shape of your model. Optic can generate a patch to make these updates for you without overwriting other code you wrote.</em></p>\n<p><img src="https://cdn-images-1.medium.com/max/5732/1*9-72GbPoF6kNwb4fiG4Jdw.png" alt="Here’s a look at the Pull Request Optic generated for this file after you changed the model"><em>Here’s a look at the Pull Request Optic generated for this file after you changed the model</em></p>\n<p>As you can see, we’ve only implemented this on the backend. Our next week of work is going to be dedicated to adding a GUI for Sync to the Optic App.</p>\n<h3 id="some-more-thoughts-on-sync"><a href="#some-more-thoughts-on-sync" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Some more thoughts on Sync</h3>\n<p>For months it’s been clear that the sync feature was going to be one of Optic’s big selling points to teams of programmers. To be completely honest I thought it was going to be a months long project to build sync and that really worried me. But the more I thought about it the easier I realized the task would be. The entire backend implementation ended up taking a little less than 8 days.</p>\n<p>How was that possible? Well I had basically everything I needed already built. Optic can extract models from code and update source code to reflect arbitrary changes to those models — that takes care of all sync’s interactions with the raw source code. Optic also maintains a graph of all the code it recognizes in your project — a new edge type ‘DerivedFrom’ was all we needed to store sync relationships. And when it comes time to apply a patch, Arrow’s Change Evaluation interface makes it dead simple to post changes to the code base.</p>\n<p>Optic’s core abstractions made a feature like sync a one week project (<a href="https://github.com/opticdev/optic/blob/feature/sync/core/src/main/scala-2.12/com/opticdev/core/sourcegear/sync/DiffSyncGraph.scala">the diff function was the hardest part</a>). Imagine what else might be possible? What else could you automate? What analytics could you provide teams about their code? What kind of visual tools could you build on top of a codebase?</p>\n<h2 id="thanks-for-all-your-support-10-is-coming-soon"><a href="#thanks-for-all-your-support-10-is-coming-soon" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Thanks for all your support! 1.0 is coming soon</h2>',timeToRead:3,excerpt:"This post is the update for both the week of the 22nd and the week of the 29th. Sync Design During the week of the 22nd we focused…",frontmatter:{title:"Starting Sync",cover:"logos/optic-logo.png",date:"5/7/2018",category:"tech",tags:["programming","ai","automation","software development"]},fields:{slug:"/starting-sync"}}},pathContext:{slug:"/starting-sync"}}}});
//# sourceMappingURL=path---starting-sync-274c9018dab803ff7f84.js.map