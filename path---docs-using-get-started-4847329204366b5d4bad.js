webpackJsonp([0xcd703a83f53],{463:function(e,t){e.exports={data:{postBySlug:{html:'<h1 id="getting-started"><a href="#getting-started" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Getting Started</h1>\n<h2 id="download-optic"><a href="#download-optic" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a href="https://useoptic.com/download/">Download Optic</a></h2>\n<h2 id="optic-projects"><a href="#optic-projects" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Optic Projects</h2>\n<p>Every Optic project needs an <code class="language-text">optic.yml</code> file in its root. This configuration file is what Optic uses to build its internal knowledge graph. Teams can include their conventions and any external knowledge they choose.</p>\n<p>Each <code class="language-text">optic.yml</code> file supports the following fields:</p>\n<table>\n<thead>\n<tr>\n<th>Field</th>\n<th>Usage</th>\n<th align="center">Required</th>\n<th align="center">Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>name \n<em>string</em></td>\n<td>name of this project. Should be unique. Only one project with the same name is allowed to be open at any given time.</td>\n<td align="center">yes</td>\n<td align="center"></td>\n</tr>\n<tr>\n<td>parsers \n<em>List[string]</em></td>\n<td>a list of all the parsers you want to use within this project.</td>\n<td align="center">yes</td>\n<td align="center"></td>\n</tr>\n<tr>\n<td>knowledge_paths  \n<em>List[string]</em></td>\n<td>a list of paths in the repo that contain Optic Markdown. Any Optic Markdown found in these paths can be imported by adding its package name to the “knowledge” field (below).</td>\n<td align="center">no</td>\n<td align="center">[]</td>\n</tr>\n<tr>\n<td>skills \n<em>List[string]</em></td>\n<td>a list of all the package names and versions of Optic Knowledge you want to import. The Optic Package Manager (OPM) will check local providers first before resolving remote providers.</td>\n<td align="center">yes</td>\n<td align="center">[]</td>\n</tr>\n<tr>\n<td>exclude \n<em>List[string]</em></td>\n<td>a list of paths Optic should not watch (vendor, node_modules, etc).</td>\n<td align="center">no</td>\n<td align="center">[]</td>\n</tr>\n</tbody>\n</table>\n<blockquote>\n<p>Package names follow the format <code class="language-text">{author}:{name}@{version}</code> (i.e. <code class="language-text">mycompany:authentication@03.2.2</code>). We prefix package names with the author/organization’s username because there may be several users/teams that offer an approach to writing the same kind of code.</p>\n</blockquote>\n<p>Example <code class="language-text">optic.yml</code> file:</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code class="language-yaml"><span class="token key atrule">name</span><span class="token punctuation">:</span> Unnamed Project\n<span class="token key atrule">parsers</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> es7\n\n<span class="token key atrule">knowledge_paths</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> /docs\n\n<span class="token key atrule">skills</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> optic<span class="token punctuation">:</span>express<span class="token punctuation">-</span>js@0.1.0\n  <span class="token punctuation">-</span> optic<span class="token punctuation">:</span>rest@0.1.0\n  <span class="token punctuation">-</span> optic<span class="token punctuation">:</span>mongoose@0.1.0\n\n<span class="token key atrule">exclude</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> vendor/</code></pre>\n      </div>\n<p>There are knowledge packages available for many standard libraries and it is possible to create your own to share publicly or for private use within your organization.</p>\n<p>Once you have configured your Optic project, it is time to get into the code.</p>',timeToRead:2,excerpt:"Getting Started Download Optic Optic Projects Every Optic project needs an   file in its root. This configuration file is what Optic uses to…",frontmatter:{title:"Get Started",cover:null,date:null,category:null,tags:null}},tableOfContents:{chapters:[{title:"What is Optic?",entries:[{entry:{id:"/Users/aidancunniffe/Desktop/optic-homepage/content/lessons/what_is_optic/what-is-optic.md absPath of file",childMarkdownRemark:{fields:{slug:"/docs/what_is_optic/what-is-optic"},frontmatter:{title:"What Is Optic",type:null}}}},{entry:{id:"/Users/aidancunniffe/Desktop/optic-homepage/content/lessons/what_is_optic/another-code-generator.md absPath of file",childMarkdownRemark:{fields:{slug:"/docs/what_is_optic/another-code-generator"},frontmatter:{title:"Another Code Generator?",type:null}}}},{entry:{id:"/Users/aidancunniffe/Desktop/optic-homepage/content/lessons/what_is_optic/technical-overview.md absPath of file",childMarkdownRemark:{fields:{slug:"/docs/what_is_optic/technical-overview"},frontmatter:{title:"Technical Overview",type:null}}}}]},{title:"Using Optic",entries:[{entry:{id:"/Users/aidancunniffe/Desktop/optic-homepage/content/lessons/using/get-started.md absPath of file",childMarkdownRemark:{fields:{slug:"/docs/using/get-started"},frontmatter:{title:"Get Started",type:null}}}},{entry:{id:"/Users/aidancunniffe/Desktop/optic-homepage/content/lessons/using/workflow.md absPath of file",childMarkdownRemark:{fields:{slug:"/docs/using/workflow"},frontmatter:{title:"Workflow",type:null}}}},{entry:{id:"/Users/aidancunniffe/Desktop/optic-homepage/content/lessons/using/properties.md absPath of file",childMarkdownRemark:{fields:{slug:"/docs/using/properties"},frontmatter:{title:"Properties",type:null}}}},{entry:{id:"/Users/aidancunniffe/Desktop/optic-homepage/content/lessons/using/search.md absPath of file",childMarkdownRemark:{fields:{slug:"/docs/using/search"},frontmatter:{title:"Search",type:null}}}},{entry:{id:"/Users/aidancunniffe/Desktop/optic-homepage/content/lessons/using/transform.md absPath of file",childMarkdownRemark:{fields:{slug:"/docs/using/transform"},frontmatter:{title:"Transform",type:null}}}},{entry:{id:"/Users/aidancunniffe/Desktop/optic-homepage/content/lessons/using/sync.md absPath of file",childMarkdownRemark:{fields:{slug:"/docs/using/sync"},frontmatter:{title:"Sync",type:null}}}}]},{title:"Extending Optic",entries:[{entry:{id:"/Users/aidancunniffe/Desktop/optic-homepage/content/lessons/authoring/extending-optic.md absPath of file",childMarkdownRemark:{fields:{slug:"/docs/authoring/extending-optic"},frontmatter:{title:"Extending Optic",type:null}}}},{entry:{id:"/Users/aidancunniffe/Desktop/optic-homepage/content/lessons/authoring/writing-skills.md absPath of file",childMarkdownRemark:{fields:{slug:"/docs/authoring/writing-skills"},frontmatter:{title:"Writing Skills",type:null}}}},{entry:{id:"/Users/aidancunniffe/Desktop/optic-homepage/content/lessons/authoring/knowledge-packages.md absPath of file",childMarkdownRemark:{fields:{slug:"/docs/authoring/knowledge-packages"},frontmatter:{title:"Knowledge Packages",type:null}}}},{entry:{id:"/Users/aidancunniffe/Desktop/optic-homepage/content/lessons/authoring/lenses.md absPath of file",childMarkdownRemark:{fields:{slug:"/docs/authoring/writing-lenses"},frontmatter:{title:"Writing Lenses",type:null}}}},{entry:{id:"/Users/aidancunniffe/Desktop/optic-homepage/content/lessons/authoring/transformations.md absPath of file",childMarkdownRemark:{fields:{slug:"/docs/authoring/defining-transformations"},frontmatter:{title:"Defining Transformations",type:null}}}},{entry:{id:"/Users/aidancunniffe/Desktop/optic-homepage/content/lessons/authoring/schemas.md absPath of file",childMarkdownRemark:{fields:{slug:"/docs/authoring/defining-schemas"},frontmatter:{title:"Defining Schemas",type:null}}}},{entry:{id:"/Users/aidancunniffe/Desktop/optic-homepage/content/lessons/authoring/publishing.md absPath of file",childMarkdownRemark:{fields:{slug:"/docs/authoring/publishing"},frontmatter:{title:"Publishing",type:null}}}},{entry:{id:"/Users/aidancunniffe/Desktop/optic-homepage/content/lessons/authoring/adding-ides.md absPath of file",childMarkdownRemark:{fields:{slug:"/docs/authoring/adding-optic-support-for-new-id-es"},frontmatter:{title:"Adding Optic Support for new IDEs",type:null}}}}]}]},tableOfContentsSkills:{chapters:[{title:"Generate RequestJS calls for every route in an Express backend",entries:[{entry:{id:"/Users/aidancunniffe/Desktop/optic-homepage/content/skills/generate-requestjs.md absPath of file",childMarkdownRemark:{headings:[{value:"Generate RequestJS calls for every route in an Express backend",depth:1},{value:"Requirements",depth:2},{value:"Including Skills",depth:2},{value:"Our First Transform",depth:2},{value:"Generating Networking Calls from your Client Code",depth:2},{value:"Name and Source Annotations",depth:3},{value:"Syncing API & Networking Code",depth:2},{value:"Going Further",depth:2}],fields:{slug:"/skills/generate-request-js-calls-for-every-route-in-an-express-backend"},frontmatter:{title:"Generate RequestJS calls for every route in an Express backend",type:"skill"}}}}]}]}},pathContext:{slug:"/docs/using/get-started",type:null}}}});
//# sourceMappingURL=path---docs-using-get-started-4847329204366b5d4bad.js.map