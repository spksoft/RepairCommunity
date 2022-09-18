# RepairCommunity

strapi
meawhung@gmail.com
Meawhung2538

https://elements.heroku.com/buildpacks/timanovsky/subdir-heroku-buildpack

heroku buildpacks:clear
heroku buildpacks:set https://github.com/timanovsky/subdir-heroku-buildpack
heroku buildpacks:add heroku/nodejs
heroku config:set PROJECT_PATH=projects/nodejs/frontend

Deploy your project to Heroku.
