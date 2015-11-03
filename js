#!/usr/bin/env python
import os


def js(argument=None):
    os.chdir(os.path.abspath('.'))
    FileList = os.listdir('.')
    if not argument:
        delclass(FileList)
        recompile(os.listdir('.'))
        print"[+] Class removed and recompiled"

    elif argument:
        delArg = argument
        if delArg.endswith('.'):
            delArg = delArg + 'class'
        elif not delArg.endswith('.class'):
            delArg = delArg + '.class'
        
        delclass(delArg)


        compileArg = argument
        if compileArg.endswith('.'):
            compileArg = compileArg + 'java'
        elif not compileArg.endswith('java'):
            compileArg = compileArg + '.java'     
    
        recompile(compileArg)

        executeArg = argument
        if executeArg.endswith('.'):
            executeArg = executeArg.replace('.','')
        elif executeArg.endswith('.java'):
            executeArg = executeArg.replace('.java','')
        execute(executeArg)

def delclass(flist):
    if isinstance(flist,list):
        for i in flist:
            if i.endswith('.class'):
                print "[+] %s removed" % i
                os.remove(i)
    else:
        for i in os.listdir('.'):
            if i.startswith(flist[:flist.index('.')]) and i.endswith('.class'):
                os.remove(i)
                print "[+] class found and removed"

def recompile(flist):
    
    if isinstance(flist,list): # If the flist is a list
        for i in flist:
            os.system('javac %s' % i)
            print"[+] Compiled %s" % i
    else: # If flist is just a variable
        os.system('javac %s' % flist)
        print"[+] Compiled %s" % flist


def execute(file):
    """file needs to be the java class file to execute"""
    print"[+] Executing ... \n========================================"
    os.system("java %s" % file)


if __name__ == "__main__":
    import sys
    try:
        if '-h' in sys.argv:
            print """
Usage
    
    js (file)
        ----
        Optional

    : js 
       
       If called WITHOUT file argument will remove all .class and recompile every java file inside the current directory

    : js file.java 
    
       If called WITH file argument, it will remove the respective compiled .class file, recompile the file argument and execute it.
    """
        elif len(sys.argv) == 2:
            js(sys.argv[1])
        else:
            js()
    except KeyboardInterrupt:
        print"[!] Terminating"