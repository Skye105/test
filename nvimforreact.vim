execute "vsplit"
execute "edit src/index.js"
wincmd l
execute "edit src/index.css"
wincmd h
execute "tabe"
execute "vsplit"
execute "edit src/App.js"
wincmd l
execute "edit src/App.css"
wincmd h
execute ":cd src"

function! OpenReact(file)
execute "tabe"
execute "vsplit"
execute "edit " . a:file . ".js"
wincmd l
execute "edit " . a:file . ".css"
wincmd h
endfunction

command -nargs=1 OpenReact call OpenReact(<f-args>)
