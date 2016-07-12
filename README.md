# Youtube search by duration

With this handy script you can filter many youtube searches and get videos of a any specific length you like (between a minimum and maximum duration) and then display the results in an html document.

## The Why

I wanted to do some indoor bike for a specific amount of time and watch a video of roughly that same length. I searched for a tool to do this and I couldn't even find results even related to what I was looking for. Youtube's current filter of "short <4 minutes" and "long > 20 minutes" was not specific enough, so it was time to go to the drawing board and create my own solution!

This will be useful if you have any activity that lasts a specific time and want to find videos of that length according to your interests.

## Requirements

- Ruby
- NPM

Run this commands:

```
gem install nokogiri
npm install
npm install -g gulp-cli
```

## Instructions

Edit `search-config.yml` to your liking, the parameters are 
- `min_time`: Minimum video duration
- `max_time`: Maximum video duration
- `keywords`: List of all the search queries for which to find videos

After you have set your preferences, run:

```
./get-links
```

And wait for the script to scrape youtube for the information. It will look like this:

[![asciicast](https://asciinema.org/a/8cs7cacqnvc1x874c5dk1c8jn.png)](https://asciinema.org/a/8cs7cacqnvc1x874c5dk1c8jn)

After it's ready, run:

```
gulp serve
```

To see the results in your browser! Which will roughly look like this:

![screenshot](http://i.imgur.com/CcYtRGh.png)

If you'd like to upload the results to your server, run `gulp build` and check the `./dist` folder
