## P3 Peer Review

+ Reviewer's name: Atanas Gizdov
+ Reviwee's name: gduka
+ URL to reviewee's Github repo: *<https://github.com/gduka/e28/tree/master/p3>*


### Are you able to produce any errors or unexpected results?

+ All pages are working as expected

### Were there any parts of the interface that you found confusing or unclear?

+ Small note but the page is currently not centered on my monitor. I would play around with the CSS to make sure the main div is centered

### Are there aspects of the code that you feel were not self-evident and would benefit from comments?

+ The structure makes sense and is very similar to how I would structure my project, with a few good improvements for future scalability

### Are there any parts of the code that you found interesting or taught you something new?

+ I liked the idea of extracting the App level requirements into the app.js file. I did not do this for my own projects but seems to add a nice level of abstraction

+ I liked that you moved the local storage to its own class for potential future re-use in other parts of the app

+ Good use of an external API Mockup site

### Are there any best practices discussed in course material that you feel were not addressed in the code?

Few small things you may want to consider for stability:

+ First and foremost, I recommend wrapping your API call in a try/catch clause. Always assume the API will be unavailable and work backwards from there
+ Next, I would recommend making the API call async, to avoid the page sitting idle, especially when calling out to external API's. Both of the above can be achieved with a simple boolean and some of the mounted keywords in Vue

````
async mounted () {
  this.loaded = false
  Vue.axios
    .get('some_external_api')
    .then((response) => {
      foo bar baz
    this.loaded = true
    })
    .catch(function (error) {
      console.log(error) //or whatever other catch logic you want
    })
}
````


### Do you have any additional comments not covered in the above questions?

+ Overall, I enjoyed reviewing your website. Well done!
