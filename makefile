
www :
	git pull
	git checkout gh-pages
	git merge master
	git push origin gh-pages:gh-pages

show : 
	firefox http://datagramme.fr

