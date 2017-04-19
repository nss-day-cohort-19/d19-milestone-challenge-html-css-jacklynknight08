var blogDisplay = document.getElementById("blog-id");

var blogPosts = [{
					title: "Entry 1",
					copy: "I had a great first week at NSS! Everyone I've met so far in my cohort has been awesome. I'm definitely learning a lot in such a short time. I'm slowly but surely learning how to use the terminal and push projects up to GitHub. It took me a bit but I finally learned how to download and install programs onto my computer. It was a struggle figuring that out since I'm not familiar using Ubuntu. It's been amazing actually starting to write code and create something from nothing. Definitely a great experience here so far.",
					date:"April 7, 2017"
				},
				{
					title: "Entry 2",
					copy: "We are definitely moving fast here at NSS. In this second week, I'm learning more in javascript and completing more exercises. We started our first group project, and that was an eye-opener for sure. It's great to get to work with people from different backgrounds and see how well you all actually work together. After completing the first group project, we were assigned different groups with the same task as before. I really enjoyed cooperating with the second group I was in. We all worked together more efficiently and were able to knock the project out super fast. All in all, it was a great week.",
					date: "April 14th, 2017"
				}]

for(posts in blogPosts) {
	var posts = `<article id="posts-js">
				 <p id="title-id">${blogPosts[posts].title}</p>
				 <p id="copy-id">${blogPosts[posts].copy}</p>
				 <p id="date-id">${blogPosts[posts].date}</p>
				 </article>`;

	blogDisplay.innerHTML += posts;
}