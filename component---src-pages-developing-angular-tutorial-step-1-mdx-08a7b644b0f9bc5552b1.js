"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[474959],{320697:function(e,n,t){t.r(n);var a=t(28453),l=t(296540),o=t(725441);function r(e){const n=Object.assign({p:"p",h2:"h2",a:"a",strong:"strong",code:"code",h3:"h3",pre:"pre",h5:"h5",ul:"ul",li:"li",h4:"h4"},(0,a.R)(),e.components),{PageDescription:t,AnchorLinks:r,AnchorLink:s,InlineNotification:i}=n;return s||c("AnchorLink",!0),r||c("AnchorLinks",!0),i||c("InlineNotification",!0),t||c("PageDescription",!0),l.createElement(l.Fragment,null,l.createElement(t,null,l.createElement(n.p,null,"Starting with the Carbon Angular, there are two ways to begin working with\nCarbon components. By the end, these two methods will produce the same result.")),"\n",l.createElement(r,null,l.createElement(s,null,"Prerequisites"),l.createElement(s,null,"Install Angular CLI"),l.createElement(s,null,"Create an Angular App"),l.createElement(s,null,"Install Carbon"),l.createElement(s,null,"Run the app"),l.createElement(s,null,"Add UI Shell"),l.createElement(s,null,"Create pages"),l.createElement(s,null,"Add routing"),l.createElement(s,null,"Submit pull request")),"\n",l.createElement(n.h2,null,"Preview"),"\n",l.createElement(n.p,null,"A ",l.createElement(n.a,{href:"https://angular-step-2-carbon-tutorial.netlify.com"},"preview")," of what you will\nbuild:"),"\n",l.createElement(o.A,{height:"200",title:"Carbon Angular Tutorial Step 1",src:"https://angular-step-2-carbon-tutorial.netlify.com",frameborder:"no",allowtransparency:"true",allowfullscreen:!0}),"\n",l.createElement(i,null,l.createElement(n.p,null,l.createElement(n.strong,null,"Note:")," If you get lint errors when you copy the code from the snippets, run\n",l.createElement(n.code,null,"ng lint --fix")," to fix them.")),"\n",l.createElement(n.h2,null,"Prerequisites"),"\n",l.createElement(n.h3,null,"Fork, clone and branch"),"\n",l.createElement(n.p,null,"This tutorial has an accompanying GitHub repository called\n",l.createElement(n.a,{href:"https://github.com/carbon-design-system/carbon-tutorial-angular"},"carbon-tutorial-angular"),"\nthat we’ll use as a starting point for each step."),"\n",l.createElement(n.h3,null,"Fork"),"\n",l.createElement(n.p,null,"To begin, fork\n",l.createElement(n.a,{href:"https://github.com/carbon-design-system/carbon-tutorial-angular"},"carbon-tutorial-angular"),"\nusing your GitHub account."),"\n",l.createElement(n.h3,null,"Clone"),"\n",l.createElement(n.p,null,"Go to your forked repository, copy the SSH or HTTPS URL and in your terminal run\nthe two commands to get the repository in your local file system and enter that\ndirectory."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-bash"},"git clone [your fork SSH/HTTPS]\ncd carbon-tutorial-angular\n")),"\n",l.createElement(n.h3,null,"Add upstream remote"),"\n",l.createElement(n.p,null,"Add a remote called ",l.createElement(n.code,null,"upstream")," so we can eventually submit a pull request once\nyou have completed this tutorial step."),"\n",l.createElement(n.h5,null,"SSH:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-bash"},"git remote add upstream git@github.com:carbon-design-system/carbon-tutorial-angular.git\n")),"\n",l.createElement(n.p,null,"Or, if you prefer to use HTTPS instead of SSH with your remotes:"),"\n",l.createElement(n.h5,null,"HTTPS:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-bash"},"git remote add upstream https://github.com/carbon-design-system/carbon-tutorial-angular.git\n")),"\n",l.createElement(n.p,null,"Verify that your forked repository remotes are correct:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-bash"},"git remote -v\n")),"\n",l.createElement(n.p,null,"Your terminal should output something like this:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-bash"},"origin\t[your forked repo] (fetch)\norigin\t[your forked repo] (push)\nupstream\tgit@github.com:carbon-design-system/carbon-tutorial-angular.git (fetch)\nupstream\tgit@github.com:carbon-design-system/carbon-tutorial-angular.git (push)\n")),"\n",l.createElement(n.h3,null,"Branch"),"\n",l.createElement(n.p,null,"Now that we have our repository set up, let’s check out the branch for this\ntutorial step’s starting point. Run the two commands:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-bash"},"git fetch upstream\ngit checkout -b angular-step-1 upstream/angular-step-1\n")),"\n",l.createElement(n.h3,null,"Install Angular CLI"),"\n",l.createElement(n.p,null,"Since we are starting from scratch, we need to first install Angular CLI.\nCurrently you need to install Angular CLI Version 8.x to work through this\ntutorial."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-bash"},"npm install -g @angular/cli\n")),"\n",l.createElement(i,null,l.createElement(n.p,null,l.createElement(n.strong,null,"Note:")," If you are using macOS you might need to execute as a ",l.createElement(n.code,null,"sudo")," command.")),"\n",l.createElement(n.h3,null,"Create an Angular App"),"\n",l.createElement(n.p,null,"Now that we have our environment set up, starting a new Angular app is easy! If\nyou haven’t set up the environment yet, please do so using the steps provided in\nPrerequisites (above). We will be using the Angular CLI to create and generate\nour components. It can also generate services, router, components, and\ndirectives."),"\n",l.createElement(n.p,null,"To create a new Angular project with Angular CLI, just run:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-bash"},"ng new carbon-angular-tutorial\n")),"\n",l.createElement(n.p,null,"This will create the new project within the current directory. Make sure you do\nthis within the cloned fork of the project. When you get prompted, enter the\nfollowing."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-bash"},"? Would you like to add Angular routing? Yes\n? Which stylesheet format would you like to use? SCSS\n")),"\n",l.createElement(n.p,null,"This command will install the Angular app with all the configurations needed.\nWithin the project folder ",l.createElement(n.code,null,"carbon-angular-tutorial"),", the ",l.createElement(n.code,null,"src")," directory should\nhave the following structure:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-bash"},"carbon-angular-tutorial\n...\n  ├── src\n    ├── app\n    │   ├── app-routing.module.ts\n    │   ├── app.component.html\n    │   ├── app.component.scss\n    │   ├── app.component.spec.ts\n    │   ├── app.component.ts\n    │   └── app.module.ts\n    ├── assets\n    ├── environments\n    │   ├── environment.prod.ts\n    │   └── environment.ts\n    ├── favicon.ico\n    ├── index.html\n    ├── main.ts\n    ├── polyfills.ts\n    ├── styles.scss\n    └── test.ts\n")),"\n",l.createElement(n.h3,null,"Install Carbon"),"\n",l.createElement(n.p,null,"Even though we installed some dependencies while creating the new app, we’ve yet\nto install the Carbon packages:"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.code,null,"carbon-components")," - Component styles"),"\n",l.createElement(n.li,null,l.createElement(n.code,null,"carbon-components-angular")," - Angular components"),"\n",l.createElement(n.li,null,l.createElement(n.code,null,"@carbon/icons")," - Carbon icons"),"\n"),"\n",l.createElement(n.p,null,"Run the following command to install the packages:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-bash"},"npm install carbon-components carbon-components-angular @carbon/icons\n")),"\n",l.createElement(n.p,null,"The following links can be useful depending on the versions of Angular and\nCarbon you wish to use. They provide detailed information about the components\nand the global configuration of the design system. Additionally, they may cover\nalternative methods for configuring Carbon, which can vary based on the Angular\nversion and any additional libraries available. Keep in mind that the\nconfiguration for ‘styles.scss’ may also vary.:"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://angular.carbondesignsystem.com/?path=/docs/getting-started--docs"},"Getting Started with Carbon for Angular")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://angular.carbondesignsystem.com/documentation/index.html"},"Carbon Design System Documentation")),"\n"),"\n",l.createElement(n.h4,null,"Import carbon-components styles"),"\n",l.createElement(n.p,null,"In ",l.createElement(n.code,null,"src/styles.scss"),", import the Carbon styles by adding the following to the\ntop of the file:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-scss",metaData:"path=src/styles.scss"},"@import '~carbon-components/scss/globals/scss/styles';\n")),"\n",l.createElement(n.h3,null,"Run the app"),"\n",l.createElement(n.p,null,"Now we can run our app for a quick preview inside the browser."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-bash"},"npm start\n")),"\n",l.createElement(n.p,null,"Your app should now be running with the message:\n",l.createElement(n.code,null,"** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **")),"\n",l.createElement(n.p,null,"Before we start adding components we want to start with an empty project, so\ndelete everything in ",l.createElement(n.code,null,"app.component.html")," except for the ",l.createElement(n.code,null,"router-outler"),". We\nwill also have to delete the test that was associated with this code. So in\n",l.createElement(n.code,null,"app.component.spec.ts"),", delete the ",l.createElement(n.code,null,"should render title")," and\n",l.createElement(n.code,null,"should have as title 'carbon-angular-tutorial'")," test."),"\n",l.createElement(n.h3,null,"Add UI Shell"),"\n",l.createElement(n.p,null,"Next, we’re going to create an Angular component called ",l.createElement(n.code,null,"Header")," to use with the\nUI Shell Carbon component. Using Angular CLI we will create this component\ninside the ",l.createElement(n.code,null,"src/app")," directory."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-bash"},"ng g component header --lint-fix\n")),"\n",l.createElement(n.h5,null,"Folder structure"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-bash"},"src/app/header\n├── header.component.html\n├── header.component.scss\n├── header.component.spec.ts\n└── header.component.ts\n")),"\n",l.createElement(n.h4,null,"Import UI Shell"),"\n",l.createElement(n.p,null,"Next we’ll import our Carbon UI Shell components into ",l.createElement(n.code,null,"app.module.ts"),",\n",l.createElement(n.code,null,"app.component.spec.ts")," and ",l.createElement(n.code,null,"header.component.spec.ts"),". Set up the file like so:"),"\n","\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript",metaData:"path=src/app/app.module.ts"},"import { BrowserModule } from '@angular/platform-browser';\nimport { NgModule } from '@angular/core';\n\nimport { AppRoutingModule } from './app-routing.module';\nimport { AppComponent } from './app.component';\nimport { HeaderComponent } from './header/header.component';\n\n// carbon-components-angular default imports\nimport { UIShellModule, IconModule } from 'carbon-components-angular';\n\n@NgModule({\n  declarations: [\n    AppComponent,\n    HeaderComponent\n  ],\n  imports: [\n    BrowserModule,\n    AppRoutingModule,\n    UIShellModule,\n    IconModule\n  ],\n  bootstrap: [AppComponent]\n})\nexport class AppModule { }\n")),"\n","\n","\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript",metaData:"path=src/app/app.component.spec.ts,src/app/header/header.component.spec.ts"},"import { UIShellModule } from 'carbon-components-angular/ui-shell/ui-shell.module';\n")),"\n","\n","\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript",metaData:"path=src/app/app.component.spec.ts,src/app/header/header.component.spec.ts"},"TestBed.configureTestingModule({\n  declarations: [HeaderComponent],\n  imports: [UIShellModule]\n});\n")),"\n","\n",l.createElement(i,null,l.createElement(n.p,null,l.createElement(n.strong,null,"Note:")," You can find a description of the different components used in UI\nShell in our\n",l.createElement(n.a,{href:"https://github.com/IBM/carbon-components-angular/tree/master/src/ui-shell"},"carbon-components-angular"),"\npackage.")),"\n",l.createElement(n.h4,null,"Import and register icons"),"\n",l.createElement(n.p,null,"Now let’s import the icons from our ",l.createElement(n.code,null,"@carbon/icons")," package. To improve tree\nshaking & keep the size of our app small, import only the required icons. To do\nso, import ",l.createElement(n.code,null,"Notification20"),", ",l.createElement(n.code,null,"UserAvatar20"),", and ",l.createElement(n.code,null,"AppSwitcher20")," in\n",l.createElement(n.code,null,"app.module.ts"),"."),"\n","\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript",metaData:"path=src/app/header/app.modules.ts"},"import Notification20 from '@carbon/icons/es/notification/20';\nimport UserAvatar20 from '@carbon/icons/es/user--avatar/20';\nimport AppSwitcher20 from '@carbon/icons/es/app-switcher/20';\n")),"\n","\n",l.createElement(n.p,null,"Now you need to register the icon via ",l.createElement(n.code,null,"IconService")," that also needs to be\nimported from ",l.createElement(n.code,null,"carbon-components-angular")," module. After importing IconService\nyou need to inject it in component constructor and us it in OnInit life cycle\ncomponent hook. There are 2 methods for icon registration ",l.createElement(n.code,null,".register()")," which\naccepts only one icon and ",l.createElement(n.code,null,".registerAll()")," which accepts array of icons. As we\nare going to use more than one icon we are going to use the later method as\nbelow."),"\n","\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript",metaData:"path=src/app/header/header.component.ts"},'import { IconService } from "carbon-components-angular";\n...\n\nconstructor(protected iconService: IconService) {}\n\n  ngOnInit() {\n    this.iconService.registerAll([Notification20]);\n  }\n')),"\n","\n",l.createElement(n.p,null,"Next step is to import the ",l.createElement(n.code,null,"IconModule")," in the ",l.createElement(n.code,null,"AppModule")," module where the\n",l.createElement(n.code,null,"HeaderComponent")," is declared."),"\n","\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript",metaData:"path=src/app/header/header.component.ts"},'import { IconModule } from "carbon-components-angular";\n...\n\nimports: [\n  ...\n  IconModule\n]\n')),"\n","\n",l.createElement(n.p,null,"Now the icon is ready to be used in template code. Template in\n",l.createElement(n.code,null,"header.component.html")," should look like this:"),"\n","\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-html",metaData:"path=src/app/header/header.component.html"},'<ibm-header name="Carbon Tutorial Angular">\n  <ibm-header-navigation ariaLabel="Carbon Tutorial Angular">\n    <ibm-header-item href="/repos">Repositories</ibm-header-item>\n  </ibm-header-navigation>\n  <ibm-header-global>\n    <ibm-header-action title="action">\n      <svg ibmIcon="notification" size="20"></svg>\n    </ibm-header-action>\n    <ibm-header-action title="action">\n      <svg ibmIcon="user--avatar" size="20"></svg>\n    </ibm-header-action>\n    <ibm-header-action title="action">\n      <svg ibmIcon="app-switcher" size="20"></svg>\n    </ibm-header-action>\n  </ibm-header-global>\n</ibm-header>\n')),"\n","\n",l.createElement(n.p,null,"Notice that the icon names are the same as their file path. This how the\ndirective queries the service for the icon."),"\n",l.createElement(n.p,null,"Next import the header component in ",l.createElement(n.code,null,"app.component.spec.ts")," and add the\ncomponent in ",l.createElement(n.code,null,"app.component.html")),"\n","\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript",metaData:"path=src/app/app.component.spec.ts"},"import { HeaderComponent } from './header/header.component';\n")),"\n","\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript",metaData:"path=src/app/app.component.spec.ts"},"declarations: [HeaderComponent];\n")),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-html",metaData:"path=src/app/app.component.html"},'<app-header></app-header>\n<main class="cds--content">\n  <router-outlet></router-outlet>\n</main>\n')),"\n",l.createElement(n.p,null,"Let’s add some padding to the top of the document, so the content is below the\nheader. We are going to do this by using the ",l.createElement(n.code,null,"cds--header")," class provided by\ncarbon. So in ",l.createElement(n.code,null,"header.component.ts")," lets hostbind that class."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript"},"import { Component, HostBinding } from '@angular/core';\n  ...\n  @HostBinding('class.cds--header') headerClass = true;\n")),"\n",l.createElement(n.h3,null,"Create pages"),"\n",l.createElement(n.p,null,"Next thing we need to do is create the files for our content. These files will\nbe located in the ",l.createElement(n.code,null,"app")," folder inside of ",l.createElement(n.code,null,"src"),". It should be a sibling of\n",l.createElement(n.code,null,"header"),"."),"\n",l.createElement(n.p,null,"Our app will have two pages. First, we need a landing page. Go ahead and stop\nyour development server (with ",l.createElement(n.code,null,"CTRL-C"),") and then:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-bash"},"ng g module home --routing --lint-fix\nng g component home/landing-page --lint-fix\n")),"\n",l.createElement(n.h5,null,"Folder structure"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-bash"},"src/app/home\n├── landing-page\n│   ├── landing-page.component.html\n│   ├── landing-page.component.scss\n│   ├── landing-page.component.spec.ts\n│   └── landing-page.component.ts\n├── home-routing.module.ts\n└── home-page.module.ts\n")),"\n",l.createElement(n.p,null,"And a repo page:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-bash"},"ng g module repositories --routing --lint-fix\nng g component repositories/repo-page --lint-fix\n")),"\n",l.createElement(n.h5,null,"Folder structure"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-bash"},"src/app/repositories\n├── repo-page\n│   ├── repo-page.component.html\n│   ├── repo-page.component.scss\n│   ├── repo-page.component.spec.ts\n│   └── repo-page.component.ts\n├── repositories-routing.module.ts\n└── repositories.module.ts\n")),"\n",l.createElement(n.p,null,"Now you can restart your server with ",l.createElement(n.code,null,"npm start"),"."),"\n",l.createElement(n.h3,null,"Add routing"),"\n",l.createElement(n.p,null,"We need to update routing functionality to enable the loading of ",l.createElement(n.code,null,"repositories"),".\nInside ",l.createElement(n.code,null,"app-routing.module.ts")," we’ll add the following code in the routes array:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript",metaData:"path=src/app-routing.module.ts"},"const routes: Routes = [\n  {\n    path: '',\n    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),\n  },\n  {\n    path: 'repos',\n    loadChildren: () =>\n      import('./repositories/repositories.module').then(\n        (m) => m.RepositoriesModule\n      ),\n  },\n];\n")),"\n",l.createElement(n.p,null,"And modify the ",l.createElement(n.code,null,"NgModule")," declaration to use the hash router:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript",metaData:"path=src/app-routing.module.ts"},"@NgModule({\n  imports: [RouterModule.forRoot(routes, { useHash: true })],\n  exports: [RouterModule],\n})\nexport class AppRoutingModule {}\n")),"\n",l.createElement(n.p,null,"And add routes for the landing and repo pages:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript",metaData:"path=src/app/home/home-routing.module.ts"},"import { LandingPageComponent } from './landing-page/landing-page.component';\n\nconst routes: Routes = [\n  {\n    path: '',\n    component: LandingPageComponent,\n  },\n];\n")),"\n","\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript",metaData:"path=src/app/repositories/repositories-routing.module.ts"},"import { RepoPageComponent } from './repo-page/repo-page.component';\n\nconst routes: Routes = [\n  {\n    path: '',\n    component: RepoPageComponent\n  }\n];\n")),"\n","\n",l.createElement(n.p,null,"After that we need to do a couple quick fixes to the UI Shell to have it route\nto the repo page."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-html",metaData:"path=src/app/header/header.component.html"},"<ibm-header-item [route]=\"['/repos']\">Repositories</ibm-header-item>\n")),"\n",l.createElement(n.p,null,"You should now have a working header that routes to the repos pages without full\npage reload!"),"\n",l.createElement(n.h3,null,"Submit pull request"),"\n",l.createElement(n.p,null,"We’re going to submit a pull request to verify completion of this tutorial step\nand demonstrate a couple related concepts."),"\n",l.createElement(n.h4,null,"Continuous integration (CI) check"),"\n",l.createElement(i,null,l.createElement(n.p,null,l.createElement(n.strong,null,"Note:")," Before you run any tests, make sure that you are using ChromeHeadless\nin ",l.createElement(n.code,null,"karma.conf.js")," instead of Chrome.")),"\n",l.createElement(n.p,null,"We have ",l.createElement(n.code,null,"lint")," and ",l.createElement(n.code,null,"test")," scripts defined in ",l.createElement(n.code,null,"package.json")," that verify file\nformatting for files that have been touched since the last Git commit. You’d\ntypically also have that script run your test suite as part of your CI build. Go\nahead and make sure everything looks good with:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-bash"},"ng lint --fix\nnpm run lint && npm test\n")),"\n",l.createElement(i,null,l.createElement(n.p,null,l.createElement(n.strong,null,"Note:")," If this gives an error, it’s likely that some of your source files are\nnot properly formatted.")),"\n",l.createElement(n.h4,null,"Git commit and push"),"\n",l.createElement(n.p,null,"Before we can create a pull request, we need to stage and commit all of our\nchanges:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-bash"},'git add --all && git commit -m "feat(tutorial): complete step 1"\n')),"\n",l.createElement(n.p,null,"Then, push to your repository:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-bash"},"git push origin angular-step-1\n")),"\n",l.createElement(i,null,l.createElement(n.p,null,l.createElement(n.strong,null,"Note:")," If your Git remote protocol is HTTPS instead of SSH, you may be\nprompted to authenticate with GitHub when you push changes. If your GitHub\naccount has two-factor authentication enabled, we recommend that you follow\nthese instructions to\n",l.createElement(n.a,{href:"https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line"},"create a personal access token for the command line"),".\nThat lets you use your token instead of password when performing Git operations\nover HTTPS.")),"\n",l.createElement(i,null,l.createElement(n.p,null,l.createElement(n.strong,null,"Note:")," If you receive a ",l.createElement(n.code,null,"non-fast-forward")," error, it’s likely that your\nforked repository is behind the original repository and needs updated. This can\nhappen if the tutorial was updated after you began working on it. To fix, run\n",l.createElement(n.code,null,"git pull upstream angular-step-1")," to merge the changes into your branch, then\nyou can try pushing again. Or, you can\n",l.createElement(n.a,{href:"https://help.github.com/en/articles/syncing-a-fork"},"manually merge")," in the\nupstream changes.")),"\n",l.createElement(n.h4,null,"Pull request (PR)"),"\n",l.createElement(n.p,null,"Finally, visit\n",l.createElement(n.a,{href:"https://github.com/carbon-design-system/carbon-tutorial-angular"},"carbon-tutorial-angular"),"\nto “Compare & pull request”. In doing so, make sure that you are comparing to\n",l.createElement(n.code,null,"angular-step-1")," into ",l.createElement(n.code,null,"base: angular-step-1"),". Take notice of the\n",l.createElement(n.a,{href:"https://www.netlify.com"},"Netlify")," bot that deploys a preview of your PR every\ntime that you push new commits. These previews can be shared and viewed by\nanybody to assist the PR review process."),"\n",l.createElement(i,null,l.createElement(n.p,null,l.createElement(n.strong,null,"Note:")," Your tutorial step will be automatically reviewed based on the status\nof your tests. Ensure that your tests pass when you submit your PR. Expect your\ntutorial step PRs to be reviewed by the Carbon team but not merged. We’ll close\nyour PR so we can keep the repository’s remote branches pristine and ready for\nthe next person!")))}function c(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(e={}){const{wrapper:n}=Object.assign({},(0,a.R)(),e.components);return n?l.createElement(n,e,l.createElement(r,e)):r(e)}},725441:function(e,n,t){t.d(n,{A:function(){return l}});var a=t(296540);var l=({title:e,...n})=>a.createElement("iframe",Object.assign({loading:"lazy",title:e},n,{className:"Preview-module--preview--3e1df"}))}}]);