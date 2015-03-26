#!/bin/bash

ignore_files=( "index.html" "conf.js" )
#for igf in ${ignore_files[@]}
#do
#	echo "$igf"
#done

#if [[ "${ignore_files[@]}" =~ "index.htm " || "${ignore_files[${#arr[@]}-1]}" == "index.htm" ]]; then
#    echo 'existing'
#else
#    echo 'nonexisting'
#fi

process_plugins() {
	for f in ../plugins/*; do
		if [[ -d $f ]]; then
		echo "plugin: $f" # f is custom plugin folder
		link_add_plugins "$f"
		init_head_plugin "$f" # head for each plugin
		for ff in $f/*; do
			if [[ -f $ff ]]; then
				echo "file: $ff" # ff is filenames located in custom plugin folder
				fname=$(basename "$ff")
				echo "fname: $fname"
				if [[ "${ignore_files[@]}" =~ "$fname" || "${ignore_files[${#arr[@]}-1]}" == "$fname" ]]; then
					echo "$fname ingored"
				else
					echo "processing: $ff"
					process_files_plugin "$fname" "$ff"
				fi
			fi
		done
		end_foot_plugin "$f" # foot for each plugin
	fi
done
	link_output_plugins
}

init_head_plugin() { # initial header of index.html for each plugin
	plugin_html=$(<"./plugin_header")"<h1>$1</h1>"
	echo "$plugin_html" 
}

process_files_plugin() { # inside index.html of each plugin add the individual file links
	echo "processing $1 $2" # 1 is the basename, and 2 is the filepath
	plugin_html=$plugin_html"<a href='"
	plugin_html=$plugin_html$1
	plugin_html=$plugin_html"'>"
	plugin_html=$plugin_html$1
	plugin_html=$plugin_html"</a><p>"
}

end_foot_plugin() { # output each plugin-name/index.html 
	plugin_html=$plugin_html$(<"./plugin_footer")
	echo "$plugin_html" > "$1/index.html"
}

link_add_plugins() { # add each plugin link to the left panel
	pname=$(basename "$1")
	links=$links"<a target='right' href='" 
	links=$links"$1/index.html'>"
	links=$links"$pname"
	links=$links"</a><p>"
	echo "links: $links"
}

link_output_plugins() { # outpout the left panel links to plugins.html
	links=$links"<link rel='stylesheet' href='../css/main.css'>"
	links=$links"<script src='../lib/jquery-1.8.0.min.js'></script>"
	links=$links"<script src='../lib/a_search.js'></script>"
	echo "$links" > "plugins.html"
}

process_plugins # loop plugins and generate index.html for each
