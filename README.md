# js

- Mass Java source file compiler
- Removes the compiled `.class` file and compiles again
- If the file argument is provided, existing `.class` file will be removed and compile the .java file and run it.

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

Both are the same as calling `js file.java`. This feature has been implemented since the bash shell will only autocomplete the filename with a dot (.) if there are multiple files. Laziness is a virtue for the programmer. 
    
