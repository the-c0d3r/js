# js
Usage
    
`js (file)`
   ----
   Optional

: `js` 

If called WITHOUT file argument will remove all .class and recompile every java file inside the current directory

: `js file.java`

If called WITH file argument, it will remove the respective compiled .class file, recompile the file argument and execute it.

OR

: `js file.`

OR 

: `js file`

Both are the same as calling `js file.java`. This feature has been implemented since the bash shell will only autocomplete the filename with a dot (.) if there are multiple files. Lazziness is a virtue for the programmer. 
    
